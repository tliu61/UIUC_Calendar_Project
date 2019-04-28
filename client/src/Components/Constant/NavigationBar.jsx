import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../Styles/NavigationBar.css';


class NavigationBar extends Component {

    constructor(){
        super();

        this.state = {
            userId: -1
        }

        this.updateUser = this.updateUser.bind(this);
    }

    updateUser(){
        console.log("user clicked")
        this.setState({
            userId: 0
        })
    }
    render() { 
        return ( 
            <div>
                <header className = "navigationbar">
                    <nav className = "navigationbar_body">
                        <div className = "navigationbar_items">
                            <ul>
                                <li>
                                    <Link to='/'>
                                        <p> Home</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/myprofile' onClick={this.updateUser}>
                                        <p>My Profile</p>
                                    </Link>
                                </li>
                            </ul>
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