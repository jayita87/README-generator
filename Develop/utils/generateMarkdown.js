// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# license`
}

// TODO: Create a function to generate markdown for README

function generateMarkdown1(data) {
  return "abc";
}
function generateMarkdown(data) {
  return 
  `# Project's Title
  ${data.title}

  ## ⚖️ Add a License
  ${renderLicenseSection(data.license)}  
 
  ## 📝 Project's Description
  ${data.description}

  ## Table of Contents (Optional)
   * [Installation](#installation)
   * [Usage](#usage)
   * [Contribution](#contribution)
   * [Test](#test)
   * [Questions](#questions)
   * [License](#license)
  
  ## Installation
   ${data.installation}
## Test
${data.test}
  ## 🚀 Usage
   ${data.usage}
  ## 🤝 Include Credits
   ${data.contribution}
   ## ✨ Questions :
   GitHub profile (https://github.com/${data.github})
   📧 email @ ${data.email}
   `

;
}

module.exports = generateMarkdown;
