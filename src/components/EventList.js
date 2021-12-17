import {Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from '@material-ui/core/'

function EventList(props) {

    const {events} = props
    const {user} = props

    if(!events.length) {
        return <Spinner animation="grow" variant="dark" />
    }

    return (
    <Box sx={{ width: '100%'}} padding='50px'>
        <Link style={{textDecoration: 'none', color: 'black'}} to={`/create-event`}><Button size="small">Create a new event</Button></Link>
        <Typography variant="h6" gutterBottom>
            Upcoming events:
        </Typography>
        <Grid container display='flex' spacing={2} direction="row" justifyContent="space-around">
            {
                events.map((elem, idx) => {
                    return (
                                
                                <Grid item xs={12} sm={6} md={3} key={idx}>
                                    <Card  sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                {elem.description} 
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link style={{textDecoration: 'none', color: 'black'}} to={`/event/${elem._id}`}><Button size="small">{elem.title}</Button></Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                    )
                })
            }
        </Grid>
    </Box>
    )
}

export default EventList
