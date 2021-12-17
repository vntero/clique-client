import React from 'react'
import {Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from '@material-ui/core/'
import Box from '@mui/material/Box';


function Profile(props) {

    const {user} = props
    
    if(!user) {
        return <Spinner animation="grow" variant="dark" />
    }

    return (
    <Box sx={{ width: '100%'}} padding='50px'>
    <Grid container display='flex' justifyContent="space-around" alignItems="flex-end">    
        <Grid>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                style={{heigth: "10px"}}
                component="img"
                height="140"
                image="cristiano.jpeg"
                alt="Pai Grande"
                />
                <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {user.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Here you'll see the information about how many groups you belong to. And how many events you're commited to.
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small">Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
    </Box>
    );
  }


export default Profile

