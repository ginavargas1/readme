// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseLink;
  switch(license) {
    case "MIT":
      licenseLink = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
      return licenseLink
    case "APACHE 2.0":
      licenseLink = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
      return licenseLink
      case "GPL 3.0":
      licenseLink = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
      return licenseLink
      case "BSD 3":
      licenseLink = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
      return licenseLink
    default:
      licenseLink = "None"
      return licenseLink
    }}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return "license"
  } 
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contribution](#contribution)
  6. [Tests](#tests)
  8. [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  This application has the following License: ${data.license}

  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}

  ## Questions
  ${data.name}

  ${data.location}
  
  ${data.linkd}
  
  ## GitHub
  https://github.com/${data.githubname}
  `;
}

module.exports = generateMarkdown;
