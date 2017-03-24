#!/usr/bin/env node
"use strict";

const fs = require("fs");

const chalk = require("chalk");
const shell = require("shelljs");

//Get Name of the Repository

//Get First commit date

//Get Main Author (Most commits)

//Get Current Status

//Get Authors Contributions

//Get Languages Statistics

//Get Branches

//Get Filetypes

//Get Commit Logs

/**
* @brief Get all the Git data and process
*   it to generate displayable info
*/
function getAndProcessGitData() {
    console.log(chalk.blue.bold("DEEP"));
}

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
