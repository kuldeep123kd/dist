import React from 'react';
import axios from 'axios';
import $ from "jquery";

import '../assets/css/style.css';
import '../assets/css/movies_series.css';
import '../assets/js/style';

class Movies extends React.Component {
  state = {
    posts: [],
    isLoading: true,
    errors: null
  };


  getPosts() {
    axios
      .get("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
      .then(response => {
        response.data.entries.sort((a,b) => a.title.localeCompare(b.title));
        this.setState({
          posts: response.data.entries,
          isLoading: false
        });
      })
      .catch(error => {
        $('.showerror').text('Oops, something went wrong...'); 
        $('.showerror').css("display",'block'); 
        this.setState({ error, isLoading: false })
      });
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { isLoading } = this.state;
    let posts=  this.state.posts.filter(post => post.programType === "movie" && post.releaseYear >= 2010);
    posts  = posts.slice(0, 21);
    return (
      <React.Fragment>
        <div className="tab">
          <div className="popular-tiles">
              <div className="popular-tiles-child">
                  <h1>Popular Movies</h1>
              </div>
          </div>
          <div className="showerror"></div>
          <div className="tabs-child">
            {!isLoading ? (
              posts.map((post,key) => {
                const backimg = post.images["Poster Art"].url;
                return (
                  <div className="movies" key={key}>
                      <a href="/dist" style={{ backgroundImage:`url(${backimg})` }}>
                      </a>
                      <h2>{post.title}</h2>
                  </div>
                );
            })
            ) : (
              <p className="loading">Loading...</p>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;