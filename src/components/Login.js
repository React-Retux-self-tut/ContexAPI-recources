import React, { Component } from "react";
import AuthContext from "../auth-context";

class Login extends Component {
  //nextGen Js keyword
  static contextType = AuthContext;
  componentDidMount() {
    console.log(this.context)
  }

  render() {
    return (
      <button onClick={this.context.toggleAuth}>
        {this.context.isAuth ? "Logout" : "Login"}
      </button>
    );
  }
}

export default Login;
