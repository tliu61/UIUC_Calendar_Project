import React, { Component } from 'react';

import WelcomePage from '../WelcomePage';
import NavigationBar from '../Constant/NavigationBar';
import Footer from '../Constant/Footer';


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