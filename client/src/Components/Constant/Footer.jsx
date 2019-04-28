import React, { Component } from 'react';
import "../../Styles/Footer.css"
import 'semantic-ui-css/semantic.min.css';

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div className = "footer_body">
                <footer className = "footer_footer">
                    <p className="footer_text">Made By MAGICS Contact us: magics@gmail.com</p>
                </footer>
            </div>
          );
    }
}
 
export default Footer;