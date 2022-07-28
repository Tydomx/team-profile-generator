const Employee = require('../lib/Employee');

test('Create an employee object', () => {
	const employee = new Employee('Michael', 123, 'michael@gmail.com');

	expect(employee.name).toEqual(expect.any(String));
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toEqual(expect.any(String));
});

test('Check to see if can get name with getName()', () => {
	const name = 'Michael';
	const employee = new Employee(name, 123, 'michael@gmail.com');

	expect(employee.getName()).toBe(name);
});

test('Check to see if can get ID with getId()', () => {
	const id = 123;
	const employee = new Employee('Michael', id, 'michael@gmail.com');

	expect(employee.getId()).toBe(id);
});

test('Chekc to see if can get email with getEmail()', () => {
	const email = 'michael@gmail.com';
	const employee = new Employee('Michael', 123, email);

	expect(employee.getEmail()).toBe(email);
});

test('Use getRole() to return "Employee" as the role.', () => {
	const role = 'Employee';
	const employee = new Employee('Michael', 123, 'mcihael@gmail.com', role);

	expect(employee.getRole()).toBe(role);
});