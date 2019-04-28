import React, { Component } from 'react';
import PostEventform from '../PostEvent/PostEventForm';
import NavigationBar from '../Constant/NavigationBar';
import Footer from '../Constant/Footer';


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