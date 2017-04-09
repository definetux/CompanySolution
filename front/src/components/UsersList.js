import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as companiesActions from '../actions/companiesActions';


import Company from './Company';
import User from './User';

//import * as UsersListActions from './UsersListActions';

// import './UsersList.module.scss';

class UsersList extends Component {

	constructor(props) {
		super(props);
		this.props.loadCompanies();
		this.state = { showForm: false }
	}

	changeValue(type, e) {
		let value = e.target.value;
		this.setState({
			[type]: value
		})
	}

	showCompanyies() {
		this.props.loadCompanies();
	}

	addUser() {
		let user = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			age: this.state.age,
			position: this.state.position
		}
		this.props.addUser(this.props.selectedCompany, user);
		this.setState({
			showForm: false
		});
	}

	toggleForm() {
		this.setState({
			showForm: !this.state.showForm
		})
	}

	renderUsers(users) {
		return users.map(item => {
			return <User key={item.id} user={item} />
			//return <Company company={item} key={item.id} />
		})
	}

	render() {

		return (
			<div className='container'>
				{
					<button onClick={this.toggleForm.bind(this)}>
						{this.state.showForm ? 'Hide form' : 'Show form'}
					</button>
				}
				{
					this.state.showForm ?
						<div>
							<div>
								<span> First Name </span>
								<input type="text" onChange={this.changeValue.bind(this, 'firstName')} />
							</div>
							<div>
								<span> Last Name </span>
								<input type="text" onChange={this.changeValue.bind(this, 'lastName')} />
							</div>
							<div>
								<span> Age </span>
								<input type="number" onChange={this.changeValue.bind(this, 'age')} />
							</div>
							<div>
								<span> Position </span>
								<input type="number" onChange={this.changeValue.bind(this, 'position')} />
							</div>
							<button onClick={this.addUser.bind(this)} >
								Add user
						</button>
						</div>
						: null
				}
				<div className='UsersList'  >
					{
						this.renderUsers(this.props.usersList)
					}
				</div>
				{/*<button onClick={this.updateUsers.bind(this)} >
					Update users
				</button>*/}
			</div>
		);
	}
}

UsersList.propTypes = {

}


function mapStateToProps(state) {
	return {
		usersList: state.companies.usersList,
		selectedCompany: state.companies.selectedCompany
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Object.assign({}, companiesActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)