import {Button} from  'react-bootstrap'
import {useContext} from 'react';
import {UserContext} from '../context/app.context'

function EventAdd(props){

	const {name} = useContext(UserContext)

	// Props will look like
	/*
		props = {
			btnSubmit: Function
		}
	*/


	const {btnSubmit} = props
	return (
		<form onSubmit={btnSubmit}>
			<p>Event Information {name} </p>
			<input  name="name"  type="text"  placeholder="Enter name"/>
			<input  name="description"  type="text"  placeholder="Enter desc"/>

			<Button  type="submit">Submit</Button>
		</form>
	)
}

export default EventAdd