import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { Link, withRouter } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <div style={{ flexGrow: 1, padding: '10px' }}>
          <img
            src={process.env.PUBLIC_URL + 'client-logo.jpg'}
            alt="client logo"
            style={{ height: '64px', verticalAlign: 'middle' }}
          />
        </div>
        <nav>
          <Link to={loggedIn ? '/' : '/login'} className={classes.link}>
            <Button variant="text">{loggedIn ? 'Home' : 'Login'}</Button>
          </Link>
          <Link to="/support" className={classes.link}>
            <Button variant="text">Some Link</Button>
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navigation);
