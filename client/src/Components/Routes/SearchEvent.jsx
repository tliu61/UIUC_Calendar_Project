import React, { Component } from 'react';
import Searchbox from '../SearchEvent/Searchbox';
import NavigationBar from '../Constant/NavigationBar';
import Footer from '../Constant/Footer';

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