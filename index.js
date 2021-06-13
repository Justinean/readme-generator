const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
function writeToFile(filename, data) {
    fs.writeFileSync(filename, data);
}

function init() {
    inquirer.prompt([
        {
            name: 'title',
            message: 'What is the name of your project? ',
            type: 'input',
            validate: (value) =>{if (value){return true} else {return 'I need a value to continue'}}
        },
        {
            name: 'description',
            message: 'How would you describe your project? ',
            type: 'input',
            validate: (value) =>{if (value){return true} else {return 'I need a value to continue'}}
        },
        {
            name: 'install',
            message: 'How would one install your project? (List items seperated by a comma)',
            type: 'input',
            validate: (value) =>{if (value){return true} else {return 'I need a value to continue'}}
        },
        {
            name: 'usage',
            message: 'How would one use your project? ',
            type: 'input',
            validate: (value) =>{if (value){return true} else {return 'I need a value to continue'}}
        },
        {
            name: "contribution",
            message: "Enter contribution guidelines for your project:",
            type: "input",
            validate: (value) =>{if (value){return true} else {return 'I need a value to continue'}}
        },
        {
            name: "testing",
            message: "Enter test information for your project:",
            type: "input",
            validate: (value) =>{if (value){return true} else {return 'I need a value to continue'}}
        },
        {
            name: "github",
            message: "Enter your GitHub Username:",
            type: "input",
            validate: (value) =>{if (value){return true} else {return 'I need a value to continue'}}
        },
        {
            name: "email",
            message: "Enter your email address:",
            type: "input",
            validate: (value) =>{if (value){return true} else {return 'I need a value to continue'}}
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "N/A"
            ]
        },
        
    ])
    .then((answers) => {
        let data = generateMarkdown(answers)
        writeToFile("./product/README.md", data)
    })
}

init();