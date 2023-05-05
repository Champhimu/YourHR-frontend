import React from 'react'
import {Grid, Typography} from '@mui/material';

const Home = () => {
  return (
    <>
    <Grid
    container
    item
    direction= 'column'
    alignItems= 'center'
    justifyContent= 'center'
    sx={{padding: "30px", minHeight: "80vh"}}
    >
        <Grid item>
            <Typography variant='h2' color='white'>Welcome to YourHR Portal</Typography>
        </Grid>
    </Grid>
    </>
  )
}

export default Home
