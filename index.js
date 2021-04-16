// Declaring packages needed for this application as constants
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateLicense = require('./utils/generateLicense.js');

const writeFileAsync = util.promisify(fs.writeFile);

// Inquirer with questions for user input
const userQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Enter a description for your project:",
            name: "description"
        },
        {
            type: "input",
            message: "Enter installation instructions for your project:",
            name: "install"
        },
        {
            type: "input",
            message: "Enter usage information for your project:",
            name: "usage"
        },
        {
            type: "input",
            message: "Who are the collaborators of this projects?",
            name: "credits"
        },
        {
            type: "input",
            message: "Enter your GitHub Username:",
            name: "github"
        },
        {
            type: "input",
            message: "Enter your email address:",
            name: "email"
        },
        {
            type: "list",
            message: "Which license does this project fall under?",
            name: "license",
            choices: [
                "MIT",
                "ISC",
                "EPL",
                "Apache 2.0",
            ]
        }
    ])
}

// Creates README file
const writeToFile = (answers) =>
    `# ${answers.title}
    
## Description
    
${answers.description}

## Table of Contents
- <a href="#inst">Installation<a>
- <a href="#use">Usage<a>
- <a href="#collab">Collaborators<a>
- <a href="#git">GitHub Profile<a>
- <a href="#email">Email For Contact<a>
- <a href="#lic">License<a>
    
## <h1 id="inst">Installation<h1>
    
${answers.install}

## <h1 id="use">Usage<h1>
    
${answers.usage}

## <h1 id="collab">Collaborators<h1>

${answers.credits}

## <h1 id="git">GitHub Profile<h1>

https://github.com/${answers.github}

## <h1 id="email">Email For Contact<h1>

${answers.email}

## <h1 id="lic">License<h1>

This application is covered under the ${answers.license} license
[![License: ${answers.license}]${generateLicense(answers.license)}
    `;


// Function to initialize app
const init = () => {
    userQuestions()
      .then((answers) => writeFileAsync('README.md', writeToFile(answers)))
      .then(() => console.log('Generating README file...'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();


