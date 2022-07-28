// LINKING THIS FILE TO THE MANAGER FILE IN DIST FOLDER
// const manager = require('../lib/Manager');

test('SET MANAGER OBJECT WITH AN OFFICE NUMBER', () => {
	const officeNumber = 111;
	const manager = new manager('Michael', 123, 'michael@gmail.com', officeNumber);

	expect(manager.name).toEqual(expect.any(String));
	expect(manager.id).toEqual(expect.any(Number));
	expect(manager.email).toEqual(expect.any(String));
	expect(manager.officeNumber()).toBe(officeNumber);
});


test('Get manager\'s office number using officeNumber()', () => {
	const officeNumber = 111;
	const manager = new Manager('Michael', 123, 'michael@gmail.com', officeNumber);

	expect(manager.officeNumber()).toBe(officeNumber);
});

test('Get manager with getRole()', () => {
	const role = 'Manager';
	const manager = new Manager('Michael', 123, 'michael@gmail.com', 111);

	expect(manager.getRole()).toBe(role);
});