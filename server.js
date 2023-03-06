// requiring all of my npm packages
const express = require('express');
const { default: inquirer } = require('inquirer');
const mysql = require('mysql2');

// port host location
const PORT = process.env.PORT || 3001;

// creating the app for request
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// creating connection to the database
const db = mysql.createConnection(
  {
    host: 'localhost', 
    user: 'root',
    password: 'hiper264',
    database: 'employee_db'
  },
  console.log(`Connected to database`)
);

// setting up the inquirer prompts for gathering the employee info
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

// Once the user has provided an response, the corresponding function will return
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
// the variables below log out when each one of the relevant data is being shown
const allDept = () => {
  console.log("Showing All Departments");
};

const allRoles = () => {
  console.log("Showing All Roles");
};

const allEmpl = () => {
  console.log("Showing All Employees");
};

// the user can add a role using the inquirer questions below
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

// enables the ability to add a role to an employee
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
    // statement that logs out the employee role and their salary based on the answer
    .then((answer) => {
      console.log(
        `Adding role ${answer.title} with salary ${answer.salary}...`
      );
    });
};

// allows the user to update their employees information based on their full name, role and manager id
const updateEmpl = () => {
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

