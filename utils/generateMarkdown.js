

// Function to generate markdown for README

function generateMarkdown(userInput, userInfo) {

  // generate table of contents conditionally based on userInput
  let tempTC = `## Table of Contents \n`;

  if (userInput.installation !== "") {
    tempTC += ` * [Installation](#installation) \n`;
  }

  if (userInput.usage !== "") {
    tempTC += ` * [Usage](#usage) \n`;
  }

  if (userInput.credits !== "") {
    tempTC += ` * [Credits](#credits) \n`;
  }

  if (userInput.tests !== "") {
    tempTC += ` * [Tests](#tests) \n`;
  }
  if (userInput.license !== "") {
    tempTC += ` * [License](#license)`;
  }
  // Generate markdown
  let tempMarkdown = 
  
  `# ${userInput.title}

 
  
  ![License:${userInput.license}](https://img.shields.io/badge/License-${userInput.license}-blue.svg)
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userInput.username}/${userInput.repo}?style=flat&logo=appveyor)
  ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userInput.username}/${userInput.repo}?style=flat&logo=appveyor)
 
  
  Check out the badges hosted by [shields.io](https://shields.io/).

  ## Description


   ${userInput.description}

  `;
  // Add Table of Contents to markdown

  tempMarkdown += tempTC;

  if (userInput.installation !== "") {
    tempMarkdown += `

  ## Installation 


  *To install necessary dependencies, run the following command:*
  
  ${userInput.installation} `;
  }

  if (userInput.usage !== "") {
    tempMarkdown += `

  ## Usage

    
  *Instructions and examples for use:*
    
  ${userInput.usage}`;
  }

  if (userInput.credits !== "") {
    tempMarkdown += `

  ## Credits

    
  ${userInput.credits}`;
  }

  if (userInput.tests !== "") {
    tempMarkdown += `

  ## Tests

    
  *Tests for application and how to run them:*
    
  ${userInput.tests}`;
  }

  if (userInput.license !== "") {
  tempMarkdown += `

  ## License

    
  This project is licensed under the [${userInput.license}](https://choosealicense.com/licenses/${userInput.license}) license.
    
    `;
  }
  tempMarkdown += `
  
   ---
   
  ## Questions?

   
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" width="40%" />
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
   `;

  if (userInfo.email !== null) {
    tempMarkdown += `

     Email: ${userInfo.email}
     
     `;
  }

  return tempMarkdown;
}

module.exports = generateMarkdown;
