import React, { Component } from 'react';

import Footer from '../Constant/Footer';
import NavigationBar from '../Constant/NavigationBar';
import Profile from '../Users/Profile'


class MyProfile extends Component {
    state = {  }
    render() {
        return (
            <div className = "myprofile_body">
                <NavigationBar />
                <Profile />
                <Footer/>
            </div>
         );
    }
}

export default MyProfile;
