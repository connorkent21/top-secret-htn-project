import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import useUser from '../../hooks/useUser';

import { makeStyles } from '@material-ui/core/styles';
import Spaxios from '../../api/Spaxios';
import {AddMovieGenres } from '../../api/homiecircles';

const spaxios = new Spaxios();

const styles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 50px',
  },
  paper: {
    position: 'relative',
    width: '100%',
  },
  paperTitleBar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    borderRadius: '3px 3px 0 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
  },
  formContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '15px 50px',
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
  },
  submitButton: {
    marginTop: theme.spacing(3),
  },
  checkBox: {
    width: '100%',
    justifyContent: 'left',
    margin: 0,
  },
  error: {
    color: '#f44336',
  },
  logoContainer: {
    display: 'flex',
    flexGrow: 1,
    padding: '10px',
    alignItems: 'center',
  },
}));

const Navigation = () => {
  const theme = useTheme();
  const [user] = useUser();
  const classes = styles();

  const handleClick = () => {
    let temp = AddMovieGenres("1", [1,2,3,4,5]);

    console.log('sicko mode');
  };

  console.log('this is the user: ', user);

  return (
    <AppBar position="absolute" color="default" elevation={0}>
      <Toolbar>
        <div className={classes.logoContainer}>
          <div style={{ height: '42px', width: '42px' }}>
            <Logo fill="#8C2F39" stroke={theme.palette.secondary} />
          </div>
          <div
            style={{ fontSize: '1.5rem', fontWeight: 600, color: '#8C2F39' }}
          >
            MovieMatchr
          </div>
        </div>
        <nav>
          <Link to={user ? '/' : '/login'} className={classes.link}>
            <Button variant="text">{user ? 'Home' : 'Login'}</Button>
          </Link>
          <Link to="/support" className={classes.link}>
            <Button variant="contained" color="primary">
              Sign up
            </Button>
          </Link>
          <Button variant="contained" color="primary" onClick={handleClick}>
            TEST
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navigation);
