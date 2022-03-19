import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { useHistory } from 'react-router-dom'
import { Loader } from '../utils/Loader';
import { useGlobalContext } from "../rootcontext/GlobalContext";
import { url } from "../api";
import { useLocation, Redirect } from "react-router-dom"

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © Fahad Kiyani '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Login() {
    const location = useLocation()
    const {
        isAuthorized, setIsAuthorized,
        isValidUser, setIsValidUser,
        isLoading, setIsLoading,
    } = useGlobalContext();
    const history = useHistory();
    const [failedResponse, setFailedResponse] = useState(false);
    const [failedResponseMessage, setFailedResponseMessage] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get('username'),
            password: data.get('password'),
        });
        let payload = {
            username: data.get('username'),
            password: data.get('password'),
        }
        setIsValidUser(true)
        console.log(process.env.NODE_ENV);
        axios.post(`${url}/login`, payload).then(response => {
            if (response.data.CODE === "SUCCES") {
                localStorage.setItem("token", `${response.data?.Result.accessToken}`)
                setIsAuthorized(true)
                setIsValidUser(true);
                setIsLoading(false);
                history.push('/')
            } else {
                setIsLoading(false)
                setIsValidUser(false)
            }
        }).catch(err => { setFailedResponse(true); setFailedResponseMessage("Network Error"); setIsLoading(false); })
    };

    return (
        <>
            {
                location.pathname !== "/login" && <Redirect to="/login" />
            }
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                                {isLoading && <div className='ml-5'>
                                    <Loader size={'sm'} color="white" />
                                </div>}
                            </Button>

                            {isValidUser === false &&
                                <Grid container>
                                    <Grid item xs>
                                        <h6 variant="body2" className="text-danger">
                                            Invalid User: Please use correct login details
                                        </h6>
                                    </Grid>
                                </Grid>
                            }
                            {failedResponse && <Grid container>
                                <Grid item xs>
                                    <h6 variant="body2" className="text-danger">
                                        {failedResponseMessage}
                                    </h6>
                                </Grid>
                            </Grid>
                            }
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </>
    );
}