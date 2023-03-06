const express = require('express');
const fs = require("fs");
const { default: inquirer } = require('inquirer');
const inquirer = require(inquirer)
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
        name: "menu",
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


