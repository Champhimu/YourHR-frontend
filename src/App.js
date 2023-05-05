import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Grid } from '@mui/material'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'

const App = () => {
  return (
    <BrowserRouter>
    <Grid container direction={"column"}>
        {/* <Grid item xs> */}
        <Header />
        {/* </Grid> */}
        <Grid sx={{display: "flex", paddingTop: "64px", alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/registration' element={<Registration />} />
        </Routes>
        </Grid>
    </Grid>
    </BrowserRouter>
  )
}

export default App
