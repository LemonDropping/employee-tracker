const express = require('express');
const fs = require("fs");
const { default: inquirer } = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
  {
    host: 'localhost', 
    user: 'root',
    password: 'hiper264',
    database: 'employee_db'
  },
  console.log(`Connected to database`)
);

const employeeStat = () => {
  inquirer
    .prompt ([
      {
        name: "Employee Menu",
        type: "list",
        message: "Employee Status",
        choices: [
          "Departments",
          "Roles",
          "Employees",
          "Add Department",
          "Add Roles",
          "Update Roles"
        ],
      },
    ])
.then ((answer) => {
  switch (answer.employeeStat) {
    case "Departments":
      allDept();
      break;

    case "Roles":
      allRoles();
      break;
    
    case "Employees":
      allEmpl();
      break;
    
    case "Add Department":
      addDept();
      break;
    
    case "Add Role":
      addRole();
      break;
    
    case "Update Role":
      updateEmpl();
      break;
    };
})};

const allDept = () => {
  console.log("Showing All Departments");
};

const allRoles = () => {
  console.log("Showing All Roles");
};

const allEmpl = () => {
  console.log("Showing All Employees");
};

const addDept = () => {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Which department would you like to add for this employee?",
      },
    ])
    .then((answer) => {
      console.log(`Adding department ${answer.name}...`);
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "Which role would you like to add for this employee?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary for this employees role?",
      },
    ])
    .then((answer) => {
      console.log(
        `Adding role ${answer.title} with salary ${answer.salary}...`
      );
    });
};

const addEmp = () => {
  inquirer
    .prompt([
      {
        name: "first",
        type: "input",
        message: "Type the employee's first name",
      },
      {
        name: "last",
        type: "input",
        message: "Type the employee's last name",
      },
      {
        name: "role",
        type: "input",
        message: "Type the employee's role",
      },
      {
        name: "manager",
        type: "input",
        message: "Type the employee's manager?",
      },
    ])
    .then((answer) => {
      console.log(
        `Adding employee ${answer.first} ${answer.last} with role ${answer.role} and manager ${answer.manager}...`
      );
    });
};

employeeStat();

