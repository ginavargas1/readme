//fs library package
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What would you like your title to be?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Add any installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Add usage information.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Add contribution guidelines.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Add test instructions.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Would you like to add a license?',
        choices: ['None', 'Apache', 'MIT', 'BSD']
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where do you live?'
    },
    {
        type: 'input',
        name: 'linkd',
        message: 'What is your LinkedIn username?'
    },
    {
        type: 'input',
        name: 'githubname',
        message: 'What is your GitHub username?'
    },

];

   function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
            if (err) {
            return console.log(err)
            } else {
        console.log("Congrats! README is generated.")
        }
    })
   }

    function init() {
        inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })
    }

    // function call to initialize app
    init();
