// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');


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
      message: 'Enter the file path to the application demonstration',
      name: 'demo',
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
        'GNU GPLv3',
        'ISC',
      ]
    },
    {
      type: 'input',
      message: 'Do you want to inlcude any badges?',
      name: 'badges',
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
const generateMarkdown = ({ projectName, description, installation, usage, demo, credits, license, features, contribute, tests, email, github, badges }) => {

  `# ${projectName}

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [Features](#features)
  - [How to Contribute](#how to contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}

      ![${projectName}](${demo})
      
  
  ## Credits
  
  ${credits}
  
  ## License
  
  Licensed under the ${license} license
  
  ## Badges
  
  ${badges}
  
  ## Features
  
  ${features}
  
  ## How to Contribute
  
  ${contribute}
  
  ## Tests

  ${tests}

  ## Questions

  For any further information, you can email me at ${email} or my GitHub username ${github}

`
}

// TODO: Create a function to initialize app
function init() {
  askUser()
 }

// Function call to initialize app
init()