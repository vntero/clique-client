import {Button} from  'react-bootstrap'
import {useContext} from 'react';
import {UserContext} from '../context/app.context'
import EventDetail from './EventDetail';
import TextField from '@mui/material/TextField';

function EventAdd(props){

    const {events} = props

	// Props will look like
	/*
		props = {
			btnSubmit: Function
		}
	*/


	const {btnSubmit} = props
	return (
		
		<form onSubmit={btnSubmit}>
			<p>Event Information</p>
			<input  name="organiser"  type="text"  placeholder="You"/>
            <input  name="title"  type="text"  placeholder="Title"/>
			<input  name="location"  type="text"  placeholder="Location"/>
            <input  name="description"  type="text"  placeholder="Description"/>

			<Button  type="submit">Submit</Button>
		</form>
	)
}

export default EventAdd