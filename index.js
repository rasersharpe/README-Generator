// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your full name?",
        name: "fullName",
      },
      {
        type: "input",
        message: "What is your project's title?",
        name: "projectTitle",
      },
      {
        type: "input",
        message:
          "Provide a short description explaining the what, why, and how of your project.",
        name: "projectDescription",
      },
      {
        type: "input",
        message:
          "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "projectInstallation",
      },
      {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "projectUsage",
      },
      {
        type: "input",
        message:
          "List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.",
        name: "projectCollab",
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "list",
        message:
          "Enter your License. This lets other developers know what they can and cannot do with your project.",
        name: "projectLicense",
        choices: ["MIT", "Apache", "GNU", "CC", "None"],
      },
    ])
    .then((answers) => {
      writeToFile("README.md", answers);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  console.log("Welcome to the README Generator!\nLet's begin.");
  promptUser();
}

// Function call to initialize app
init();
