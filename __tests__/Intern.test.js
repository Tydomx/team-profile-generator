// LINKING THIS FILE TO THE INTERN FILE IN DIST FOLDER
const intern = require('');

test('SET INTERN OBJECT WITH INTERN SCHOOL', () => {
	const internSchool = 'UT Austin';
	const intern = new Intern('Michael', 123, 'michael@gmail.com', internSchool);

	expect(intern.name).toEqual(expect.any(String));
	expect(intern.id).toEqual(expect.any(Number));
	expect(intern.email).toEqual(expect.any(String));
	expect(intern.internSchool()).toBe(internSchool);
});


test('Get intern school USING getSchool()', () => {
	const internSchool = 'UT Austin';
	const intern = new Intern('Michael', 123, 'michael@gmail.com', internSchool);

	expect(intern.internSchool()).toBe(internSchool);
});

test('Get intern with getRole()', () => {
	const role = 'Intern';
	const intern = new Intern('Michael', 123, 'michael@gmail.com', 'UT Austin');

	expect(intern.getRole()).toBe(role);
});