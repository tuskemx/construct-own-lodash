# CORE-project-template

## Install the necessary extensions

* On VSCode, go to the extensions side panel. It's the bottom icon on the left hand side. If you can't see any icons, click 'Show Activity Bar' in the view menu.
* Install 'Prettier - code formatter' and 'ESLint'. These are tools that will help keep your code better formatted, more readable, properly linted and, well, prettier.
* You may need to 'reload' after installing for the extension to take effect.
* You should only need to do this once! If they appear to stop working, check they are not disabled by clicking the same extensions icon.

## Configure your user settings

* On VSCode, go to Preferences -> Settings, and paste the following object into user settings.

```json
{
  "window.zoomLevel": 1,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "emmet.triggerExpansionOnTab": true,
  "editor.minimap.enabled": false,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "workbench.activityBar.visible": true
}
```

## To get this repo onto your computer

* On the command line, navigate to the folder you want this repo to be in.
* When pairing, one of you should click 'Fork' in the top right of the Northcoders' repo.
* Once you have forked your own version of this repo, both of you should clone that version to your local machine.
* To do this, on the command line type `git clone`, paste in the repo address, and press enter.

## To commit your repo

* Add the files you want to commit to the staging area by typing `git add` followed by the files and folders you wish to commit (for example, `git add index.js spec`).
* To commit, type `git commit -m` followed by a short description of the functionality you have achieved since your last commit.
* Resolve any issues that are preventing you from committing.
* To push to github, type `git push origin master`.

## To pull from a repo your pair has worked on

* Ensure you are in the project git folder on your computer.
* Ensure your pair's push has succeeded.
* Type `git pull origin master` to pull any changes that have been made to your repo.

## Node commands

Make sure you are in your project directory!

* To install dependencies: `npm install`
* To run your tests: `npm test`
* To run a lint check: `npm run lint`

You can see what these commands are aliases for by checking your package.json.

## Files in your repository

* _node_modules_ hold all the dependencies / libraries that your project relies on (for example, mocha and chai, for testing).
* _.editorconfig_ is used by VSCode to format some of your code.
* _.eslintrc.json_ contains the rules that eslint uses to check the linting (formatting) of your code.
* _.gitignore_ contains the names of all your files that you don't want committed to github. This includes node_modules, as we don't want to commit tonnes of unnecessary code that we can easily fetch with npm install.
* _index.js_ is often the name of the main file where your code originates, but it can be named anything!
* _spec_ is the folder for your tests - _index.spec.js_ tests your _index.js_.
* _package.json_ contains information used by npm to organise your project.
* _package-lock.json_ contains the information needed to link your node modules.
* _.prettierrc_ works with your prettier extension to make your code even prettier. Pretty neat!
* _README.md_ is your instructions for running or using a project. READ IT! Every repo should have one. You can open it in Preview (right click) for a prettier version (using the markdown type formatting).
