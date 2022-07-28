// INTERN CLASS THAT USES EMPLOYEE MODEL as WELL
// IMPORTING THE EMPLOYEE
const Employee = require('./Employee');

class Intern extends Employee {
	constructor(name, id, email, internSchool) {
		// super constructor that receives name, id, and email from Employee so i don't have to type it again 2x
		super(name, id, email);

		// the two new pieces of info that matter
		this.internSchool = internSchool;
		this.role = 'Intern';
	}

	internSchool() {
		return this.internSchool;
	}

	getRole() {
		return this.role;
	}
}

module.exports = Intern;