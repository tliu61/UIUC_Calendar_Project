import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../Styles/NavigationBar.css';
/// get rid of the a 

class NavigationBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <header className = "navigationbar">
                    <nav className = "navigationbar_body">
                        <div className = "nagivationbar_logo">
                            <Link to='/myprofile'>
                                <p>My Profile</p>
                            </Link>
                        </div>
                        <div className= " nagivationbar_spacer"></div>
                        <div className = "navigationbar_items">
                            <ul>
                                <li>
                                    <Link to='/postevent'>
                                        <p>Posting Events</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/findevent'>
                                        <p>Searching Events</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/login'>
                                        <p>Login </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/signup'>
                                        <p>Signup</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
         );
    }
}
 
export default NavigationBar;