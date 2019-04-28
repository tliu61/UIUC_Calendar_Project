import React, { Component } from 'react';
import {Form, Input, Dropdown,Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../../Styles/Signupform.css'
class SignupForm extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "signupform_body">
                <h1>Sign up! </h1>
                <Form>
                    <Form.Field required>
                        <label>First Name</label>
                        <Input placeholder = "" />
                    </Form.Field>
                    <Form.Field required>
                        <label>Last Name</label>
                        <Input placeholder = ""/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Email</label>
                        <Input placeholder = ""/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <Input placeholder = ""/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Confirm password</label>
                        <Input placeholder = ""/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Security Question</label>
                        <Dropdown text = "Select a security question">
                            <Dropdown.Menu>
                                <Dropdown.Item text = "where is birth place?"/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Field>
                    <Form.Field required>
                        <label>Security Question Answer</label>
                        <Input placeholder = ""/>
                    </Form.Field>
                    <Form.Field>
                        <label> Profile Pic</label>
                        <Dropdown text = "Select a profile pic">
                            <Dropdown.Menu>
                                <Dropdown.Item text = "Female"/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Field>
                    <Button type = 'submit'>Create</Button>
                </Form>
            </div>
         );
    }
}
 
export default SignupForm;