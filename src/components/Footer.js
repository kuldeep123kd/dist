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
                        <li>Home</li>
                        <li>|</li>
                        <li>Terms and Conditions</li>
                        <li>|</li>
                        <li>Privacy Policy</li>
                        <li>|</li>
                        <li>Collection Statement</li>
                        <li>|</li>
                        <li>Help</li>
                        <li>|</li>
                        <li>Manage Account</li>
                    </ul>
                </div>
                <div className="footer-child2">
                    <p>Copyright &copy; {(new Date().getFullYear())} DEMO Streaming, All rights reserved.</p>
                </div>
                <div className="footer-child3">
                    <div className="social-icons">
                        <div>
                            <a href="/"><i className="fa fa-facebook" ></i></a>
                            <a href="/"><i className="fa fa fa-twitter" ></i></a>
                            <a href="/"><i className="fa fa fa-instagram" ></i></a>
                        </div>
                    </div>
                    <div className="social-download">
                        <div>
                            <a href="/"><img src={apple} alt="apple-download" /></a>
                            <a href="/"><img src={google} alt="google-download" /></a>
                            <a href="/"><img src={microsoft} alt="microsoft-download" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;