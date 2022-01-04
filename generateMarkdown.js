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
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

  } else if (license === licensebadge[1]) {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"


  } else if (license === licensebadge[2]) {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

  } else if (license === licensebadge[3]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licensebadge[0]) {
    return "(https://opensource.org/licenses/Apache-2.0)"

  } else if (license === licensebadge[1]) {
    return "(https://opensource.org/licenses/BSD-3-Clause)"


  } else if (license === licensebadge[2]) {
    return "(https://www.gnu.org/licenses/gpl-3.0)"

  } else if (license === licensebadge[3]) {
    return "(https://opensource.org/licenses/MIT)"
  } else {
    return ""
  }
  }

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === licensebadge[0]) {
      return `For more information about ${licensebadge[0]}, read here:`
  
    } else if (license === licensebadge[1]) {
      return `For more information about ${licensebadge[1]}, read here:`
  
  
    } else if (license === licensebadge[2]) {
      return `For more information about ${licensebadge[2]}, read here:`
  
    } else if (license === licensebadge[3]) {
      return `For more information about ${licensebadge[3]}, read here:`
    } else {
      return ""
    }
     
    }

    // TODO: Create a function to generate markdown for README
    function generateMarkdown(data) {
      return `# 
      ##Profile 
      ${data.Username} 
      ${data.GitHubProfileLink}


  ## Repository Name
  ${data.RepositoryName}
  ## Description 
  ${data.Description}
  ## Table of Contents
  * [Installation](#installation)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  Clone the repo. If any additiona; installation requirements are needed, it'd be here: ${data.RequiredDependencies}

  ## License 
  This project is license under ${data.License}
  
  ## Contributing 
  ${data.Contribute}
  
  ## Tests
  Use the application. Additional testing methods would be here: ${data.Testing}
  
  ## Questions
  Questions? Please contact me directly at ${data.Email}.


  `;
  }
// use for importing Markdown in index 
module.exports = generateMarkdown;
