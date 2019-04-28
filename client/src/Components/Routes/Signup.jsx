import React, { Component } from 'react';

import SignupForm from '../Users/SignupForm';
import NavigationBar from '../Constant/NavigationBar';
import Footer from '../Constant/Footer';


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