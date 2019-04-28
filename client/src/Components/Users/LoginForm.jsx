import React, { Component } from 'react';
import {Input, Button, Checkbox, Form} from 'semantic-ui-react'
import "../../Styles/LoginForm.css"
import 'semantic-ui-css/semantic.min.css';
class LoginForm extends Component {
    constructor(){
        super()

        this.state = {
            username:"",
            password: "",
            human:false
        }

        this.updateUsername = this.updateUsername.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.updateHuman  = this.updateHuman.bind(this)
        this.postLogin = this.postLogin.bind(this);
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
    }
    render() { 
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
                        <Input placeholder = 'password' onChange = {this.updatePassword}/>
                    </Form.Field>
                    <Form.Field className = "loginform_field">
                        <Checkbox label = 'verify I am a human' onChange = {this.updateHuman}/>
                    </Form.Field>
                    <Button className="loginform_btn" type = 'submit' color = 'yellow' onClick = {this.postLogin}> Login </Button>
                </Form>
            </div>
        );
    }
}
 
//for login btn pressed, it should take the input and verfiy with the database 
export default LoginForm;