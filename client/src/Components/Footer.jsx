import React, { Component } from 'react';
import "../Styles/Footer.css"

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div className = "footer_body">
                <footer className = "footer_footer">
                    <p className="footer_text">Made By MAGIC Contact us: magic@gmail.com</p>
                </footer>
            </div>
          );
    }
}
 
export default Footer;