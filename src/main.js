#!/usr/bin/env node
"use strict";

const fs = require("fs");

const chalk = require("chalk");
const shell = require("shelljs");
const Table = require("cli-table");

//Max number of commiters and file-types to show
let maxCommitersToShow = 5;
let maxFileTypesToShow = 10;

//Shell commands
let repoNameCmd = "basename `git rev-parse --show-toplevel`";
let firstCommitCmd = "git log --reverse --format='format:%ci' | head -1 | awk '{ print $1 }'";
let authorsCommitsCmd = "git shortlog -s -n --all | awk '{ print $0\"|;:\"}'";
let branchesNameCmd = "git branch -r | awk '{ print $0\"|;:\"}' | grep -v \"\\->\"";
let fileTypesCmd = "find . -type f -name '*.*' | sed 's/.*\\.//' | sort | uniq -c | sort -rn | grep -v \"~\" | awk '{ print $0\",\"}'";
let totalNumberOfCommitsCmd = "git rev-list --all --count";

//Holds the git data for this repo
let gitRepoData = {
  repoName: "",
  firstCommit: "",
  authorsContributions: [],
  numBranches: "",
  fileTypes: [],
  totalNumberOfCommitsAcrossAllBranches: ""
};

/**
 * @brief Executes shell command
 *
 * @param commandToExec The command to execute
 *
 * @return Returns the stdout output of the shell command
 */
function execShellCommand(commandToExec) {
  return shell.exec(commandToExec, {silent: true}).stdout.replace(/^\s+|\s+$/g, '') || "N/A";
}

/**
 * @brief Displayes git statistics
 */
function displayGitStats() {
  const table = new Table();

  //Top commiters
  let noOfCommiters = gitRepoData.authorsContributions.length;
  let noOfCommitersToShow = noOfCommiters > maxCommitersToShow ? maxCommitersToShow : noOfCommiters;
  let topCommiters = "";
  for(let i = 0; i < noOfCommitersToShow; i++) {
    topCommiters += `#Commits: ${gitRepoData.authorsContributions[i].noOfCommits}, ${gitRepoData.authorsContributions[i].name}`;
    if(i < noOfCommitersToShow - 1) {
      topCommiters += `\n`;
    }
  }

  //Filetypes
  let noOfFileTypes = gitRepoData.fileTypes.length;
  let noOfFileTypesToShow = noOfFileTypes > maxFileTypesToShow ? maxFileTypesToShow : noOfFileTypes;
  let topFiletypes = "";
  for(let i = 0; i < noOfFileTypesToShow; i++) {
    topFiletypes += `${gitRepoData.fileTypes[i]}`;
    if(i < noOfFileTypesToShow - 1) {
      topFiletypes += `\n`;
    }
  }

  table.push(
    { 'Repo': gitRepoData.repoName },
    { 'First Commit': gitRepoData.firstCommit },
    { 'Lead Author & #Commits': `${gitRepoData.authorsContributions[0].name} & ${gitRepoData.authorsContributions[0].noOfCommits}` },
    { 'Number of branches': gitRepoData.numBranches },
    { 'Total # of file types': gitRepoData.fileTypes.length },
    { 'Total commits across all branches': gitRepoData.totalNumberOfCommitsAcrossAllBranches },
    { 'Top 5 committers': topCommiters },
    { 'Top 10 file-types': topFiletypes }
  );

  console.log(table.toString());
}

/**
 * @brief Get all the Git data and process it to
 *  generate displayable info
 */
function getAndProcessGitData() {
  //Name of the Repository
  gitRepoData.repoName = execShellCommand(repoNameCmd);

  //First commit date
  gitRepoData.firstCommit = execShellCommand(firstCommitCmd);

  //Get Authors Contributions; NOTE: loop is iterated till length-1 since the last item is empty
  let authorsCommits = execShellCommand(authorsCommitsCmd).split("|;:");
  for(let i = 0; i < authorsCommits.length - 1; i++) {
    let [ noOfCommits, name ] = authorsCommits[i].replace(/^\s+|\s+$/g, '').split("\t");
    gitRepoData.authorsContributions.push({ "noOfCommits": noOfCommits, "name": name });
  }

  //Get number of branches; NOTE: 1 is subtracted as the last item is empty
  let branchesName = execShellCommand(branchesNameCmd).split("|;:");
  gitRepoData.numBranches = branchesName.length - 1;

  //Get Filetypes
  let fileTypes = execShellCommand(fileTypesCmd).split(",");
  for(let i = 0; i < fileTypes.length - 1; i++) {
    gitRepoData.fileTypes.push(fileTypes[i].replace(/^\s+|\s+$/g, ''));
  }

  //To get the commit count across all branches:
  gitRepoData.totalNumberOfCommitsAcrossAllBranches = execShellCommand(totalNumberOfCommitsCmd);

  //Display the statistics
  displayGitStats();
}

/**
 * @brief Checks for availability of dependencies and
 *   calls @getAndProcessGitData
 */
function main() {
  //Check if this is a git repository or not
  if(!fs.existsSync(".git")) {
    console.log(chalk.red.bold("ERROR: no .git directory present"));
    process.exit(1);
  }

  //Check that git is installed
  if(!shell.which("git")) {
    console.log(chalk.red.bold("ERROR: this script requires git"));
    process.exit(1);
  }

  //Start gathering data for presentation
  getAndProcessGitData();
}

if(require.main === module) {
  main();
}
