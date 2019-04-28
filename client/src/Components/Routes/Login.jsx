import React, { Component } from 'react';

import NavigationBar from '../NavigationBar';
import LoginForm from '../Users/LoginForm';
import Footer from '../Footer';

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavigationBar />
                <LoginForm />
                <Footer />
            </div>
         );
    }
}
 
export default Login;