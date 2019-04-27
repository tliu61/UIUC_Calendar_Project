import React, {Component} from 'react';
import '../Styles/WelcomePage.css'
import NavigationBar from '../Components/NavigationBar';

class WelcomePage extends Component {
    state = {  }
    render() { 
        return (
                <div className = "welcomepage_body">
                    <h1 className = "welcomepage_header">Welcome to MAGIC</h1>
                    <p className = "welcomepage_para"> This is a place where you can post events and find one.</p>
                    <p className = "welcomepage_para">Make the most use of college time to have fun! </p>
                </div>
        );
    }
}
 
export default WelcomePage;