// ENGINEER CLASS THAT USES EMPLOYEE MODEL as WELL
// IMPORTING THE EMPLOYEE
const Employee = require('./Employee');

class Engineer extends Employee {
	constructor(name, id, email, getUserGitHub) {
		// super constructor that receives name, id, and email from Employee so i don't have to type it again
		super(name, id, email);

		// the two new pieces of info that matter
		this.getUserGitHub = getUserGitHub;
		this.role = 'Engineer';
	}

	getUserGitHub() {
		return this.getUserGitHub;
	}

	getRole() {
		return this.role;
	}
};

module.exports = Engineer;