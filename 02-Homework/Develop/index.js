// TODO: Include packages needed for this application
var generateMarkdown = require("./utils/generateMarkdown");
var theInquirer = require('inquirer');
const fs = require("fs")
const Choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What's your GitHub username?",
        name: "Username"
    },
    {
        type: "input",
        message: "What is your GitHub profile link?",
        name: "GitHub Profile Link"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email"
    },

    {
        type: "input",
        message: "What is the title of your repository?",
        name: "Repository Name"
    },
    {
        type: "input",
        message: "How would you describe the repository?",
        name: "Description"
    }, {
        type: "input",
        message: "Can others contribute?",
        name: "Contribute"
    }, {
        type: "input",
        message: "Which, if any, liscence would you like to use? ",
        name: "License",
        choices: [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"]
    }, {
        type: "input",
        message: "What dependencies are required to run this app? ",
        name: "Required Dependencies"
    }, {
        type: "input",
        message: "What command is needed to test this app?",
        name: "Testing"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./ReadMe.md/" + fileName, data, function (err) {
        if (err) {
            return console.log(err)
        }
    }
    )
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("DemoREADME.md", generateMarkdown(data))
    }
)}


// Function call to initialize app
init();
