import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Styles/NavigationBar.css';


class NavigationBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <header className = "navigationbar">
                    <nav className = "navigationbar_body">
                        <div className = "nagivationbar_logo">
                            <Link to='/myprofile'>
                                <a href = "/">My Profile </a>
                            </Link>
                        </div>
                        <div className= " nagivationbar_spacer"></div>
                        <div className = "navigationbar_items">
                            <ul>
                                <li>
                                    <Link to='/postevent'>
                                        <a href = "/"> Posting Events </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/findevent'>
                                        <a href = "/"> Finding Events </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/login'>
                                        <a href = "/"> Login</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/signup'>
                                        <a href = "/">Signup</a>
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