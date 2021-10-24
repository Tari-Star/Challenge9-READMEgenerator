// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput, userInfo) {

  // generate table of contents conditionally based on userInput
  let tempTC = `## Table of Contents`;

  if (userInput.installation !== '') { tempTC += ` * [Installation](#installation)` };

  if (userInput.usage !== '') { tempTC += ` * [Usage](#usage)` };

  if (userInput.credits !== '') { tempTC += ` * [Credits](#credits)` };

  if (userInput.tests !== '') { tempTC += ` * [Tests](#tests)` };

  if (userInput.license !== '') { tempTC += ` * [License](#license)` };

  // Generate markdown 
  let tempMarkdown =

   `# ${userInput.title}

   ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userInput.username}/${userInput.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userInput.username}/${userInput.repo}?style=flat&logo=appveyor)
  
   Check out the badges hosted by [shields.io](https://shields.io/).

   ## Description

   ${userInput.description}

  `
 // Add Table of Contents to markdown
 tempMarkdown += tempTC;

 if (userInput.installation !== '') {

  tempMarkdown +=
  `
  ## Installation 

  *Steps required to install project and how to get the development environment running:*
  
  ${userInput.installation} `
 };

  if (userInput.usage !== '') {

    tempMarkdown +=
    `
    ## Usage
    
    *Instructions and examples for use:*
    
    ${userInput.usage}`
  };

  if (userInput.credits !== '') {

    tempMarkdown +=
      
    `
    
    ## Credits
    
    ${userInput.credits}`
    };
    
    if (userInput.tests !== '') {
    
    tempMarkdown +=
    `
    
    ## Tests
    
    *Tests for application and how to run them:*
    
    ${userInput.tests}`
    };

    if (userInput.license !== '') {
    

    tempMarkdown +=
    `
    
    ## License
    
    ${userInput.license}`

    };
  
}

module.exports = generateMarkdown;
