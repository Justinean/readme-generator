// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let hasLicense = false;
function renderLicenseBadge(license) {
  if (license === "N/A") {
    return ``;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GNU") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "N/A") {
    return ``;
  } else if (license === "Apache") {
    return `http://www.apache.org/licenses/LICENSE-2.0`
  } else if (license === "GNU") {
    return `https://www.gnu.org/licenses/licenses.en.html`
  } else if (license === "ISC") {
    return `https://opensource.org/licenses/ISC`
  } else if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`
  } else if (license === "Mozilla") {
    return `https://www.mozilla.org/en-US/MPL/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "N/A") {
    return `This project is not licensed.`;
  } else {
    return `This project is licensed under the ${license} license, which you can read about [here](${renderLicenseLink(license)}).`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let install = data.install.split(", ")
  for (i in install) {
    install[i] = `${Number(i) + 1}. ${install[i]}\n`
  }
  console.log(install)
  console.log(data)
  return `# ${data.title}

${renderLicenseBadge(data.license)}

# Description:

${data.description}

# Table of Contents:

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact me](#contact-me)

# Installation:

${install.join("")}
# Usage:

${data.usage}

# Contribution:

${data.contribution}

# Tests:

${data.testing}

# License:

${renderLicenseSection(data.license)}

# Contact me:

Contact me using my [GitHub](https://github.com/${data.github}) or my email: ${data.email}
`;
  

}

module.exports = generateMarkdown;
