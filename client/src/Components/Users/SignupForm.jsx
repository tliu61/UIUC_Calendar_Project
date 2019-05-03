import React, { Component } from 'react';
import {Form, Input, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../../Styles/Signupform.css'
import {Link} from 'react-router-dom'
import axios from 'axios';

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
            profilePic:"",
            posted:false,
            successPosted:false
        };

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

    resetSignup(event){
        this.setState({
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
            securityQuestion:"",
            securityQuestionAnswer:"",
            profilePic:"",
            posted:false,
            successPosted:false
        })
    }
    updateSecurityQuestionAnswer(event){
        console.log(event.target.value)
        this.setState({
            securityQuestionAnswer:event.target.value
        })
    }

    updateSecurityQuestion(event){
        if(!event.target.classList.contains("active")){
            console.log("Select:",event.target.value);
            var prevValue = this.state.securityQuestion;
            event.target.classList.add("active");
            this.setState({securityQuestion: event.target.value}, function () {
                console.log("securityQuestion updated");
            });
            var questionButtons = document.getElementById ("questions").childNodes;
            for (var i in questionButtons){
                if(questionButtons[i].value == prevValue){
                    questionButtons[i].classList.remove("active");         //unselect the previous button
                    console.log("removed: ", prevValue);
                    break;
                }
            }
        }
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
        if(!event.target.classList.contains("active")){
            console.log("Select:",event.target.value);
            var prevValue = this.state.profilePic;
            event.target.classList.add("active");
            this.setState({profilePic: event.target.value}, function () {
                console.log("profilePic updated");
            });
            var profilePicsButtons = document.getElementById("profiles").childNodes;
            for (var i in profilePicsButtons){
                if(profilePicsButtons[i].value == prevValue){
                    profilePicsButtons[i].classList.remove("active");         //unselect the previous button
                    console.log("removed: ", prevValue);
                    break;
                }
            }
        }
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

        var new_user = {
          createdevents: [],
          savedevents: [],
          name: this.state.firstName + " " + this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          securityquestion: this.state.securityQuestion,
          securityanswer: this.state.securityQuestionAnswer
        }

        axios.post('/api/users', new_user)
          .then(res => {
            console.log(res.data)
            this.setState({
                posted:true,
                successPosted:true
            })
          })
          .catch(err => {
            console.log(err.response)
            this.setState({
                posted:true,
                successPosted:false
            })
          })
    }

    render() {
        if(this.state.posted === false){
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
                        <Input type="password" placeholder = "" onChange = {this.updatePassword}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Confirm password</label>
                        <Input type="password" placeholder = "" onChange = {this.updateConfirmPassword}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Security Question</label>
                            <Button.Group id = "questions">
                                <Button id  = "birthplace" class = "btn-block" value = "What city were you born in?" onClick = {this.updateSecurityQuestion}>"What city were you born in?"</Button>
                                <Button id  = "favcolor" class = "btn-block" value = "What is your favorite color?" onClick = {this.updateSecurityQuestion}>"What is your favorite color?"</Button>
                                <Button id  = "petname" class = "btn-block" value = "What is the name of your first pet?" onClick = {this.updateSecurityQuestion}>"What is the name of your first pet?"</Button>
                                <Button id  = "vacationspot" class = "btn-block" value = "Where is your dream vacation located?" onClick = {this.updateSecurityQuestion}>"Where is your dream vacation located?"</Button>
                            </Button.Group>
                    </Form.Field>
                    <Form.Field required>
                        <label>Security Question Answer</label>
                        <Input placeholder = "" onChange = {this.updateSecurityQuestionAnswer}/>
                    </Form.Field>
                    <Form.Field>
                        <label> Profile Pic</label>
                        <Button.Group id = "profiles">
                            <Button id = "female" value = "Female" onClick = {this.updateProfilePic}>Female</Button>
                            <Button id="male" value = "Male" onClick = {this.updateProfilePic}>Male</Button>
                            <Button id = "neutural" value = "Neutural" onClick = {this.updateProfilePic}>Neutural</Button>
                        </Button.Group>
                    </Form.Field>
                    <Button type = 'submit' color = 'yellow' onClick = {this.postSignup}> Create</Button>
                </Form>
            </div>
         );
        }else{
            if(this.state.successPosted === false){
                return(
                    <div className = "signupform_response_body">
                        <h1>Failed to Signup </h1>
                        <h3>Please make sure to fill in all required information before proceed</h3>
                        <Link to='/signup' onClick = {this.resetSignup}>
                            Back To Signup Again.
                        </Link>
                    </div>
                )
            }else{
                return(
                    <div className = "signupform_response_body">
                        <h1> Successfully Signup! </h1>
                        <h3> Welcome Abroad!</h3>
                        <Link to='/'>
                            Back To Home To Explore!
                        </Link>
                    </div>
                )
            }
        }
    }
}

export default SignupForm;
