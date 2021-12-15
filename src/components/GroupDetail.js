import {useState, useEffect} from 'react'
import {useParams, Link, Navigate} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../config'

function GroupDetail(props) {
    // We get this 'todoId' from the <Route path="/todo/:todoId "> we defined in App.js
    const {groupId} = useParams()

    const [groupDetail, setGroupDetail] = useState(null)

    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single todo  
           let response = await axios.get(`${API_URL}/groups/${groupId}`,{withCredentials: true})
           setGroupDetail(response.data)
        }
        getData()
    }, [])

    // Ensuring only logged in users see the page
    if (!props.user) {
        return <Navigate to="/signin" />
    }

    if(!groupDetail) {
        return <Spinner animation="grow" variant="dark" />
    }

    const {btnDelete} = props

    return (
        <div>
            <h2>Group Detail Component</h2>
            <h4>Name: {groupDetail.name}</h4>
            <h4>Desc: {groupDetail.description}</h4>
            <img src={groupDetail.image}/>
            <button>
                <Link to={`/groups/${groupDetail._id}/edit`} >Edit</Link>
            </button>
            <button onClick={() => { btnDelete(groupDetail._id)  }  } >Delete</button>
        </div>
    )
}

export default GroupDetail
