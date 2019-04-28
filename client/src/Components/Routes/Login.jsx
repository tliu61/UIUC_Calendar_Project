import React, { Component } from 'react';

import LoginForm from '../Users/LoginForm';
import NavigationBar from '../Constant/NavigationBar';
import Footer from '../Constant/Footer';


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