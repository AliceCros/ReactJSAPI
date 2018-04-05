import React, { Component } from 'react';
import axios from 'axios';

import VideoList from '../containers/video-list';
import VideoDetail from '../components/video-detail';
import Video from '../components/video';

const API_END_POINT = "https://api.themoviedb.org/3/"; // est le point d'entrer de l'API
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"; // url des films les plus populaires
const API_KEY = "ec1874e1003805f77dc9edaf6d7a9cdd" // ma clef Api.

export default class HomeView extends Component {
    constructor(props){
        super(props)
        this.state = {moviesList:{}, currentMovie:{}} // est l'ensemble des films actuellment dans la page.
   }
    componentWillMount(){ // Est effectuer quand les composant vont etre charger; "WILL".
       this.initMovies(); // On effectue donc l'appel ajax juste au moment ou nos composant vont être charger
    }

    initMovies(){
            axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&api_key=${API_KEY}`).then(function(response){// Requete ajax format ES6.            
            this.setState({moviesList:response.data.results.slice(1,6), currentMovie:response.data.results[0]},function(){// on change l'état de notre app en donnant a moviesList les 6 premier films du top 20 et a current list le premier film du tableau recuperer via l'api.       
                this.applyVideoToCurrentMovie(); // 
            }); 
            }.bind(this));  // On bind egalement notre requete ajax pour quel reste dans le contexte de App. 
    }


    applyVideoToCurrentMovie(){ // On modifie notre state current moovie pour  ajouter un champs qui sera son video ID
        
        axios
            .get(`${API_END_POINT}movie/${this.state.currentMovie.id}/videos?&api_key=${API_KEY}&append_to_response=video&include_adult=false`)
            .then((response) => {// Requete ajax format ES6.            
            
                console.log('[Movie]', response.data)
                const youtubeKey = response.data.results[0].key; // on récupère de currentMovie movie la clé youtube
                let newCurrentMovieState = this.state.currentMovie;
                newCurrentMovieState.videoId = youtubeKey; // on crée un nouveau champs dans le state du currentMovie.
                this.setState({currentMovie : newCurrentMovieState}) // currentMovie devient notre nouveau newCurrentMovieState
                console.log(response)
            })
            .catch((er) => {
              console.error("ERROR =>", er)  
            });
    }

    render() {
    const renderVideoList = () => { // Si le state.movieList contient bien 5 film alors tu peut me retourner l'action
                if(this.state.moviesList.length>=5){
                    return <VideoList movieList= {this.state.moviesList}/> //On fournie a VideoList la liste des films les plus populaire du 1 au 5 eme 
                }
            }
        return (
            <div>
            <h1>Home View</h1>

            <div className="row"> 
                    <div className = "col-md-8">
                        <Video videoId={this.state.currentMovie.videoId}/>
                        <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/> {/* (TOP FILM) On fournis au parametre de video detail des informations de l'état de APP en allant chercher les parametre des objets récuperer via l'api >>> title et overview  */}
                    </div>
                    <div className = "col-md-4">
                        {renderVideoList()}
                    </div>
                </div> 
            </div>       
        )
    }
}