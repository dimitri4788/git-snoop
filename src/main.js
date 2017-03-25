#!/usr/bin/env node
"use strict";

const fs = require("fs");

const chalk = require("chalk");
const shell = require("shelljs");

//Shell commands
let repoNameComm = "basename `git rev-parse --show-toplevel`";
let firstCommitComm = "git log --reverse --format='format:%ci' | head -1 | awk '{ print $1 }'";
//let authorsCommitsComm = "git shortlog -s -n --all | awk '{print $1\"-\"$2\",\"}'"; XXX
let authorsCommitsComm = "git shortlog -s -n --all | awk '{ print $0\"|;:\"}'";

//Holds all the git data for this repo
let gitRepoData = {
  repoName: "",
  firstCommit: "",
  mainAuthorName: "",
  currentStatus: {
    recentBranch: "",
    untrackedfiles: "",
    changedFiles: ""
  },
  authorsContributions: [],
  languagesStatistics: [],
  branches: [],
  fileTypes: [],
  commitLogs: []
};

/**
 * @brief Executes shell command
 *
 * @param commandToExec The command to execute
 *
 * @return Returns the stdout output of the shell command
 */
function execShellCommand(commandToExec) {
  return shell.exec(commandToExec, {silent: true}).stdout.replace(/^\s+|\s+$/g, '');
}

/**
 * @brief Get all the Git data and process it to
 *  generate displayable info
 */
function getAndProcessGitData() {
  console.log(chalk.blue.bold("DEEP"));

  //Name of the Repository
  gitRepoData.repoName = execShellCommand(repoNameComm);
  console.log(gitRepoData.repoName === "git-snoop" ? "Yes" : "No");

  //First commit date
  gitRepoData.firstCommit = execShellCommand(firstCommitComm);
  console.log("First-commit: ", gitRepoData.firstCommit);

  //Get Authors Contributions
  let authorsCommits = execShellCommand(authorsCommitsComm);
  console.log("*************************");
  console.log(authorsCommits);
  console.log("*************************");
  //console.log("length: " , authorsCommits.length);
  authorsCommits.split("|;:").forEach(function(element) {
    console.log(element.trim());
  });

  //Get Main Author (Most commits)

  //Get Current Status

  //Get Languages Statistics

  //Get Branches

  //Get Filetypes

  //Get Commit Logs
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
