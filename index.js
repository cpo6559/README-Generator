// TODO: Include packages needed for this application
var  generateMarkdown = require("./generateMarkdown");
var theInquirer = require("inquirer");
const fs = require("fs");
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
        name: "GitHubProfileLink"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email"
    },

    {
        type: "input",
        message: "What is the title of your repository?",
        name: "RepositoryName"
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
        type: "list",
        message: "Which, if any, licence would you like to use? ",
        name: "License",
        choices: [
            "APACHE 2.O",
            "BSD 3",
            "GNU-GPL 3.0",
            "MIT",
            "None"]
    }, {
        type: "input",
        message: "What dependencies are required to run this app? ",
        name: "RequiredDependencies"
    }, {
        type: "input",
        message: "What command is needed to test this app?",
        name: "Testing"
    },
];

function readMeTemplate(data) {
    return `
    ${data.Username}
    
    `
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./ReadMe/" + fileName, data, function (err) {
        if (err) {
            return console.log(err)
        }
    }
    )
}
// TODO: Create a function to initialize app
function init() {
    theInquirer.prompt(questions).then(function (data) {
        writeToFile("DemoREADME.md", generateMarkdown(data))
    }
)}


// Function call to initialize app
init();
