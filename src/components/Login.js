import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Paper elevation={3} sx={{ padding: "60px" }}>
      <Grid container direction='column' spacing={4} textAlign={'center'}>
        <Grid item>
          <Typography variant="h3" component="h2">
            Login
          </Typography>
        </Grid>
        <Grid item>
          <TextField label="Email" variant="outlined" sx={{ width: "350px" }} />
        </Grid>
        <Grid item>
              <TextField
              label= 'Password'
              type='password' 
              sx={{width: '350px'}}
              />
            </Grid>
        <Grid item>
            <Button
            variant="contained"
            color="primary"
            sx={{width: '350px'}}
            >
                Login
            </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Login;
