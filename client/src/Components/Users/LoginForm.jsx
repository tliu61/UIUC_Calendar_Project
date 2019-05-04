import React, { Component } from 'react';
import {Input, Button, Checkbox, Form} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import "../../Styles/LoginForm.css"
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import UserProfile from '../Users/UserProfile.js';
import NavigationBar from '../Constant/NavigationBar';

class LoginForm extends Component {
    constructor(){
        super()

        this.state = {
            username:"",
            password: "",
            human:false,
            posted: false,
            successPosted:false
        }

        this.updateUsername = this.updateUsername.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.updateHuman  = this.updateHuman.bind(this)
        this.postLogin = this.postLogin.bind(this);
        this.resetLogin = this.resetLogin.bind(this)
    }

    resetLogin(event){
        this.setState({
            username:"",
            password: "",
            human:false,
            posted: false,
            successPosted:false
        })
    }

    updateUsername(event){
        console.log(event.target.value)
        this.setState({
            username : event.target.value
        })
    }

    updatePassword(event){
        console.log(event.target.value)
        this.setState({
            password:event.target.value
        })
    }

    updateHuman(event){
        console.log(event.target.value)
        if(this.state.human === false) {
            this.setState({
                human:true
            })
        }else{
            this.setState({
                human:false
            })
        }
    }
    postLogin(event){
        // connect with db and based on result, direct to login or failed
        console.log(this.state.username)
        console.log(this.state.password)
        console.log(this.state.human)
        if(this.state.human === false){
          alert("please verify you are a human.")
        }
        var getEmail = this.state.username;
        var getPassword = this.state.password;

        axios.get('/api/users/' + getEmail + '/password/' + getPassword)
          .then(res => {
            console.log(res.data.data);
            UserProfile.setName(res.data.data.name)
            UserProfile.setEmail(res.data.data.email)
            UserProfile.setLogin(true)
            console.log("successPosted");
            this.setState({
                posted : true,
                successPosted:true
            })
            console.log("Name:",res.data.data.name)
            console.log("Email:",res.data.data.email)

            console.log("UserProfile name:",UserProfile.getName())
          })
          .catch(err => {
            console.log(err.response)
            this.setState({
                posted: true,
                successPosted:false
            })
          })

        // after connect to the api,
        // if returned error :
        /*
             this.setState({
                 posted:true,
                 successPosted: false

            })
        */
       //if successfully login :
       /*
            this.setState({
                posted:true,
                successPosted:true
            })
       */
    }
    render() {

      if(this.state.posted === false){
        return (
            <div className = "loginform_body">
                <h1>User Login</h1>
                <Form className = "loginform_form">
                    <Form.Field className = "loginform_field">
                        <label>Login Email</label>
                        <Input placeholder = 'email' onChange={this.updateUsername}/>
                    </Form.Field>
                    <Form.Field className = "loginform_field">
                        <label> Password </label>
                        <Input type="password" placeholder = 'password' onChange = {this.updatePassword}/>
                    </Form.Field>
                    <Form.Field className = "loginform_field">
                        <Checkbox label = 'Verify I am human' onChange = {this.updateHuman}/>
                    </Form.Field>
                    <Button className="loginform_btn" type = 'submit' color = 'yellow' onClick = {this.postLogin}> Login </Button>
                </Form>
            </div>
        );
    }else{
        if(this.state.successPosted === true){
           // NavigationBar.render()
            {console.log("Test name:",UserProfile.getName())}
            return (
                <div className = "loginform_body">
                    <h1>Successfully Logged In! </h1>
                    <h1>Hello Welcome Back {UserProfile.getName()}</h1>
                    <Link to='/'>
                        Back To Home To Explore.
                    </Link>
                </div>
            )
        }else{
            return(
                <div className = "loginform_body">
                    <h1>Failed Logged In! </h1>
                    <h3>Check your email or password to try again </h3>
                    <Link to='/login' onClick = {this.resetLogin}>
                        Back To Login.
                    </Link>
                </div>
            )
            }
    }
    }
}

//for login btn pressed, it should take the input and verfiy with the database
export default LoginForm;
