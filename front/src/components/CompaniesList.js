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

//import * as CompaniesListActions from './CompaniesListActions';

// import './CompaniesList.module.scss';

class CompaniesList extends Component {

	constructor(props) {
		super(props);
	}

	showCompanyies() {
		this.props.loadCompanies();
	}

	render() {

		return (
			<div className='CompaniesList'  >
				<button onClick={this.showCompanyies.bind(this)} >
					loadCompanies
					</button>

			</div>
		);
	}
}

CompaniesList.propTypes = {

}


function mapStateToProps(state) {
	return {
		CompaniesList: state.CompaniesList
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Object.assign({}, companiesActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList)