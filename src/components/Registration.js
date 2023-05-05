import React, {useState} from 'react'
import { Paper, Grid, Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Chip, Button, Input } from '@mui/material'
import { Label, Visibility, VisibilityOff } from "@mui/icons-material";


const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleDelete = () => {
    console.log("clicked");
  }

    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState(false);
  
    const handleFileSelection = (event) => {
      const file = event.target.files[0];
      if (file && file.type === "application/pdf" && file.size <= 2000000) {
        setSelectedFile(file);
        setError(false);
      } else {
        setSelectedFile(null);
        setError(true);
      }
    };

  return (
    <Paper elevation={3} sx={{padding: '60px'}}>
        <Grid container direction='column' spacing={4} textAlign={'center'}>
            <Grid item>
                <Typography variant='h3' component='h2'>
                    Registration
                </Typography>
            </Grid>
            <Grid item>
                <TextField
                label='Name'
                variant='outlined'
                sx={{width: '400px'}}
                required={true}
                />
            </Grid>
            <Grid item>
                <TextField 
                label='Email'
                variant='outlined'
                sx={{width: '400px'}}
                required={true}
                />
            </Grid>

            <Grid item>
              <TextField
              label= 'Password'
              type='password' 
              sx={{width: '400px'}}
              required = {true}
              />
            </Grid>
            
            <Grid item>
              <TextField
              label= 'Confirm Password'
              type='password' 
              sx={{width: '400px'}}
              required = {true}
              />
            </Grid>

        {/* </Grid> */}
        
        {/* <Grid item>
          <TextField
          label="Upload Resume"
          InputProps={{
            readOnly: true,
          }}
          >
        <Input type='file' />
        </TextField>
        </Grid> */}

      <Grid item>
      <TextField
        label="Upload PDF"
        type="text"
        value={selectedFile ? selectedFile.name : ""}
        InputProps={{
          readOnly: true,
        }}
        sx={{
          width: '400px'
        }}
        required = {true}
      />
      </Grid>
      <Grid sx={{marginTop: '12px'}}>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileSelection}
        style={{ display: "none" }}
        id="pdf-file-upload"
      />
      <label htmlFor="pdf-file-upload">
        <Button variant="contained" component="span">
          Select PDF
        </Button>
      </label>
      </Grid>
      
        <Grid item>
            <Button
            variant="contained"
            color="primary"
            sx={{width: '400px'}}
            >
                Register
            </Button>
        </Grid>

        </Grid>
    </Paper>
  )
}

export default Registration
