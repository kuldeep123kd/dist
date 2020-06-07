import React from 'react';
import { Link } from "react-router-dom";
import '../assets/css/style.css';
import '../assets/js/style';

class Home extends React.Component {
  render () {
    return ( 
        <div className="tabs">
            <div className="popular-tiles">
                <div className="popular-tiles-child">
                    <h1>Popular Titles</h1>
                </div>
            </div>
            <div className="tabs-child-home">
                <div className="series series-home">
                    <Link to="/series">Series</Link>
                    <h2>Popular Series</h2>
                </div>
                <div className="movies movies-home">
                    <Link to="/movies">Movies</Link>
                    <h2>Popular Movies</h2>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;