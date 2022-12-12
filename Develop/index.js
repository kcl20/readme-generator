// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    { 
        type: 'input',
        message: "What is the name of your app?",
        name: 'title',
    },
    {
        type: 'input',
        message: "What is the description of your app?",
        name: 'description',
    },
    {
        type: 'input',
        message: "How does one install your app?",
        name: 'installation',
    },
    {
        type: 'input',
        message: "How does one use your app?",
        name: 'usage',
    },
    {
        type: 'input',
        message: "How does one contribute to your app?",
        name: 'contributing',
    },
    {
        type: 'input',
        message: "How does one report issues with your app?",
        name: 'issues',
    },
    {
        type: 'input',
        message: "How does one test your app?",
        name: 'tests',
    },
    {
        type: 'list',
        message: "What is the license for your app?",
        name: 'license',
        choices: [
            'Academic Free License v3.0', 
            'Apache license 2.0',
            'Artistic license 2.0',
            'Boost Software License 1.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "Simplified" license',
            'BSD 3-clause Clear license',
            'Creative Commons license family',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0',
            'Creative Commons Attribution Share Alike 4.0',
            'Do What The F*ck You Want To Public License',
            'Educational Community License v1.0',
            'Eclipse Public License 1.0',
            'Eclipse Public License 2.0',
            'European Union Public License 1.1',
            'GNU Affero General Public License v3.0',
            'GNU General Public License family',
            'GNU General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License family',
            'GNU Lesser General Public License v3.0',
            'GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v2.0',
            'ISC',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            'MIT',
            'Mozilla Public License 2.0',
            'Open Software License 3.0',
            'PostgreSQL License',
            'Python Software Foundation License',
            'Python Software Foundation License v2.0',
            'SIL Open Font License 1.1',
            'University of Illinois/NCSA Open Source License',
            'The Unlicense',
            'zLib License',
        ],
    },
    {
        type: 'input',
        message: "What is your Github username?",
        name: 'github',
    },
    {
        type: 'input',
        message: "What is your email?",
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
    var licenseBadge = "";
    switch(response.license) {
        case 'Academic Free License v3.0':
            licenseBadge = "[![License: AFL 3.0](https://img.shields.io/badge/License-AFL%203.0-blue.svg)](https://opensource.org/licenses/AFL-3.0)";
            break;
        case 'Apache license 2.0':
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case 'Artistic license 2.0':
            licenseBadge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-blue.svg)](https://opensource.org/licenses/Artistic-2.0)";
            break;
        case 'Boost Software License 1.0':
            licenseBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
            break;
        case 'BSD 2-clause "Simplified" license':
            licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
            break;
        case 'BSD 3-clause "Simplified" license':
            licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
        case 'BSD 3-clause Clear license':
            licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause_Clear-orange.svg)](https://opensource.org/licenses/BSD-3-Clause-Clear)";
            break;
        case 'Creative Commons license family':
            licenseBadge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
            break;
        case 'Creative Commons Zero v1.0 Universal':
            licenseBadge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
            break;
        case 'Creative Commons Attribution 4.0':
            licenseBadge = "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)";
            break;
        case 'Creative Commons Attribution Share Alike 4.0':
            licenseBadge = "[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)";
            break;
        case 'Do What The F*ck You Want To Public License':
            licenseBadge = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
            break;
        case 'Educational Community License v1.0':
            licenseBadge = "[![License: ECL 2.0](https://img.shields.io/badge/License-ECL%202.0-red.svg)](https://opensource.org/licenses/ECL-2.0)";
            break;
        case 'Eclipse Public License 1.0':
            licenseBadge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
            break;
        case 'Eclipse Public License 2.0':
            licenseBadge = "[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)";
            break;
        case 'European Union Public License 1.1':
            licenseBadge = "[![License: EUPL 1.1](https://img.shields.io/badge/License-EUPL%201.1-blue.svg)](https://opensource.org/licenses/EUPL-1.1)";
            break;
        case 'GNU Affero General Public License v3.0':
            licenseBadge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
            break;
        case 'GNU General Public License family':
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        case 'GNU General Public License v2.0':
            licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
            break;
        case 'GNU General Public License v3.0':
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL_v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        case 'GNU Lesser General Public License family':
            licenseBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
            break;
        case 'GNU Lesser General Public License v2.1':
            licenseBadge = "[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)";
            break;
        case 'GNU Lesser General Public License v2.0':
            licenseBadge = "[![License: LGPL v2.0](https://img.shields.io/badge/License-LGPL_v2.0-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.0.en.html)";
            break;
        case 'GNU Lesser General Public License v3.0':
            licenseBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
            break;
        case 'ISC':
            licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
            break;
        case 'LaTeX Project Public License v1.3c':
            licenseBadge = "[![License: LPPL v1.3c](https://img.shields.io/badge/License-LPPL_v1.3c-blue.svg)](https://www.latex-project.org/lppl/lppl-1-3c.txt)";
            break;
        case 'Microsoft Public License':
            licenseBadge = "[![License: MS-PL](https://img.shields.io/badge/License-MS--PL-blue.svg)](https://opensource.org/licenses/MS-PL)";
            break;
        case 'MIT':
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case 'Mozilla Public License 2.0':
            licenseBadge = "[![License: Mozilla 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            break;
        case 'Open Software License 3.0':
            licenseBadge = "[![License: OSL 3.0](https://img.shields.io/badge/License-OSL%203.0-blue.svg)](https://opensource.org/licenses/OSL-3.0)";
            break;
        case 'PostgreSQL License':
            licenseBadge = "[![License](https://img.shields.io/badge/License-PostgreSQL-blue.svg)](https://opensource.org/licenses/postgresql)";
            break;
        case 'Python Software Foundation License 2.0':
            licenseBadge = "[![License](https://img.shields.io/badge/License-Python%202.0-blue.svg)](https://opensource.org/licenses/Python-2.0)";
            break;
        case 'Python Software Foundation License':
            licenseBadge = "[![License](https://img.shields.io/badge/License-Python%202.0-blue.svg)](https://opensource.org/licenses/Python-2.0)";
            break;
        case 'SIL Open Font License 1.1':
            licenseBadge = "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
            break;
        case 'The Unlicense':
            licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
            break;
        case 'zLib License':
            licenseBadge = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
            break;
        default:
            licenseBadge = "";
            break;
    }









    var readmeContent = `
        # ${response.title}

        ## Description
        ${response.description}

        ## Installation
        ${response.installation}

        ## Usage
        ${response.usage}

        ## License
        ${licenseBadge}
        ${response.license}

        ## Contributing
        ${response.contributing}

        ## Tests
        ${response.tests}

        ## Questions
        Visit my Github profile at [https://github.com/${response.github}](https://github.com/${response.github} 'My Github Profile') 
        or
        Contact me at ${response.email}.
        `;

    // console.log(response.title);

    fs.writeFile(response.title+" README.md", readmeContent, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
})
}

// Function call to initialize app
init();
