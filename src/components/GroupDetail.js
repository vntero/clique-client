import {useState, useEffect} from 'react'
import {useParams, Link, Navigate} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../config'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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

    return (
        <Box sx={{ width: '100%'}} padding='30px'>
            <Typography variant="h2" component="div" gutterBottom>
                <i>{groupDetail.name}</i>
            </Typography>
            <Typography variant="h6" gutterBottom>
                {groupDetail.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Members: 54
            </Typography>
        </Box>
    )
}

export default GroupDetail
