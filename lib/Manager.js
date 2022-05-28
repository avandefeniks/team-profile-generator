const Employee = require('./Employee');

class Manager extends Employee {
constructor(officeNumber) {
    super();
    this.role = 'Manager';
    this.officeNumber = officeNumber;
}

getRole(role) {
    return role;
}

};



module.exports = Manager;