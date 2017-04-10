
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as companiesActions from '../actions/companiesActions';


import './Company.css';

class Company extends Component {

	constructor(props) {
		super(props);
	}

	selectCompany(id) {
		this.props.loadUsers(id);
	}

	renderUser(user) {
		return <div className='user'>
			<div className='name'>
				{user.firstName}
			</div>
			<div className='name'>
				{user.lastName}
			</div>
			<div className='name'>
				{user.age}
			</div>
			<div className='name'>
				{user.position}
			</div>
		</div>
	}

	render() {

		return (
			<div >
				{
					this.renderUser(this.props.user)
				}
			</div>
		);
	}
}

Company.propTypes = {
	user: PropTypes.object.isRequired
}


function mapStateToProps(state) {
	return {
		//Company: state.companies.Company
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Object.assign({}, companiesActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Company)