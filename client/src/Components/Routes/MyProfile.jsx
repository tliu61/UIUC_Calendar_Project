import React, { Component } from 'react';

import Footer from '../Constant/Footer';
import NavigationBar from '../Constant/NavigationBar';


class MyProfile extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "myprofile_body">
                <NavigationBar />
                // need a profile thing with all details of users
                <Footer/>
            </div>
         );
    }
}
 
export default MyProfile;