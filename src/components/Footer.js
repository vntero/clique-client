import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';



export default function FixedBottomNavigation() {


  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation showLabels >
            <BottomNavigationAction label="Ironhack - M3 Project" />
            <BottomNavigationAction label="developed by vntero"  /> 
            <BottomNavigationAction label="Terms of Service" />
            <BottomNavigationAction label="Privacy Policy" />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
