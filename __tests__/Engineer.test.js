// LINKING THIS FILE TO THE ENGINEER MODELFILE
const Engineer = require('');

test("SET ENGINEER's OBJECT WITH GITHUB USERNAME", () => {
	const getUserGitHub = 'tydom';
	const engineer = new Engineer('Michael', 123, 'michael@gmail.com', getUserGitHub);

	expect(engineer.name).toEqual(expect.any(String));
	expect(engineer.id).toEqual(expect.any(Number));
	expect(engineer.email).toEqual(expect.any(String));
	expect(engineer.getUserGitHub()).toBe(getGitHub);
});

test('GET Github account using getGitHub()', () => {
	const getUserGitHub = 'tydomx';
	const engineer = new Engineer('Michael', 123, 'michael@gmail.com', getUserGitHub);

	expect(engineer.getUserGitHub()).toBe(getGitHub);
});

test('Use getRole() to get the Engineer role', () => {
	const role = 'Engineer';
	const engineer = new Engineer('Michael', 123, 'michael@gmail.com', getUserGitHub);

	expect(engineer.getRole()).toBe(role);
});