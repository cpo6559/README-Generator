// TODO: Include packages needed for this application
var generateREADME = require("");
var theInquirer = require ('inquirer');
const Choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What's your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your GitHub profile link?",
        name: "GitHub Profile Link"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },

    {
        type: "input",
        message: "What is the title of your repository?",
        name: "name of repository"
    },
    {
        type: "input",
        message: "How would you describe the repository?",
        name: "description"
    }, {
        type: "input",
        message: "Can others contribute?",
        name: "contribute"
    }, {
        type: "input",
        message: "Which, if any, liscence would you like to use? ",
        name: "license",
        choices: [
        "APACHE 2.O",
        "BSD 3",
        "GVL-GPL 3.0",
        "MIT",
        "None"]
    }, {
        type: "input",
        message: "",
        name: ""
    }, {
        type: "input",
        message: "",
        name: ""
    }, {
        type: "input",
        message: "",
        name: ""
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
