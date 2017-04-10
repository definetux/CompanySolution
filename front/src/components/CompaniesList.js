/*
* Copyright © 2016-2017 by IntegrIT S.A. dba Hackolade.  All rights reserved.
*
* The copyright to the computer software herein is the property of IntegrIT S.A.
* The software may be used and/or copied only with the written permission of 
* IntegrIT S.A. or in accordance with the terms and conditions stipulated in 
* the agreement/contract under which the software has been supplied. 
*/
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as companiesActions from '../actions/companiesActions';


import Company from './Company';

//import * as CompaniesListActions from './CompaniesListActions';

// import './CompaniesList.module.scss';

class CompaniesList extends Component {

	constructor(props) {
		super(props);
		this.props.loadCompanies();
	}

	changeName(e) {
		let value = e.target.value;
		this.setState({
			name: value
		})
	}

	showCompanies() {
		this.props.loadCompanies();
	}

	addCompany() {
		if (!this.state.name)
			return;
		this.props.addCompany(this.state.name);
		this.setState({
			name: ''
		});
	}
	isSelected(id) {
		return this.props.selectedCompany === id;
	}

	renderCompanies(companies) {
		return companies.map(item => {
			return <Company company={item} key={item.id} isSelected={this.isSelected(item.id)} />
		})
	}

	render() {

		return (
			<div className='container'>
				<div>
					<input type="text" onChange={this.changeName.bind(this)} />
					<button onClick={this.addCompany.bind(this)} >
						Create company
					</button>
				</div>
				<div className='CompaniesList'  >
					{
						this.renderCompanies(this.props.companiesList)
					}
				</div>
				<button onClick={this.showCompanies.bind(this)} >
					Update companies
				</button>
			</div>
		);
	}
}

CompaniesList.propTypes = {

}


function mapStateToProps(state) {
	return {
		companiesList: state.companies.companiesList,
		selectedCompany: state.companies.selectedCompany
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Object.assign({}, companiesActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList)