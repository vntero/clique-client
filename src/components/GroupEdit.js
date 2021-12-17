import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../config'

function GroupEdit(props) {
    const {groupId} = useParams()

    const [groupDetail, setGroupDetail] = useState(null)

    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single todo  
           let response = await axios.get(`${API_URL}/groups/${groupId}`, {withCredentials: true})
           setGroupDetail(response.data)
        }
        getData()
    }, [])

    if(!groupDetail) {
        return <Spinner animation="grow" variant="dark" />
    }

    const {btnEdit} = props
    return (
        <div>
            <h3>Edit Component</h3>

            <form onSubmit={(event) => { btnEdit(event, groupDetail._id)  }} >
            
            {/* event is passed automatically when 'btnEdit' is invoked by the browser */}
            {/* <form onSubmit={btnEdit} > */}

                <input defaultValue={groupDetail.name} name="name"  type="text"  placeholder="Enter name"/>
                <input defaultValue={groupDetail.description} name="description"  type="text"  placeholder="Enter desc"/>
                <button  type="submit">Edit</button>
		    </form>
        </div>
    )
}

export default GroupEdit
