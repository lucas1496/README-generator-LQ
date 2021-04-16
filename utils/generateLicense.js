// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  switch (answers) {
    case 'None':
        return "";
        break;
    case 'MIT':
        return 'https://img.shields.io/badge/License-MIT-yellow.svg';
        break;
    case 'ISC':
        return 'https://img.shields.io/badge/License-ISC-blue.svg';
        break;
    case 'EPL':
        return 'https://img.shields.io/badge/License-EPL%201.0-red.svg';
        break;
    case 'Apache 2.0':
        return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
        break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  switch (answers) {
    case 'None':
        return "";
        break;
    case 'MIT':
        return 'https://opensource.org/licenses/MIT';
        break;
    case 'ISC':
        return 'https://opensource.org/licenses/ISC';
        break;
    case 'EPL':
        return 'https://img.shields.io/badge/License-EPL%201.0-red.svg';
        break;
    case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
        break;
  }
}

// TODO: Create a function that returns the license section of README
function generateLicense(answers) {
    let licenseBadge = renderLicenseBadge(answers);
    let licenseLink = renderLicenseLink(answers);
    return `(${licenseBadge})](${licenseLink})`;
}

module.exports = generateLicense;
