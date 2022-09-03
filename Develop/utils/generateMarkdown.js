// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache license 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)`      
    case 'ISC':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`     
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`     
    case 'GNU GPL v3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`  
    default:
      return `No license chosen`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {  
  switch (license) {
    case 'Apache license 2.0':
      return `(https://www.apache.org/licenses/LICENSE-2.0)`      
    case 'ISC':
      return `(https://opensource.org/licenses/ISC)`     
    case 'MIT':
      return `(https://choosealicense.com/licenses/mit/)`     
    case 'GNU GPL v3':
      return `(https://www.gnu.org/licenses/gpl-3.0.en.html)`  
    default:
      return `No license chosen`
  }
  
}

// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  return `# Project's Title
  ${data.title}

  ## Add a License
  ${renderLicenseBadge(data.license)}<br>

  ${renderLicenseSection(data.license)}  
 
  ## 📝 Project's Description
  ${data.description}

  ## Table of Contents (Optional)
   * [Installation](#installation)
   * [Technologies used](#technology)
   * [Usage](#usage)
   * [Include Credits](#contribution)
   * [Test](#test)
   * [Questions](#questions)
   * [Add a License](#license)
   * [Screenshot](#screenshot)
   
  ## Technologies used
  ${data.technology}

  ## Installation
   ${data.installation}

 ## Test
 ${data.test}

  ## Usage
   ${data.usage}

  ## Include Credits
   ${data.contribution}

   ## Screenshot
   ${data.screenshot}

   ## Questions
   GitHub profile (https://github.com/${data.github})<br>

   📧 email me @ (https://mail.google.com/mail/${data.email})
   `
;
}

module.exports = generateMarkdown;
