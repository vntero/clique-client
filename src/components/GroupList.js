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

function GroupList(props) {

    const {groups} = props

    if(!groups.length) {
        return <Spinner animation="grow" variant="dark" />
    }

    return (
    <Box sx={{ width: '100%'}} padding='50px'>
        <Typography variant="h6" gutterBottom>
            Groups in your area. Select one of them to see what is happening around you:
        </Typography>
        <Grid container display='flex' spacing={2} direction="row" justifyContent="space-around">
            {
                groups.map((elem) => {
                    return (
                                
                                <Grid item xs={12} sm={6} md={3}>
                                    <Card  sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                {<img width='80' height='80' src={elem.image}/>}
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                {elem.description} 
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link style={{textDecoration: 'none', color: 'black'}} to={`/group/${elem._id}`}><Button size="small">{elem.name}</Button></Link>
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

export default GroupList
