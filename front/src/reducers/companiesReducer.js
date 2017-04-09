

import { LOAD_COMPANIES, LOAD_USERS, SELECT_COMPANY } from '../actions/companiesActions'


let initialState = {
	companiesList: [],
	usersList: [],
	selectedCompany: ''
}

export default function Companies(state = initialState, action) {

  switch (action.type) {
	
	case LOAD_COMPANIES:
		return Object.assign({}, state, {
			companiesList: action.companiesList
		});

	case LOAD_USERS:
		return Object.assign({}, state, {
			usersList: action.usersList
		});

	case SELECT_COMPANY:
		return Object.assign({}, state, {
			selectedCompany: action.companyId
		});

	default:
		return state
  }
}