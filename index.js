// TODO: Include packages needed for this application
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([
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
  },
  {
    type: "input",
    message:
      "This lets other developers know what they can and cannot do with your project.",
    name: "projectLicense",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
