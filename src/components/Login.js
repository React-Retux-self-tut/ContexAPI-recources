import React from 'react';

import { AuthContext } from '../App';

const login = props => (
  <AuthContext.Consumer>
    {authContext => {
      return (
        <button className="Login-btn" onClick={authContext.toggleAuth}>
          {authContext.isAuth ? 'Logout' : 'Login'}
        </button>
      );
    }}
  </AuthContext.Consumer>
);

export default login;
