//fs library package
const fs = require('fs');
const inquirer = require('inquirer');

const readMe = generateReadMe ();

inquirer.prompt([
    {
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        message: "What is your email address?",
        name: "email address"
    },
    {
        message: "What is the name of the project?",
        name: "title"
    },
    {
        message: "Please write a short description of your project",
        name: "description"
    },
    {
        message: "What kind of license should your project have?",
        name: "MIT"
    },
    {
        message: "What command should be to install dependencies?",
        name: "npm 1"
    },
    {
        message: "What command should be run to run tests?",
        name: "npm test"
    },
    {
        message: "What does the user need to know about using the repo?",
        name: "node index.js"
    },
    {
        message: "What does the user need to know about contributing to the repo?",
        name: "answer"
    },
])
.then ((response) => {
    const readMeContent = generateReadMe(response);

      fs.writeFile('README.md', (err) => 
       err ? console.log(err) : console.log('ReadMe Generator Worked!')  
      );   
});
