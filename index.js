// importing dependencies
const fs = require('fs');
const inquirer = require('inquirer');

// employee profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// holds all the team members into this array
const groupTeamArray = [];

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

			addTeamMemberEmployee();
		})
};

// creating the options after manager is selected between engineer, intern and no more members
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
		.then(function (teamOptionData) {
			switch (teamOptionData.teamMemberOptionsInput) {
				case 'Add an Engineer':
					addEngineerPrompts();
					break;
				case 'Add an Intern':
					addInternPrompts();
					break;
				case 'Finish generating profiles':
					generateHtmlFile();
					break;
			}
		})
};

// function taht initializes the app
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