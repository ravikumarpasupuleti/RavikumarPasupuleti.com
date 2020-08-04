---
author: [Ravikumar Pasupuleti]
title: 'Setting up SPFX Environment and Tooling'

date: 2020-06-01
tags:
  - SPFX
  - Tooling
  - ReactJs
  - SharePoint Online
thumbnail: ../images/spfx_thumbnail.jpg
popular: false
---

## SPFX Development environment Set up(Windows)

1. Chocolaltey
   1. First, ensure that you are using an administrative shell - you can also install as a non-admin, check out Non-Administrative Installation.
   2. https://chocolatey.org/docs/installation
2. nodejs
   1. https://nodejs.org/dist/v10.22.0/docs/api/
3. nvm

   1. nvm is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.
   2. https://github.com/nvm-sh/nvm#installing-and-updating
   3. Item 3b

4. yarn

   1. Both NPM and Yarn are both package managers. They created Yarn to solve the problems they were having while using NPM particularly the problems with consistency, security and speed. Yarn has the same feature set while operating faster, more securely and most importantly more reliable.
   2. Faster build process
   3. can run multiple versions of packages.

5. Install Python

   1. https://www.python.org/downloads/

6. Updating environmental variables if required

   1. https://www.python.org/downloads/
   2. C:\Python27
   3. C:\Python27\scripts
   4. C:\users\appData\Roaming\nvm
   5. C:\Program files\nodejs

7. Windows Terminal
   1. The Windows Terminal is a modern, fast, efficient, powerful, and productive terminal application for users of command-line tools and shells like Command Prompt, PowerShell, and WSL. Its main features include multiple tabs, panes, Unicode and UTF-8 character support, a GPU accelerated text rendering engine, and custom themes, styles, and configurations.
   2. https://github.com/microsoft/terminal
8. Visual Studio Code
   1. Free. Built on open source. Runs everywhere.
   2. https://code.visualstudio.com/
9. Extensions
   1. ESLint
   2. Git Lens
   3. TSLint
   4. Git History
   5. Debugger for Chrome
   6. Git Blame
   7. Prettier
   8. Auto Import
   9. vscode-icons
   10. Spell Checker
   11. markdownlint
   12. bracket pair colozier

## Finally SharePoint Framework

1. Follow the instructions for SPFX set up
   1. https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment
2. Commands

##### Install Yeoman and Gulp

```console
yarn gobal add gulp yo @microsoft/generator-sharepoint
```

##### PnP SPFX Generator

```console
yarn global add @pnp/generator-spfx
```

##### Trusting SPFX - Local Workbench setup

```console
gulp trust-dev-cert
```

You are all set to run your First SPFX webpart
