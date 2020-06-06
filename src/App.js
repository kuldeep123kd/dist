import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Movies from './components/Movies';
import Series from './components/Series';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="main">
        <Header />
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
        <Footer />
      </div>
    </HashRouter>
    
    
    
  );
}

export default App;
