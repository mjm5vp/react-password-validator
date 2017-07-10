import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      valid: false
    }
  }

  handleEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  handlePassword(e){
    this.setState({
      password: e.target.value
    })
    console.log(this.state.password)
  }

  handleConfirmPassword(e){
    this.setState({
      confirmPassword: e.target.value
    })
  }

  handleSubmit(e){
    this.checkIfValid()
  }

  checkIfValid(){
    console.log(this.state.password)
    console.log(this.state.confirmPassword)
    var emailValid = this.state.email.includes("@")
    console.log(emailValid)
    if(this.state.password === this.state.confirmPassword && emailValid){
      console.log('match')
      this.setState({
        valid: true
      })
    }else {
      console.log('no match')
      this.setState({
        valid: false
      })
    }
  }




  render() {
    let valid = this.state.valid ? "Valid!" : "Passwords do not match"
    return (

      <div className="form">
        <h1>Sign Up</h1>
        <input onChange={(e) => this.handleEmail(e)} type="text" placeholder="email" />
        <input onChange={(e) => this.handlePassword(e)} type="password" placeholder="password" />
        <input onChange={(e) => this.handleConfirmPassword(e)} type="password" placeholder="confirm password" />
        <input type="submit" onClick={(e) => this.handleSubmit(e)} value="Submit" />
        <p>{valid}</p>
      </div>

    );
  }
}

export default Validator;
