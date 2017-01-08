import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

class Footer extends React.Component{
  render() {
    return (
        <div className="footer">
            <ul className="footer-list">
                <li>
                    <a id="mailLink" className="footer-links">
                        <img src="../assets/icons/email.png" data-src="../assets/icons/email-hover.png" alt="Email"></img>
                    </a>
                </li>
                    <a data-link-type="externalLink" href="https://www.linkedin.com/in/tracy-lin" className="footer-links page-link">
                        <img src="../assets/icons/linkedin.png" data-src="../assets/icons/linkedin-hover.png" alt="LinkedIn"></img>
                    </a>
                <li>
                    <a data-link-type="externalLink" href="https://medium.com/@tracy.lin" className="footer-links page-link">
                        <img src="../assets/icons/medium.png" data-src="../assets/icons/medium-hover.png" alt="Medium"></img>
                    </a>
                </li>
                <li>
                    <a data-link-type="externalLink" href="http://cargocollective.com/tracylin" className="footer-links page-link">
                        <img src="../assets/icons/cargo.png" data-src="../assets/icons/cargo-hover.png" alt="Cargo"></img>
                    </a>
                </li>
            </ul>
        </div>
    );
  }
}

export default Footer;
