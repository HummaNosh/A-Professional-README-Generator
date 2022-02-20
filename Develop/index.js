// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Create an array of questions for user input

// below are qs the user will need to enter which will later get pasted onto HTML
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the title of your application",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a detailed description of your application",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter any installation instructions for your application",
    },
    {
      type: "input",
      name: "usage",
      message: "What usage information is required?",
    },
    {
      type: "input",
      name: "license",
      message: "Enter necessary license information",
    },
    {
      type: "input",
      name: "contributions",
      message: "How have contributions been made to this application?",
    },
    {
      type: "input",
      name: "tests",
      message:
        "Enter information about any tests running currently in the application",
    },
  ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  questions().then((answers) => {
    const HTMLstuff = GenHTML(answers);

    fs.writeFile("index.html", HTMLstuff, (err) =>
      err ? console.log(err) : console.log("yahoo")
    );
  });
};

// Function call to initialize app
init();

// CREATE GEN HTML- LINK QS TO IT
