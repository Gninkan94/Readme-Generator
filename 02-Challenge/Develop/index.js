// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const { title } = require('process');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name : "title",
        message : "please enter your project name.",
    },
    {
        tpye : "input",
        name : "description",
        message: "please describe the purpose of the  project and its functionalities.",
    },
    {
       type: "input",
       name : "installation",
       message : "please enter your installions mode",
    },
    {
        type: "input",

        name: "usage",
        message: "Please enter technologies and languages associated with your project",
    },
    {
        type: "checkbox",
        name: "license",
        message: "please choose your prefered license applicable to your project.",
        choices: ["MIT", "afl-3.0", "apache-2.0", "bsl-1.0", "bsd-2-clause", "0bsd", "none"],
       
    },
    {
        type: "input",
        name: "contributors",
        message: "please list any contributors to this project (use their github usernames)",
        default: "",
    },
    {
        type: "input",
        name: "test",
        message: "please provide a description of any test required for this application",

    },
    {
        type: "input",
        name: "questions",
        message: "please Enter any questions related to this project"
    },
    {
        type: "input",
        name: "creator",
        message: "Please enter your Github user name",
    },
    {
        type: "input", 
        name: "name",
        message: "please enter your full name",
    },
    {
        type: "input",
        name: "email",
        message: "please enter a valide email",
    },



];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((Response)=> {
        console.log("A README.md file was successfully created.... ");
        writeToFile("./readme.html/README.md", generateMarkdown({...Response }));
    });
}

// Function call to initialize app
init();
