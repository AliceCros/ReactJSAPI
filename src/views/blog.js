import React, { Component } from 'react';
import axios from 'axios';

import dog from '../images/dog.png';
import joker from '../images/thejoker.jpg';

export default class Blog extends Component{

    render(){
        return (
            <div className="row"> 
                <div className="col-md-12">
                <h1>Hello Blog</h1>
                </div>
                <div className="col-md-2">
                    <img className="media-object img-rounded" src={dog} height="100px" width="100px"  />
                    <img className="media-object img-rounded" src={joker} height="100px" width="100px"  />
                </div>
                <div className = "col-md-6">
                    <article>
                        <h5>Article 1</h5>
                        <p>« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.</p>
                    </article>
                    <article>
                        <h5>Article 2</h5>
                        <p>« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.</p>
                    </article>
                </div>
                <div className = "col-md-4">
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                    </ul>
                </div>
            </div>
        )
    }
}