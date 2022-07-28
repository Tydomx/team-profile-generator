// importing dependencies
const fs = require('fs');
const inquirer = require('inquirer');

// employee profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// linking HTML template file
const htmlTemplate = require('./src/html-template');

// holds all the team members into this array
const groupTeamArray = [];

// ***************************************************** //
// ***************************************************** //

// function that outputs HTML file
function writeFile(htmlFileArr) {
	return new Promise((resolve, reject) => {
		fs.writeFile(`./dist/${groupTeamArray[0]}.html`, htmlFileArr.join(''), function (err) {
			// if error, reject promise and send err to .catch() method
			if (err) {
				reject(err);
				return;
			};

			resolve({
				ok: true,
				messeage: 'File created, the HTML file is located in the "dist" folder.'
			})
		})
	})
};

// generate HTML file
function generateHtmlFile() {
	const htmlFileArr = htmlTemplate.generateHtml(groupTeamArray);
	writeFile(htmlFileArr);
};

// adding the manager inquirer prompts
function addManagerPrompts() {
	inquirer.prompt([
		{
			type: 'input',
			name: 'managerName',
			message: 'What is your manager\'s name?',
			validate: managerNameInput => {
				if (managerNameInput) {
					return true;
				} else {
					console.log('Please enter your manager\'s name!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'managerId',
			message: 'What is your manager\'s ID number?',
			validate: managerIdInput => {
				if (managerIdInput) {
					return true;
				} else {
					console.log('Pleaes enter the manager\'s ID nubmer');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'managerEmail',
			message: 'What is the manager\'s Email Address?',
			validate: managerEmailInput => {
				if (managerEmailInput) {
					return true;
				} else {
					console.log("Pleaes enter your manager's email address");
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'managerOfficeNumber',
			message: "What is the manager's office number?",
			validate: managerOfficeNumberInput => {
				if (managerOfficeNumberInput) {
					return true;
				} else {
					console.log("Please entr the manager's office number");
					return false;
				}
			}
		}
	])
		.then(function (managerData) {
			const managerName = managerData.managerName;
			const managerId = managerData.managerId;
			const managerEmail = managerData.managerEmail;
			const managerNumber = managerData.managerOfficeNumber;
			const teamMember = new Manager(managerName, managerId, managerEmail, managerNumber);

			groupTeamArray.push(teamMember);
			console.log(groupTeamArray);
			addTeamMemberEmployee();
		})
};

// creating the option list after manager is selected between engineer, intern and no more members
function addTeamMemberEmployee() {
	inquirer.prompt([
		{
			type: 'list',
			name: 'teamMemberOptions',
			message: 'What would you like to do next?',
			choices: [
				'Add an Engineer',
				'Add an Intern',
				'Finish generating profiles'
			],
			// making sure that all of the options can be selected
			validate: teamMemberOptionsInput => {
				if (teamMemberOptionsInput === 'Add an Engineer' || teamMemberOptionsInput === 'Add an Intern') {
					return true;
				}
				else if (teamMemberOptionsInput === 'Finish generating profiles') {
					return true;
				}
				else {
					console.log('Please choose one of the options');
					return false;
				}
			}
		}
	])
		// this function has the information from the previouis prompts in manager
		.then(function (teamOptionData) {
			// switch case so taht when user selects on these options they can get sent to the appropriate function
			// Creation of Engineer, Intern, or Finish the profiles and make the HTML file
			switch (teamOptionData.teamMemberOptions) {
				case 'Add an Engineer':
					addEngineerPrompts();
					break;
				case 'Add an Intern':
					addInternPrompts();
					break;
				case 'Finish generating profiles':
					console.log('Creating the HTML file...');
					generateHtmlFile();
					break;
			}
		});
};

// ENGINEER PROFILE FUNCTION
function addEngineerPrompts() {
	inquirer.prompt([
		{
			type: 'input',
			name: 'engineerName',
			message: 'What is the engineer\'s name?',
			validate: engineerNameInput => {
				if (engineerNameInput) {
					return true;
				} else {
					console.log('Please enter a name for the engineer');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'engineerId',
			message: 'What is the engineer\'s ID nubmer?',
			validate: engineerIdInput => {
				if (engineerIdInput) {
					return true;
				} else {
					console.log('Pleaes enter an ID number for the engineer');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'engineerEmail',
			message: 'What is the engineer\'s email addres?',
			valdiate: engineerEmailInput => {
				if (engineerEmailInput) {
					return true;
				} else {
					console.log('Pleaes enter an email address');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'engineerGitHub',
			message: 'What is the engineer\'s gitHub username?',
			validate: engineerGitHubUsernameInput => {
				if (engineerGitHubUsernameInput) {
					return true;
				} else {
					console.log('Pleaes enter a gitHub username');
					return false;
				}
			}
		}
	])
		// grabbing engineerData from before and then compiling into the teamMember const, so they it can be added to the array
		.then(function (engineerData) {
			const engineerName = engineerData.engineerName;
			const engineerId = engineerData.engineerId;
			const engineerEmail = engineerData.engineerEmail;
			const engineerGitHubUsername = engineerData.engineerGitHub;
			const teamMember = new Engineer(engineerName, engineerId, engineerEmail, engineerGitHubUsername);

			groupTeamArray.push(teamMember);

			// calls this so that if user needs to add another intern/engineer they can do so through the list they get
			addTeamMemberEmployee();
		})
};

// function for INTERN SECTION 
function addInternPrompts() {
	inquirer.prompt([
		{
			type: 'input',
			name: 'internName',
			message: 'What is the intern\'s name?',
			validate: internNameInput => {
				if (internNameInput) {
					return true;
				} else {
					console.log('Pleae enter a name for the intern');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'internId',
			message: "what is the intern's ID number?",
			validate: internIdNumberInput => {
				if (internIdNumberInput) {
					return true;
				} else {
					console.log('Please enter an ID number');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'internEmail',
			message: "What is the intenr's email address?",
			validate: internEmailAddressInput => {
				if (internEmailAddressInput) {
					return true;
				} else {
					console.log('Plese enter an email address');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'internSchool',
			message: "What is the intern's school?",
			validate: internSchoolInput => {
				if (internSchoolInput) {
					return true;
				} else {
					console.log('PLease etner a school naem');
					return false;
				}
			}
		}
	])
		// grabbing intern data from before and then compiling into the teamMember const, so then it can be added to the array
		.then(function (internData) {
			const internName = internData.internName;
			const internId = internData.internId;
			const internEmail = internData.internEmail;
			const internSchool = internData.internSchool;
			const teamMember = new Intern(internName, internId, internEmail, internSchool);

			groupTeamArray.push(teamMember);

			// calls this so that if user needs to add another intern/engineer they can do so through the list they get
			addTeamMemberEmployee();
		})
};

// function taht initializes the app and asks for a team name
function init() {
	inquirer.prompt([
		{
			message: 'Welcome to the team profile generator. Add your team name',
			name: 'teamName',
			validate: teamNameInput => {
				if (teamNameInput) {
					return true;
				} else {
					console.log("Pleaes add a team name");
					return false;
				}
			}
		}
	])
		.then(function (teamNameData) {
			const teamName = teamNameData.teamName;
			groupTeamArray.push(teamName);
			addManagerPrompts();
		})
};

// calling the function taht initializes the app
init();