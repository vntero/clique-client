import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../config'

function EventEdit(props) {
    const {eventId} = useParams()

    const [eventDetail, setEventDetail] = useState(null)

    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single todo  
           let response = await axios.get(`${API_URL}/events/${eventId}`, {withCredentials: true})
           setEventDetail(response.data)
        }
        getData()
    }, [])

    if(!eventDetail) {
        return <Spinner animation="grow" variant="dark" />
    }

    const {btnEdit} = props
    return (
        <div>
            <h3>Edit event</h3>

            <form onSubmit={(event) => { btnEdit(event, eventDetail._id)  }} >
            
            {/* event is passed automatically when 'btnEdit' is invoked by the browser */}
            {/* <form onSubmit={btnEdit} > */}

                <input defaultValue={eventDetail.title} name="title"  type="text"  placeholder="Enter a title"/>
                <input defaultValue={eventDetail.description} name="description"  type="text"  placeholder="Enter description"/>
                <button  type="submit"> Update </button>
		    </form>
        </div>
    )
}

export default EventEdit
