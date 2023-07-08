// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none"){
    return `![Github license ](https://img.shields.io/badge/license-${license}-redreen.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none"){
    return `\n* [license](#license)\n`;
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `## license
    licensed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Table of contents
  . [Description](#description)
  . [Installation](#installation)
  . [Usage](#usage)
  . [Contributors](#contributors)
  . [Contact-me](#contact-me)
  . [Testing](#testing)
  . [Questions](#questions)
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Contact-me
  . Name - ${data.name}
  . Email - ${data.email}
  . Github - $[${data.creator}](https://github.com/${data.creator}/)
  ## Testing
  
  ${data.test}
  
## Questions

  ${data.questions}

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
