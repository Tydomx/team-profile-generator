// MANAGER CLASS THAT USES EMPLOYEE MODEL as WELL
// IMPORTING THE EMPLOYEE
const Employee = require('./Employee');

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		// super constructor that receives name, id, and email from Employee so i don't have to type it again 3x
		super(name, id, email);

		// the two new pieces of info that matter
		this.officeNumber = officeNumber;
		this.role = 'Manager';
	}

	officeNumber() {
		return this.officeNumber;
	}

	getRole() {
		return this.role;
	}
}

module.exports = Manager;