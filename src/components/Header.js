import React from 'react';
import '../assets/css/style.css';
import '../assets/js/style';

class Header extends React.Component {
  render () {
    return ( 
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/dist">DEMO Streaming</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Login</a>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-dark">Start your free trial</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
  }
}

export default Header;