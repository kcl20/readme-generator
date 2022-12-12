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
        var readmeContent = `
    # ${response.title}

    ## Description
    ${response.description}

    ## Installation
    ${response.installation}

    ## Usage
    ${response.usage}

    ## License
    ${response.license}

    ## Contributing
    ${response.contributing}

    ## Tests
    ${response.tests}

    ## Questions
    Visit my Github profile at https://github.com/${response.github} 
    or
    Contact me at ${response.email}.
    `;
    console.log(response.title);

        fs.writeFile(response.title+" README.md", readmeContent, (err) =>
        err ? console.error(err) : console.log('Success!')
        );
})
}

// Function call to initialize app
init();
