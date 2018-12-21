import React, { Component } from 'react'
import Select from 'react-select'
import config from '../../config/config'

class UserRole extends Component {
	state = {
		selectedOption: null
	}

	handleChange = (selectedOption) => {
		this.setState({ selectedOption });
		console.log('Option selected:', selectedOption)
	}

	render() {
		const { selectedOption } = this.state

		return (
			<div className="user-role">		
				<Select 
					options={config.userRoles.map((user) => (
						{ value: user.id, label: `${user.userName} (${user.userRole})` }
					))}
					value={selectedOption}
					onChange={this.handleChange}
				/>
			</div>
		)
	}
}

export default UserRole