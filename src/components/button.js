import React, { Component } from 'react';

const button = (props) => {
    return(
        <div className ="row">
           <div className="col-md-8">
           <button className= "btn btn-default" onChange={this.redirect} />  {/* onChange est un attribut de input. Le bind(this) permet de preserver le context de la classe quand la fonction est appelé */}
           </div>
       </div>
   )
}
const redirect = (event) => {                                // On récupere l'evenement envoyer par l'attribut de input onChange.
 this.setState({searchText:event.target.value}); // On change l'état de SearchBar via la fonction setState()
}
