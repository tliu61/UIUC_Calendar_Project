import React, { Component } from 'react';
import NavigationBar from '../NavigationBar';
import Searchbox from '../SearchEvent/Searchbox';
import Footer from '../Footer';

class PostEvent extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavigationBar/>
                <Searchbox/>
                <Footer />
            </div>
         );
    }
}
 
export default PostEvent;