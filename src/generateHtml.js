// manger card
const addManager = function (manager) {
return `
    <div class="col-12 col-md-6 col-lg-3 col-xl-3">
        <div class="card">
            <div class="shadow">
                <div class="bg-dark text-white text-start">
                <h4>${manager.name}</h4>
                <h3>Manager</h3>
                </div>
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office Number ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`
}

// engineer card
const addEngineer = function (engineer) {
return `
    <div class="col-12 col-md-6 col-lg-3 col-xl-3">
        <div class="card">
            <div class="shadow">
                <div class="bg-dark text-white text-start">
                <h4>${engineer.name}</h4>
                <h3>Engineer</h3>
                </div>
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
    </div>`
}

// intern card
const addIntern = function (intern) {
return `
    <div class="col-12 col-md-6 col-lg-3 col-xl-3">
        <div class="card">
            <div class="shadow">
                <div class="bg-dark text-white text-start">
                <h4>${intern.name}</h4>
                <h3>Manager</h3>
                </div>
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item">Office Number ${intern.school}</li>
                </ul>
            </div>
        </div>
    </div>`
}

const generateHtml = data => {
    // array for html elements
    teamArr = [];

    // loop through array passed from index.js
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // check for manager object
        if (role === 'Manager') {
            const managerFile = addManager(employee);
            teamArr.push(managerFile);
        }

        // check for engineer object
        if (role === 'Engineer') {
            const engineerFile = addEngineer(employee);
            teamArr.push(engineerFile);
        }

        // check for intern object
        if (role === 'Intern') {
            const internFile = addIntern(employee);
            teamArr.push(internFile);
        }
    }
    const cardsArr = teamArr.join('');

    const generateProfile = generatePage(cardsArr);
    return generateProfile;
}


const generatePage = function (cardsArr) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <!-- main section -->
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    ${cardsArr}
                </div>
            </div>
        </main>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" type="text/javascript"></script>
    </body>
    
    </html>`
}

module.exports = generateHtml;