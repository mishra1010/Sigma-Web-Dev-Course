## Day 1

Execution starts from index.html, then main.jsx, then content in App as root node contains app.
App is called a component

In React, jsx files helps to write html code in js file and react gives this functionality. If the function names are in lower case as we have in normal html, it won't work. In JSX, react expect upcase letters for function declarations. In all functions in react, one line of html can get excecuted without issues, for more than one there needs to be a wrapper like div, else execution fails.

Framework vs Library

jsx is javascript xml and tsx is typescript xml.

## Day 2

Create user component

use state for counter, increase counter by 1 when we click on button

## Day 3 - Files, Folder structure of vite project and importance

package.json - most imp file, all configurations, commands, dependencies and versions are mentioned here

node_modules - all dependent packages are downloaded and stored here

package-lock.json - contains exact version of dependencies and there are no changes performed in this file by user. All internal dependencies are tracked here.Packages in package.json are dependent on other packages internally, these are all available in this file.

readme.md - documentation

vite.config.js - vite related config and any changes can be defined here

eslint.config.js - standardizes JS, which files, which version, define rules here

gitignore - ignore files which should not go to version control

Project files

index.html - browser entry point, gets loaded and then loads main.jsx

## Day 4 - First react component

React js -> Header, sidenav, min content, side nav, footer are all components. In main component, we can make more components as well.

Using components - its like normal html components <Component />

First letter of component always starts with capital letter, that is the speciality of jsx and react library to recognize react components.

Everything is component in react when building UI

Component vs Function -

component - starts with capital letter and has html inside

function - starts with small letter and has javascript inside

---- Importing and Exporting components-----------

- make a new file for component

- Import and export types
    Default export - export default Login
    Named export - use export in function

- export helps component to be used in other components by using import

- import {named} , import default

## Day 5 - JSX in React

JSX - syntax extension for JS which lets write html

JSX with curly braces -
    - user variable with jsx
    - condition inside jsx
    - use function with jsx
    - operations inside jsx
    - object and array with jsx
    - Html tags property with jsx

## Day 6 - Click Event and Function call

