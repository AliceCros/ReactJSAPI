import React,{Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state = {searchText:"", placeHolder:"Tapez votre film.."} // le constructeur est le seul endroit ou l'ou peut effectuter une affectation direct au state.
  }
    render(){
        return(
             <div className ="row">
                <div className="col-md-8">
                <input type="text" className= "form-control input-lg" onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>  {/* onChange est un attribut de input. Le bind(this) permet de preserver le context de la classe quand la fonction est appelé */}
                </div>
            </div>
        )
    }
  handleChange(event){                                // On récupere l'evenement envoyer par l'attribut de input onChange.
      this.setState({searchText:event.target.value}); // On change l'état de SearchBar via la fonction setState()
  }
}

export default SearchBar;