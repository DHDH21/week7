const inquirer = require("inquirer");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");



cosnt questions = [
    {
        type:"input",
        name:"github",
        message:"What is your Github username?",
    },
    {
        type:"input",
        name:"email",
        message:"What is your email address?",
    },
    {
        type:"input",
        name:"title",
        message:"What is your project's name?",
    },
    {
        type:"input",
        name:"description",
        message:"Please write a short description of your project?",
    },
    {
        type:"list",
        name:"license",
        message:"What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type:"input",
        name:"dependencies",
        message:"What command should be run to install dependencies?",
        default:"npm i"
    },
    {
        type:"input",
        name:"test",
        message:"What command should be run to run tests?",
        default:"npm test"
    },
    {
        type:"input",
        name:"usage",
        message:"What does the user need to know about using the repo?",
    },
    {
        type:"input",
        name:"contributors",
        message:"What does the user need to know contributing to the repo?",
    }

];