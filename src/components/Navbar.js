import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

const Navbar = () => {
    const user = false;

    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justifyContent={"flex-end"}>
                    {user ?
                        <Button variant={"outlined"}>Logout</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={"outlined"}>Login</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;