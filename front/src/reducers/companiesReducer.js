let initialState = {
	companiesList: []
}

export default function Companies(state = initialState, action) {

  switch (action.type) {
	
	case 'LOAD_COMPANIES':
		return Object.assign({}, state, {
			companiesList: action.companiesList
		});

	default:
		return state
  }
}