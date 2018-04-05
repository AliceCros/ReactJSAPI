import React, { Component } from 'react';
import {Route, Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from "history";

import HomeView from '../views/home-view';
import Blog from '../views/blog';
import globalNavbar from '../components/global-navbar';
import SearchBar from '../components/search-bar';

let history = createBrowserHistory();

class App extends Component {

    render(props){
        
            return (
            <Router history={history}>
            <div>
                <header>
                    <Route path="/" component={globalNavbar} />
                </header>
                <div className="search_bar">      
                <SearchBar />
                </div>
                <main>
                    <Route exact path="/homeview" component={HomeView} />
                    <Route exact path="/blog" component={Blog} />
                </main>    
            
                </div>
           </Router>
    )
    }
   
}

export default App;