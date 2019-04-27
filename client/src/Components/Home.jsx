import React, { Component } from 'react';

import NavigationBar from './NavigationBar';
import WelcomePage from './WelcomePage';
import Footer from './Footer';


class Home extends Component {

    render() { 
        return (
            <div>
                <NavigationBar/>
                <WelcomePage />
                <Footer />
            </div>
         );
    }
}
 
export default Home;