import React, { Component } from 'react';
import {Route, Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from "history";

import HomeView from '../views/home-view';
import Blog from '../views/blog';
import SearchBar from '../components/search-bar';

let history = createBrowserHistory();

class App extends Component {

    render(props){
        
            return (
            <Router history={history}>
            <div>
                <div className="search_bar">      
                <SearchBar />
                </div>

                <main>
                    <Route exact path="/" component={HomeView} />
                    <Route exact path="/" component={Blog} />
                </main>    
            
                </div>
           </Router>
    )
    }
   
}

export default App;