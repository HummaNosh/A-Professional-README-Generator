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
      type: "list",
      name: "license",
      message: "Which of the following licenses if required?",
      choices: ["Apache 2.0", "MIT", "Mozilla", "GNU GPL v3", "Eclipse 1.0"],
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
    {
      type: "input",
      name: "email",
      message: "Enter your developers Email address",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your Github user name",
    },
  ]);
};

// write read me file and log any errors if so..

const init = () => {
  questions().then((answers) => {
    const ReadmeStuff = GenREADME(answers);

    fs.writeFile("README.md", ReadmeStuff, (err) =>
      err ? console.log(err) : console.log("Woohoo! Read Me Generated!")
    );
  });
};

init();

// Generate readme below...

// Generating separate links to the table of contents using a tag..

const GenREADME = ({
  Badge,
  title,
  description,
  installation,
  usage,
  license,
  contributions,
  tests,
  email,
  github,
}) =>
  `${Badge}
# Title 
${title}
# Description Of Application 
${description}

# Table of contents


* [Installation] (#installation)

#####[Usage] 
(#usage)

#####[[license] 
(#license)

#####[[Contributions]
(#contributions)

#####[[tests] 
(#tests)

### Installation Information
<a name ="installation"> </a>
${installation}

### Usage Information
<a name ="usage"> </a>
${usage}

### License Information
<a name ="license"> </a>
${license}

### Contributions
<a name ="contributions"> </a>
${contributions}

### Tests Information
<a name ="tests"> </a>
${tests}

# Questions

Any questions for me? Send me a direct email on ${email}.
You can also visit my Github profile here www.github.com/${github}
`;

// Pulling licenses badge pictures

function getLicenseBadge() {
  switch (answers.license) {
    case ["Apache 2.0"]:
      Badge = "(https://opensource.org/licenses/Apache-2.0)";
    case "MIT":
      Badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Mozilla":
      Badge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "GNU GPL v3":
      Badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Eclipse 1.0":
      Badge =
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  }
}

// HWY R MY BADGES IMAGES NOT APPEARING??
// are my links working?
