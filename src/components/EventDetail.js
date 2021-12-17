import {useState, useEffect} from 'react'
import {useParams, Link, Navigate} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../config'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import {Grid} from '@material-ui/core/'
import Box from '@mui/material/Box';
import GroupsIcon from '@mui/icons-material/Groups';


function EventDetail(props) {
    // We get this 'todoId' from the <Route path="/todo/:todoId "> we defined in App.js
    const {eventId} = useParams()

    const [eventDetail, setEventDetail] = useState(null)

    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single todo  
           let response = await axios.get(`${API_URL}/events/${eventId}`,{withCredentials: true})
           setEventDetail(response.data)
        }
        getData()
    }, [])

    // Ensuring only logged in users see the page
    if (!props.user) {
        return <Navigate to="/signin" />
    }

    if(!eventDetail) {
        return <Spinner animation="grow" variant="dark" />
    }

    const {btnDelete} = props

    return (
    <Box sx={{ width: '100%'}} padding='50px'>
        <Grid container display='flex' justifyContent="space-around" alignItems="flex-end"> 
            <Card padding="50px" sx={{ maxWidth: 345 }}>
                <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {eventDetail.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <PersonIcon/> {eventDetail.organiser}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <LocationOnIcon/>  {eventDetail.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <GroupsIcon/>  {eventDetail.members}  Participants
                </Typography>

                <Typography variant="body2" component="div">
                    {eventDetail.description}
                </Typography>
                </CardContent>
                <CardActions>
                <Link style={{textDecoration: 'none'}} to={`/event/${eventDetail._id}/edit`} ><Button size="small">Edit</Button></Link>
                <Button variant="text" onClick={() => { btnDelete(eventDetail._id)  }  } size="small">Delete</Button>
                <Button variant="text" size="small">Participate</Button>
                <Button variant="text" size="small">Withdraw</Button>
                </CardActions>
            </Card>
        </Grid>
    </Box>
    )
}

export default EventDetail
