
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List contributors:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ["Apache license 2.0", "ISC", "MIT", "GNU GPL v3"],
    },
    {
        type: 'input',
        name: 'technology',
        message: 'What are the technology you used?'

    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this application?'
    } ,
    {
        type: 'input',
        name: 'screenshot',
        message: 'Add a screenshot of the application'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github user name?',
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created Readme file!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
