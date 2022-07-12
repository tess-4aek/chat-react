import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import { LOGIN_ROUTE } from '../utils/consts';
import {useAuthState} from 'react-firebase-hooks/auth';

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <AppBar style={{background: '#a6d4fa'}} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justifyContent={"space-between"}>
                    <div className='logo'>
                        Chat-R
                    </div>
                    {user ?
                        <Button onClick={() => auth.signOut()} variant={"outlined"}>Logout</Button>
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