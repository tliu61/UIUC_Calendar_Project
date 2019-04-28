import React, { Component } from 'react';
import NavigationBar from '../NavigationBar';
import PostEventform from '../PostEvent/PostEventForm';
import Footer from '../Footer';

class PostEvent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "postevent_body">
                <NavigationBar/>
                <PostEventform/>
                <Footer />
            </div>
         );
    }
}
 
export default PostEvent;