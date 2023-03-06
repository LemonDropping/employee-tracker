INSERT INTO department (department_name)
VALUES ("Finance")
INSERT INTO department (department_name)
VALUE ("Tech")
INSERT INTO department (department_name)
VALUE ("Legal")
INSERT INTO department (department_name)
VALUE ("HR")

INSERT INTO roles (title, salary, department_id)
VALUES ("Financial Advisor", 150000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("Web Developer", 100000, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ("Business Lawyer", 190000, 3);
INSERT INTO roles (title, salary, department_id)
VALUES ("Talent Management", 90000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Cole", "Roberts", 2, 2)
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Deer", 1, 3)
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Chris", "Smith", 3, 1)
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Andrew", "Guy", 4, 4)
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Tony", "Soprano", 3, 3)