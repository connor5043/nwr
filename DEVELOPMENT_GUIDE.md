# Development Guide

Written for version 1.17.1.

## Table of Contents

[Technology Stack](#technology-stack) | [Development Procedure](#development-procedure) | [Project Structure](#project-structure) | [Some Important Functions](#some-important-functions)

## Technology Stack

- Based on Node.js, using Electron to develop.

- Using jQuery to control DOM.

- Using homemade native css to control its style, with Bootstrap and IconFont's help.

- Using Electron-store to persist user data.

- Using Node-i18n to perform internationalization ([I18n Contributing Guide](https://github.com/RoderickQiu/nwr/blob/master/locales/README.md)).

- Using Electron-build and NSIS to pack the executives.

- For the full technology stack, [package.json](https://github.com/RoderickQiu/nwr/blob/master/package.json) worths reading.

## Development Procedure

- Using VSCode to write Electron code using Javascript, HTML and CSS.

- Using Electron-debug to accelerate development.

- Using Electron-build to package.

- Using GitHub Release, Gitee Backup and Lanzous Cloud Disk to distribute the software.

- Using Vuepress to write the docs and using Vercel to publish.

## Project Structure

### Folders

- `locales`

    - This folder includes those translations. Using node-i18n, all files are JSONs.

- `packaged`

    - This folder contains the executives that are packaged via electron-build.

- `res`

    - `builder`

        - This folder contains the commands used by electron-build to build platform-specified executives.

    - `fonts`

        - This folder contains the fonts used by the software.

    - `icons`

        - This folder contains artworks used by the software, for example, the logos.

    - `sound`

        - This folder contains notifying sounds.

    - `tourguide`

        This folder contains artworks that are only used in the tourguide.

### Files in root directory

- `about.html`

    - The about page shown.

- `floating.html`

    - The file rendered inside the floating window (a.k.a. Mini Mode) used by the timer page.

- `index.html`

    - The index page of this software, and the main entry for users.

- `loader.css`

    - The loader shown when loading `index.html`, `statistics.html` and `settings.html`. Come as an individual css for injecting.

- `main.js`

    - The official programmatic entry and the headquarter of the whole software.

- `package.json`

    - The file controls nwr's version, dependencies, etc.

- `placeholder.html`

    - When the user has more than one screens, this file acts as the tool to block user using other screens when fullscreen focusing.

- `renderer.js`

    - This file contains the hotfixes injected after those pages have loaded.

- `settings-renderer.js`

    - This file is extracted from `settings.html` to reduce its size for better performance.

- `settings.html`

    - This file is the setting page nwr has.

- `statistics.html`

    - Though the recording job of statistics are done inside `main.js`, this file is the GUI entry for users to see the specific timing statistics in a vivid way.

- `style.css`

    - This file is the stylesheet for the whole software. Also used as the tool to override bootstrap's default styles.

- `supporter.js`

    - This file contains the common preparations that every html page needs before finishing loading.

- `timer.html`

    - This file is used when timing and is the controlling center for the timer to work.

- `tourguide.html`

    - This file is the tourguide.

- `update.json`

    - This file contains the newest release version and release notes.

- `updater.js`

    - This file checks the updating info and does auto-update check.

## Some Important Functions

### Functions inside `main.js`

This part will describe some important functions inside `main.js` as it's already a large file with more than 1700 lines of code and it's the headquarter of the whole application.

#### The Structure of `main.js`

The file can be divided into three parts:

- Global variables' declaration.

- Main functions.

- IPC communication functions.

#### Important Variables

- `win`, `settingsWin`, etc. are windows' name.

- `isTimerWin` configures if it's having a timer.

- `fullScreenProtection` is the variable controlling fullscreen mode's feature of focusing.

- `store`, `styleCache` and `statistics` are Electron-store instances (There is also another instance named `timingData`, which is used inside `index.html` and `timer.html`.)

#### Main Functions

- `createWindow()` is the function that configures the main window.

- `setFullScreenMode()` is the core function controlling the fullscreen focus mode.

- `*Solution()` are functions that controls specific perspectives.

    - For example, `touchBarSolution()` controls the touch bar and `macOSFullscreenSolution()` controls the behavior of the top bar when fullscreen focus mode is on.

- `app.on('ready', () => {})` is the function that initializes nwr.

- `isDarkMode()` and `darkModeSettingsFinder()` configures dark mode settings.

- `statisticsInitializer()` initializes the statistics feature and `statisticsWriter()` records timing statistics info for `statistics.html` to show.

#### IPC Fommuniation Functions

- `ipcMain.on('warning-giver-*', function () {})` are the controlling methods to change the main window's behavior when switching from working to resting or from resting to working, etc.

    - If you want to configure those UI elements' behavior when timing, you need to go and see `timer.html`.

- `ipcMain.on('update-feedback', function () {})` is the function configures updating.

- `ipcMain.on('alert', function () {})` is the function used to send dialog boxes.

    - `notificationSolution()` and `ipcMain.on('notify', function () {})` is used to send notifications.

- `ipcMain.on('timer-win', function () {})` helps `main.js` to switch its status based on whether it's currently showing `timer.html` or not.

### Functions inside `timer.html`

This part will describe some important functions inside `timer.html` as it's also a large file and controls the timer which is the basic functionality of this software.

- `mistakeResolver()` is for users to undo some unwanted focus mode timing.

    - Functions with similar usages and names:

        - `backcheck()` is to check back-ability when it's not in focus mode.

        - `recheck()` is for lock mode. Because when lock mode is on, users need to input the right password in order to end the timer.

        - `backer()` is for backing home if `backcheck()` and `recheck()` has been passed.

- `stopper()` is to settle if the timer should be counting.

- `warningGiver()` is used to open warning windows after a period of time ends.

- `themeChanger()` is used to change theme, as work mode and rest mode have different color schemes.

    - For changes related to the main window, see `main.js`.

- `ender()` is the function to end the timer.

- `skipper()` is the function to end a period time so as to start the next period, either automatically or by the user.

- `clock()` is the function that executes every second to perform progress bar changes, time changes and so on.

    - We use `setInterval()` to perform the timer, and the logic of timer to calculate the time remaining is `periodLength - (nowTime - startTime)`.
