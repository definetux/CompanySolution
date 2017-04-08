import { combineReducers } from 'redux'
import companies from './companiesReducer'
// import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  companies,
  // visibilityFilter
})

export default todoApp
