const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const generateHTML = require('./src/generateHTML');


const inputQuestions = () => {

    return inquirer.prompt([
    {
        type: 'input',
        name: 'employeeName1',
        message: 'What is employee 1 name?'
    },
    {
        type: 'input',
        name: 'employeeRole1',
        message: 'What is employee 1 role?'
    },
    {
        type: 'input',
        name: 'employeeID1',
        message: 'What is employee 1 ID?'
    },
    {
        type: 'input',
        name: 'employeeName2',
        message: 'What is employee 2 name?'
    },
    {
        type: 'input',
        name: 'employeeRole2',
        message: 'What is employee 2 role?'
    },
    {
        type: 'input',
        name: 'employeeID2',
        message: 'What is employee 2 ID?'
    }
    ]) 
};

const generateHTML = ({ employeeName1, employeeRole1, employeeID1, employeeName2, employeeRole2, employeeID2 }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>

    <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Employee: ${employeeName1}</li>
    <li class="list-group-item">Role: ${employeeRole1}</li>
    <li class="list-group-item">ID: ${employeeID1} </li>
  </ul>
</div>

<br>

<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Employee: ${employeeName2}</li>
    <li class="list-group-item">Role: ${employeeRole2}</li>
    <li class="list-group-item">ID: ${employeeID2} </li>
  </ul>
</div>

</body>
</html>`;


const init = () => {

inputQuestions()
.then((answers) => fs.writeFileSync('example.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to example.html'))
    .catch((err) => console.error(err));
};

init();