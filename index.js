// Declaring packages needed for this application as constants
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

inquirer
    .prompt([
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
            message: "Enter your GitHub Username:",
            name: "github"
        },
        {
            type: "input",
            message: "Enter your email address:",
            name: "email"
        },
    ])
    .then((response) => {
        fs.writeFile("README.json", JSON.stringify(response, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Creating README file...')
        );
        console.log(response);
    
    });
