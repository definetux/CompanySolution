
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as companiesActions from '../actions/companiesActions';


import './Company.css';

class Company extends Component {

	constructor(props) {
		super(props);
	}

	removeCompany(id) {
		this.props.removeCompany(id);
	}

	selectCompany(id) {
		this.props.loadUsers(id);
	}

	renderCompany(company) {
		return <div className='company' style={this.props.isSelected ? {'background-color': 'cornflowerblue'} : {}}>
			<button onClick={this.removeCompany.bind(this, company.id)} >
				Delete
			</button >
			<a className='name' href='#' onClick={this.selectCompany.bind(this, company.id)}>
				{company.name}
			</a>
			<div className='time'>
				{company.foundingDate}
			</div>
		</div>
	}

	render() {

		return (
			<div >
				{
					this.renderCompany(this.props.company)
				}
			</div>
		);
	}
}

Company.propTypes = {
	company: PropTypes.object.isRequired,
	isSelected: PropTypes.bool.isRequired,
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