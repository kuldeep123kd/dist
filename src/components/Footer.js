import React from 'react';
// import './App.css';
import '../assets/css/style.css';
import '../assets/js/style';
import apple from '../assets/images/apple-store.png'
import google from '../assets/images/google-play.png'
import microsoft from '../assets/images/microsoft.png'

class Footer extends React.Component {
  render () {
    return ( 
        <footer id="footer">
            <div className="footer">
                <div className="footer-child1">
                    <ul>
                        <li className="footer-child1-list">Home</li>
                        <li>|</li>
                        <li className="footer-child1-list">Terms and Conditions</li>
                        <li>|</li>
                        <li className="footer-child1-list">Privacy Policy</li>
                        <li>|</li>
                        <li className="footer-child1-list">Collection Statement</li>
                        <li>|</li>
                        <li className="footer-child1-list">Help</li>
                        <li>|</li>
                        <li className="footer-child1-list">Manage Account</li>
                    </ul>
                </div>
                <div className="footer-child2">
                    <p>Copyright &copy; {(new Date().getFullYear())} DEMO Streaming, All rights reserved.</p>
                </div>
                <div className="footer-child3">
                    <div className="social-icons">
                        <div>
                            <a href="/dist"><i className="fa fa-facebook" ></i></a>
                            <a href="/dist"><i className="fa fa fa-twitter" ></i></a>
                            <a href="/dist"><i className="fa fa fa-instagram" ></i></a>
                        </div>
                    </div>
                    <div className="social-download">
                        <div>
                            <a href="/dist"><img src={apple} alt="apple-download" /></a>
                            <a href="/dist"><img src={google} alt="google-download" /></a>
                            <a href="/dist"><img src={microsoft} alt="microsoft-download" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;