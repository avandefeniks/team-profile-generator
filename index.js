const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('./src/generateHtml');
// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
var employeesArr = [];

// manager promps
const mgrQuestions = mgrQuestionsData => {
    
//    let managerArr = [];

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Managers's name: (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the Managers's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Manager's ID: (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log("Please enter the Managers's ID!");
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Manager's email address: (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please enter the Managers's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the Manager's office number: (Required)",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                }
                else {
                    console.log("Please enter the Manager's office number!");
                    return false;
                }
            }
        }
    ]) 
    .then((mgrQuestionsData) => {
        const manager = new Manager('officeNumber');
        manager.name = mgrQuestionsData.name;
        manager.id = mgrQuestionsData.id;
        manager.email = mgrQuestionsData.email
        manager.officeNumber = mgrQuestionsData.officeNumber;
        employeesArr.push(manager);
        empQuestions();
    });
};

const empQuestions = empQuestionsData => {

    inquirer.prompt([
        
        {
            type: 'list',
            name: 'emptype',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern'] 
            
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employee's name: (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the emplyee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID: (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log("Please enter the employees's ID!");
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address: (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please enter the employee's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's GitHub username: (Required)",
            when: ({emptype}) => emptype === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log("Please enter the engineer's GitHub username!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school: (Required)",
            when: ({emptype}) => emptype === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                }
                else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another employee?',
            default: false
        }

    ])
    .then((empQuestionsData) => {
        if (empQuestionsData.emptype === 'Engineer') {
            let engineer = new Engineer('github');
            engineer.name = empQuestionsData.name;
            engineer.id = empQuestionsData.id;
            engineer.email = empQuestionsData.email;
            engineer.github = empQuestionsData.github;
            employeesArr.push(engineer);
            

        }
        else if (empQuestionsData.emptype === 'Intern') {
            let intern = new Intern('school');
            intern.name = empQuestionsData.name;
            intern.id = empQuestionsData.id;
            intern.email = empQuestionsData.email;
            intern.school = empQuestionsData.school;
            employeesArr.push(intern);
            
        }
        if (empQuestionsData.confirmAdd) {
            empQuestions(employeesArr);
        }
        else {
            fs.writeFile('./dist/index.html', generateHtml(employeesArr), err => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log('Team profile created successfully');
                }
            })
        }
        
    })
    // .then((employeesArr) => {
    //     return generateHtml(employeesArr)
    // })
    // .then((htmlFile) => {
    //     fs.writeFile('./dist/index.html', htmlFile, err => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         else {
    //             console.log('Team profile created successfully');
    //         }
    //     })
    // });

}

mgrQuestions()
// empQuestions()