import React, { Component } from 'react';

import Login from './components/Login';
import Profile from './components/Profile';
import './components/Login.css';
import '../src/app.css';
import Title from './components/Title'
import './components/title.css';

export const AuthContext = React.createContext({
  isAuth: false,
  toggleAuth: () => {}
});

class App extends Component {
  state = {
    isAuth: false
  };

  toggleAuth = () => {
    this.setState(prevState => {
      return {
        isAuth: !prevState.isAuth
      };
    });
  };

  render() {
    return (
      <AuthContext.Provider
      
        value={{ isAuth: this.state.isAuth, toggleAuth: this.toggleAuth }}
      >
        <Title />
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}

export default App;
