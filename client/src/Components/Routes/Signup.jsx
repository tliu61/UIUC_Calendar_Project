import React, { Component } from 'react';

import NavigationBar from '../NavigationBar';
import SignupForm from '../Users/SignupForm';
import Footer from '../Footer';

class Signup extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavigationBar />
                <SignupForm />
                <Footer />
            </div>
         );
    }
}
 
export default Signup;