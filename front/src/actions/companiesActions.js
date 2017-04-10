


export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOAD_USERS = 'LOAD_USERS';
export const SELECT_COMPANY = 'SELECT_COMPANY';


import { companyService } from '../service/companyService'


export function loadCompanies() {
	return (dispatch, getStore) => {
		let store = getStore();
		companyService.getCompanies((companiesList) => {
			dispatch({
				type: LOAD_COMPANIES,
				companiesList
			})
		})
	}
}

export function addCompany(name) {
	return (dispatch, getStore) => {
		let store = getStore();
		companyService.addCompany(name, () => {
			dispatch(loadCompanies());
		})
	}
}

export function removeCompany(id) {
	return (dispatch, getStore) => {
		let store = getStore();
		companyService.removeCompany(id, () => {
			dispatch(loadCompanies());
		})
	}
}

export function loadUsers(companyId) {
	return (dispatch, getStore) => {
		let store = getStore();
		dispatch({
			type: SELECT_COMPANY,
			companyId
		});
		companyService.getUsers(companyId, (users) => {
			dispatch({
				type: LOAD_USERS,
				usersList: users
			});
		})
		// store.companies.companiesList.find(item => item.id === companyId);
		// dispatch({
		// 	type: LOAD_USERS,
		// 	usersList: company.staff
		// });

		// companyService.addCompany(name, () => {
		// 	dispatch(loadCompanies());
		// })
	}
}

export function addUser(companyId, user) {
	return (dispatch, getStore) => {
		companyService.addUser(companyId, user, () => {
			dispatch(loadUsers(companyId));
		})
	}
}
