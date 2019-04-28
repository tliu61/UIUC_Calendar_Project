import React, { Component } from 'react';
import {Input, Button, Checkbox, Form} from 'semantic-ui-react'
import "../../Styles/LoginForm.css"
import 'semantic-ui-css/semantic.min.css';
import { forStatement } from '@babel/types';
class LoginForm extends Component {
    state = {  }
    render() { 
        return (
            <div className = "loginform_body">
                <h1>User Login</h1>
                <Form className = "loginform_form">
                    <Form.Field className = "loginform_field">
                        <label>Login Email</label>
                        <br></br>
                        <Input placeholder = 'email'/>
                    </Form.Field>
                    <Form.Field className = "loginform_field">
                        <label> Password </label>
                        <br></br>
                        <Input placeholder = 'password'/>
                    </Form.Field>
                    <Form.Field className = "loginform_field">
                        <Checkbox label = 'verify I am a human'/>
                    </Form.Field>
                    <Button className="loginform_btn" type = 'submit'> Login </Button>
                </Form>
            </div>
        );
    }
}
 
//for login btn pressed, it should take the input and verfiy with the database 
export default LoginForm;