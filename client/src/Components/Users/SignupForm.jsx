import React, { Component } from 'react';
import {Form, Input, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../../Styles/Signupform.css'
class SignupForm extends Component {
    constructor(){
        super()

        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
            securityQuestion:"",
            securityQuestionAnswer:"",
            profilePic:-1
        }

        this.updateFirstName = this.updateFirstName.bind(this)
        this.updateLastName = this.updateLastName.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.updateConfirmPassword = this.updateConfirmPassword.bind(this)
        this.updateSecurityQuestion = this.updateSecurityQuestion.bind(this)
        this.updateSecurityQuestionAnswer = this.updateSecurityQuestionAnswer.bind(this)
        this.updateProfilePic  = this.updateProfilePic.bind(this)
        this.postSignup = this.postSignup.bind(this)
    }

    updateSecurityQuestionAnswer(event){
        console.log(event.target.value)
        this.setState({
            securityQuestionAnswer:event.target.value
        })
    }

    updateSecurityQuestion(event){
        console.log(event.target.id)
        this.setState({
            securityQuestion:event.target.text
        })
    }

    updateConfirmPassword(event){
        console.log(event.target.value)
        this.setState({
            confirmPassword:event.target.value
        })
    }

    updatePassword(event){
        console.log(event.target.value)
        this.setState({
            password:event.target.value
        })
    }

    updateLastName(event){
        console.log(event.target.value)
        this.setState({
            lastName:event.target.value
        })
    }

    updateFirstName(event){
        console.log(event.target.value)
        this.setState({
            firstName:event.target.value
        })
    }

    updateProfilePic(event){
        console.log(event.target.id)
        this.setState({
            profilePic:event.target.id
        })
    }

    updateEmail(event){
        console.log(event.target.value)
        this.setState({
            email:event.target.value
        })
    }

    postSignup(event){
        console.log(this.state.firstName)
        console.log(this.state.lastName)
        console.log(this.state.email)
        console.log(this.state.password)
        console.log(this.state.confirmPassword)
        console.log(this.state.securityQuestion)
        console.log(this.state.securityQuestionAnswer)
        console.log(this.state.profilePic)
    }

    render() {
        return (
            <div className = "signupform_body">
                <h1>Sign up! </h1>
                <Form>
                    <Form.Field required>
                        <label>First Name</label>
                        <Input placeholder = "" onChange = {this.updateFirstName}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Last Name</label>
                        <Input placeholder = "" onChange = {this.updateLastName}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Email</label>
                        <Input placeholder = "" onChange = {this.updateEmail}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <Input placeholder = "" onChange = {this.updatePassword}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Confirm password</label>
                        <Input placeholder = "" onChange = {this.updateConfirmPassword}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Security Question</label>
                            <Button.Group>
                                <Button id  = "birthplace" text = "What city were you born in?" onClick = {this.updateSecurityQuestion}>"What city were you born in?"</Button>
                                <Button id  = "favcolor" text = "What is your favorite color?" onClick = {this.updateSecurityQuestion}>"What is your favorite color?"</Button>
                                <Button id  = "petname" text = "What is the name of your first pet?" onClick = {this.updateSecurityQuestion}>"What is the name of your first pet?"</Button>
                                <Button id  = "vacationspot" text = "Where is your dream vacation located?" onClick = {this.updateSecurityQuestion}>"Where is your dream vacation located?"</Button>
                            </Button.Group>
                    </Form.Field>
                    <Form.Field required>
                        <label>Security Question Answer</label>
                        <Input placeholder = "" onChange = {this.updateSecurityQuestionAnswer}/>
                    </Form.Field>
                    <Form.Field>
                        <label> Profile Pic</label>
                        <Button.Group>
                            <Button id = "female" text = "Female" onClick = {this.updateProfilePic}>Female</Button>
                            <Button id="male" text = "Male" onClick = {this.updateProfilePic}>Male</Button>
                            <Button id = "neutural" text = "Neutural" onClick = {this.updateProfilePic}>Neutural</Button>
                        </Button.Group>
                    </Form.Field>
                    <Button type = 'submit' color = 'yellow' onClick = {this.postSignup}> Create</Button>
                </Form>
            </div>
         );
    }
}

export default SignupForm;
