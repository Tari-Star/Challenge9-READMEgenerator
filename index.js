// Packages for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

// Modules
const api = require('.utils/api.js');
const generateMarkdown =require('./utils/generateMarkdown.js');


// Array of questions for user input
const questions = [ {
    type: "input",
    message: "Enter your GitHub username",
    name: "username",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        return console.log("Please enter your GitHub Username!");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is the name of your GitHub repository?(Required)",
    name: "repo",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        return console.log("Please enter your GitHub repository name!");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Enter title of your project?",
    name: "title",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        return console.log("Please enter your project title!");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Provide a description of your project.(Required)",
    name: "description",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        return console.log("Please provide a project description!");
        return false;
      }
    },
  },
  {
    type: "input",
    message:
      "Provide a step-by-step description of how to get the development environment running.",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Provide any tests written for your application and examples on how to run them.",
    name: "tests",
  },
  {
    type: "input",
    message: "Choose a license for your project.",
    choices: ["GNU GPLv3", " GNU GPLv2 ", "Apache license 2.0", "MIT license", " ISC License"],
    name: "license",
  },];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log("Your README.md file has been generated! ");
      });
}

const writeFileAsync = util.promisify(writeToFile);

// Function to initialize app
function init() {
    
}

// Function call to initialize app
init();
