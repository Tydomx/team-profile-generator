// employee object with name, id, and email
class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.role = 'Employee';
	};

	// grabbing all of the columns inside the object, these are all describing the object
	getName() {
		return this.name;
	}

	getId() {
		return this.id;
	}

	getEmail() {
		return this.email;
	}

	getRole() {
		return this.role;
	}
};

// exporting out of the file and into index.js and same with the objects (engineer, intern, and manager)
module.exports = Employee;