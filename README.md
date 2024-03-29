# TutorHub

CP317 Software Engineering Project

## READ ME FIRST

12/07/2020:

> Added base structure if you'd like to practice building routes you can do so buy adding controllers and attaching them to the routes, there should be no need to touch app.js

07/06/2020:

> .gitkeep files can safely be deleted once you add another file in the folder (only there to keep folder on remote repository), if you are deleting files from a folder and need the folder to persist, please create a .gitkeep.

> Always pull master to your branch and merge any changes, master will only hold code that is stable.

> Look at this README.md at least once when you work on the project to stay up to date.

## TODO

List of things to add in the future but held off (not an exhaustive list)

> Flash messages (connect-flash and express-session)

## Installation

Use the npm package manager to install TutorHub to setup for development.

After cloning the repository, install the dependencies:

```
npm i
```

To run the application in development mode:

```
npm run dev
```

Look at your terminal, it will either show errors or tell you which localhost port your application is live on (default 8080).

## Contributors

Please create your own branch

```
git checkout -b YOUR_BRANCH_NAME
```

and then to push to remote simply set your upstream origin

```
git push --set-upstream origin YOUR_BRANCH_NAME
```

Try not to merge changes yourself to master unless you're 100% sure it's both correct and won't mess up the git workflow. Changes will be reviewed and merged onto the master, this lets us not interfere with each other and have a detailed history of who did what and when so any mistakes can be backtracked efficiently.

[SIMPLE GIT GUIDE](https://rogerdudler.github.io/git-guide/)
