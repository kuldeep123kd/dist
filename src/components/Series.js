import React from 'react';
import axios from 'axios';

import '../assets/css/style.css';
import '../assets/css/movies_series.css';
import '../assets/js/style';

class Series extends React.Component {
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
          .catch(error => this.setState({ error, isLoading: false }));
      }
    
      componentDidMount() {
        this.getPosts();
      }
    
      render() {
        const { isLoading, posts } = this.state;
        return (
          <React.Fragment>
            <div className="tab">
              <div className="popular-tiles">
                <div className="popular-tiles-child">
                    <h1>Popular Series</h1>
                </div>
              </div>
              <div className="tabs-child">
                {!isLoading ? (
                  posts.map((post,key) => {                    
                    if (post.programType === "series" && post.releaseYear >= 2010) {
                      const backimg = post.images["Poster Art"].url;
                      return (
                        <div className="series" key={key}>
                            <a href="/" style={{ backgroundImage:`url(${backimg})` }}>
                            </a>
                            <h2>{post.title}</h2>
                        </div>
                      );
                    }
                    else {
                      return null
                    }
                })
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </React.Fragment>
        );
      }
}

export default Series;
