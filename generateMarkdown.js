const licensebadge = [
  "APACHE 2.O",
  "BSD 3",
  "GNU-GPL 3.0",
  "MIT",
  "None"]
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licensebadge[0]) {
    return "[![License]("https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0")""
  
  } else if (license === licensebadge[1]){
    return [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)


  } else if (license === licensebadge[2]){
    return [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


  } else if (license === licensebadge[3]) {
    ""
return [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



  } else {
    return " "
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Username} ${data.GitHubProfileLink}


  ## Repository Name
  ${data.RepositoryName}
  ## Description 
  ${data.Description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.RequiredDependencies}
  ## Usage 
  ${data.usage}
  ## License 
  This project is license under ${data.License}
  ## Contributing 
  ${data.Contribute}
  ## Tests
  ${data.Testing}
  ## Questions
  If you have any questions about this project or any other repository on my GitHub, please contact me directly at ${data.email}.
`;
}


// use for importing Markdown in index 
module.exports = generateMarkdown;
