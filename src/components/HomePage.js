import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from '@material-ui/core/'
import { Link } from 'react-router-dom'


function HomePage() {
    return (
<>
    <Box sx={{ width: '100%'}} padding='30px'>
        <Typography variant="h2" component="div" gutterBottom>
            <i>clique</i>
        </Typography>
        <Typography variant="h6" gutterBottom>
            \'klik also 'klëk\: a narrow exclusive circle or group of persons. One held together by common interests, views, or purposes.
        </Typography>
    </Box>

    <Grid container display='flex' spacing={2} direction="row" justifyContent="space-around">    
        <Grid item xs={12} sm={6} md={3}>
            <Card  sx={{ minWidth: 275 }}>
                <CardContent>
                
                <Typography variant="h5" component="div">
                {<img width='80' height='80' src="event-join.png"/>}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Never miss another beat. Join groups of your interest in your area and stay in the know with what's going on. 
                </Typography>
                
                </CardContent>
                <CardActions>
                    <Link style={{textDecoration: 'none', color: 'black'}} to="/groups"><Button size="small">Join a group</Button></Link>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Card  sx={{ minWidth: 275 }}>
                <CardContent>
                <Typography variant="h5" component="div">
                {<img width='80' height='80' src="event-find.png"/>}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Find and attend events created by others. Join other teams or single players, challenge yourself.
                </Typography>
                </CardContent>
                <CardActions>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/events"><Button size="small">Find events</Button></Link>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Card  sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {<img width='80' height='80' src="event-create.png"/>}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Create events yourself. Find players to complete your teams then and there. Set attendance limits and much more.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link style={{textDecoration: 'none', color: 'black'}} to="/create-event"><Button size="small">Create an event</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
</>
    )
}

export default HomePage
