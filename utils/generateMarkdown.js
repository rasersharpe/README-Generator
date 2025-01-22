// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else if (license === "MIT") {
    return `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === "GNU") {
    return `![License](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "CC") {
    return `![License](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`;
  }

  // {
  //   return `![License](https://img.shields.io/badge/License-${license}-blue)`;
  // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return "- [License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let currentYear = new Date().getFullYear();

  if (license === "None") {
    return "";
  } else if (license === "MIT") {
    return `## License
Copyright ${currentYear}.
Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom
the Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (license === "Apache") {
    return `## License
Copyright ${currentYear}.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
  } else if (license === "GNU") {
    return `## License
Copyright ${currentYear}.
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
  } else if (license === "CC") {
    return `## License
No Copyright
The person who associated a work with this deed has dedicated the work to the
public domain by waiving all of his or her rights to the work worldwide under 
copyright law, including all related and neighboring rights, to the extent all

You can copy, modify, distribute and perform the work, even for commercial
purposes, all without asking permission. See Other Information below.`;
  }

  //   else {
  //     //create a statement for each license on the list.
  //     return `## License
  // This project is licensed with ${license}`;
  //   }
}

// TODO: Create a function to generate markdown for README
// prettier-ignore
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.projectLicense)}
## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Collaborators](#collaborators)
- [Questions](#questions)
${renderLicenseLink(data.projectLicense)}

## Description

${data.projectDescription}

## Installation

${data.projectInstallation}

## Usage

${data.projectUsage}

## Collaborators

${data.projectCollab}

## Questions

If you have any questions, you can contact me on my [GitHub](https://github.com/${data.github}) profile.
Or you can [Email](mailto:${data.email}) me directly.

${renderLicenseSection(data.projectLicense)}
`;
}

export default generateMarkdown;
