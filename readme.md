A collection of apps, created to learn the basics of React and more!

## Understanding how to initialize a new React app. -> simplereact directory

[Simple React Development in 2018](https://hackernoon.com/simple-react-development-in-2017-113bd563691f)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) in order to understand how a simple createreact app is set up.

The goal is to showcase how easy it can be to start modern React development, a step-by-step process, from initial system setup through to deployment, without straying into tangent explanations that aren’t critical at this point in the learning process. 

Includes: 
* Yarn Installation.
* Run ```yarn create react-app [app-name]```
* Write some code for application. Only using React.
* Run Build ```yarn run build```
* Deploy. I used **surge.sh** installed via Command Line, confirm all information as it's built automatically but made sure to add ```/build``` to the path so that it knows to serve only the built project files, and not the source files.
* Site is live at URL given by Surge..

* **Added this line to package.json, under “scripts”: ```"deploy": "yarn run build && surge -p build -d your-domain.surge.sh"``` to make repeat deploys easier by simply running ```build```

## Writing a single-file React.js app -> singlefile-contact directory

[following along with this article on learning raw react -no JSX, no flux, no ES6, no Webpack..](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/)

#### file: index.js 
* Create basic html page with empty div id: react-app
* Create js file where React.createElement makes a contact list and generates an element and its corresponding content using this template from th documentation: ``` createElement(string/ReactClass type, [object props], [children ...]) -> ReactElement -> Example: React.createElement('h1', {}, "Contacts")``` (NOTE: CLASS)

* **This shows what React does at it’s most basic, React is a tool for rendering HTML with JavaScript. ```ReactDOM.render``` takes a ReactElement object describing what to render, adding the result to the given DOM node.**

## Refactoring my Contact List app with a component -> contactlist-refactor
In this directory I took what I did manually in the originally app and refactored it to learn how to use components and define objects and props with React.

