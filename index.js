//fs library package
const fs = require('fs');
const inquirer = require('inquirer');

const README = (response) => 
`# ${response.title}
## Table of Contents
*[Description](#description)
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contribution](#contribution)
*[Tests](#tests)
*[Questions](#questions)
## Description
${response.description}
## Installation
${response.install}
## Usage
${response.usage}
## License
This application has the following License: ${response.license}
## Contributing 
${response.contributing}
## Tests
${response.test}
`;

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: "What would you like your title to be?"
    },
    {
        type: 'input',
        name: 'decription',
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
        type: 'input',
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

])
.then ((response) => {
   
    console.log(response)

      fs.writeFile('README.md', (err) => 
       err ? console.log(err) : console.log('ReadMe Generator Worked!')  
      );   
});
