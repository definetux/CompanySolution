const address = 'http://localhost:50189/api/';
const addressCompany = address + 'company/';


export var companyService = {


	getCompanies(cb) {
		fetch(addressCompany).then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				//renderError();
			}
		}).then((companies) => {
			cb(companies);
		});

	},

	addCompany(Name, cb) {
		fetch(addressCompany, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				Name
			})
		}).then((response) => {
			if (response.ok) {
				//return response.json();
				cb();
			} else {
				//renderError();
			}
		});

	},

	addUser(id, user, cb) {
		fetch(addressCompany + id + '/user', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		}).then((response) => {
			if (response.ok) {
				//return response.json();
				cb();
			} else {
				//renderError();
			}
		});

	},

	removeCompany(id, cb) {
		fetch(addressCompany + id, {
			method: 'DELETE'
		}).then((response) => {
			if (response.ok) {
				//return response.json();
				cb();
			} else {
				//renderError();
			}
		});

	}




}