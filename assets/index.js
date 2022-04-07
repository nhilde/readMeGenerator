// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'What is the description of the project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Do you want to include a table of contents?',
      name: 'tableOfContents',
    },
    {
        type:'input',
        message:'How do you install this application?',
        name:'installation',
    },
    {
        type:'input',
        message:'How is the application used?',
        name:'usage',
    },
    {
        type:'input',
        message:'Do you want to credit anyone / anything?',
        name:'credits',
    },
    {
        type:'input',
        message:'Do you want to include a license?',
        name:'license',
    },
    {
        type:'input',
        message:'Do you want to inlcude any badges?',
        name:'badges',
    },
    {
        type:'input',
        message:'Do you want to include a list of features?',
        name:'features',
    },
    {
        type:'input',
        message:'Do you want to inlcude a section on how to contribute?',
        name:'contribute',
    },
    {
        type:'input',
        message:'Do you want to include tests for your project?',
        name:'tests',
    },
  ])
  .then((response) =>
    console.log(response),
    console.log("test")
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  `# ${projectName}

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  ${tableOfContents}
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [Features](#features)
  - [How to Contribute](#how to contribute)
  
  ## Installation
  
  
  
  ## Usage
  
  
      ![alt text](assets/images/screenshot.png)
      
  
  ## Credits
  
  
  
  ## License
  
  
  
  ## Badges
  
  
  
  ## Features
  
  
  
  ## How to Contribute
  
  
  
  ## Tests



  ## Questions



`
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();