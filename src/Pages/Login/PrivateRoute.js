import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children , ...rest}) => {
    const {user, loading} = useAuth()
   if(loading && !user.email){ return <CircularProgress color="secondary" />}
    return (
        <Route
          {...rest}
          render={({ location }) =>
             user.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivateRoute;