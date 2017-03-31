git-snoop
=========

> `git-snoop`: A command line tool for statistical analysis of a git repository. It generates a detailed statistical information about a repository.

Description
-----------
Wouldn't it be amazing if say you clone a huge codebase and want to quickly see some important details about this repository. `git-snoop` lets you do that with just a simple command from your terminal.

#### Statistics
- shows authors info (name and number of commits) and lead author
- shows number of branches
- shows start date
- shows total number of commits
- shows top 10 filetypes (by extension) and total number of filetypes

<p align="center">
    <img src="resources/images/git-snoop-appImage.png">
</p>

Installation
------------
- Install Node.js and npm
- `cd git-snoop`
- `npm install -g`

Usage
-----
```sh
$ cd <some-git-repository>
$ git-snoop .
```

Future Improvements
-------------------
- The display can be converted into a nice image that will open using native image viewer
