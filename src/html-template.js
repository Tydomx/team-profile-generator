// Generate HTML texts for HTML output file
module.exports = {
	generateHtml(groupTeamArray) {
		// array to hold HTML text strings
		const htmlFileArr = [];
		const htmlHeaderTitle = `
	<!DOCTYPE html>
	<html lang ="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, intial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>${groupTeamArray[0]}</title>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Poppins:wght@500&family=Work+Sans&display=swap" rel="stylesheet"> 
		<link rel="stylesheet" href="../dist/style.css">
	</head>
		
	<body>
			<div class="title-header">
				<h1 class="bi-headset">${groupTeamArray[0]}</h1>
			</div>
			
			<div class="card-container">
			`;

		htmlFileArr.push(htmlHeaderTitle);

		// loop thru groupTeamArray to display profile for each team member card
		for (let i = 1; i < groupTeamArray.length; i++) {
			let teamMemberHtml = `
				<div class="card-team-member">
					<div class="card-team-member-top">
						<h2>${groupTeamArray[i].name}</h2>
						`;

			// team member's roles and icons
			if (groupTeamArray[i].role === "Manager") {
				teamMemberHtml += `<h2 class="bi-telephone-forward"> ${groupTeamArray[i].role}</h2>`;
			}
			else if (groupTeamArray[i].role === "Engineer") {
				teamMemberHtml += `<h2 class="bi-laptop-fill"> ${groupTeamArray[i].role}</h2>`;
			}
			else if (groupTeamArray[i].role === "Intern") {
				teamMemberHtml += `<h2 class="bi-journal-bookmark-fill"> ${groupTeamArray[i].role}</h2>`;
			};

			teamMemberHtml += `
					</div>
					
					<div class="card-team-member-bottom">
						<p>Employee ID: ${groupTeamArray[i].id}</p>
						<p>Email: <a href="mailto:${groupTeamArray[i].email}">${groupTeamArray[i].email}</a></p>
						`;

			// if manager disply office number
			if (groupTeamArray[i].officeNumber) {
				teamMemberHtml += `<p>Office Number: ${groupTeamArray[i].officeNumber}</p>`;
			}
			// if engineer display github
			else if (groupTeamArray[i].getUserGitHub) {
				teamMemberHtml += `<p>GitHub: <a href="https://github.com/${groupTeamArray[i].getUserGitHub}">${groupTeamArray[i].getUserGitHub}</a></p>`;
			}
			else if (groupTeamArray[i].internSchool) {
				teamMemberHtml += `<p>School: ${groupTeamArray[i].internSchool}</p>`;
			}

			teamMemberHtml += `
				</div>
			</div>
			`;

			htmlFileArr.push(teamMemberHtml);
		};

		const htmlFooter = `
		</div>
	</body>
	</html>
	`;

		htmlFileArr.push(htmlFooter);

		return htmlFileArr;
	}
};