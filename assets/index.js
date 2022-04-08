// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');

const askUser = () => {
  return inquirer.prompt([
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
      message: 'How do you install this application?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How is the application used?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter any credits',
      name: 'credits',
    },
    {
      type: 'list',
      message: 'Which License would you like to include?',
      name: 'license',
      choices: [
        'MIT',
        'GPLv3',
        'ISC',
      ]
    },
    {
      type: 'input',
      message: 'Do you want to include a list of features?',
      name: 'features',
    },
    {
      type: 'input',
      message: 'Enter details on how to contribute',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'Do you want to include tests for your project?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Enter your GitHub username',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Enter your email address',
      name: 'email',
    },
  ]);
};


// TODO: Create a function to write README file
const generateMarkdown = (answers) => {

  return `# ${answers.projectName} [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})

  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
      
  
  ## Credits
  
  ${answers.credits}
  
  ## License
  
  Licensed under the [${answers.license} license] (LICENSE)
  
  
  ## Features
  
  ${answers.features}
  
  ## How to Contribute
  
  ${answers.contribute}
  
  ## Tests

  ${answers.tests}

  ## Questions

  For any further information, you can reach me at: <br>
  email: ${answers.email} <br>
  github: [GitHub](github.com/${answers.github})

`
}

// TODO: Create a function to initialize app
function init() {
  askUser()
  .then((answers) => fs.writeFileSync('../demoREADME/README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully generated a README.md'))
    .catch((err) => console.error(err));
 };

// Function call to initialize app
init()