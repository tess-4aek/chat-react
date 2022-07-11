import React from 'react';
import { Container, Grid, Box, Button } from '@material-ui/core';

const Login = () => {
    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight - 48 }}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid style={{ width: 400, background: 'lightgray' }}
                    container
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Box p={5}>
                        <Button variant={"outlined"}>Login with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;