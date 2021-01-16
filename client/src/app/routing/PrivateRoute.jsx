import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { CheckAuth } from '../../api/Auth';

function PrivateRoute(props) {
  const { children, ...rest } = props;

  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      const loginCheck = await CheckAuth();
      setLoggedIn(loginCheck === 200);
    };

    checkLogin();
  }, []);

  return (
    loggedIn !== null && (
      <Route
        {...rest}
        render={({ location }) =>
          loggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    )
  );
}

export default PrivateRoute;
