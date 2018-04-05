import React from 'react';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";


const VideoListItem = ({movie}) =>{ // En passant "X" en parametre de la fonction VideolisteItem on lui permet de pouvoir recevoir un objet en attribut lors de son execution.
        return <li className="list-group-item">
                <div className = "media"></div>
                        <div className= "media-left">
                        <img className="media-object img-rounded" height="100 px" width="100px" src={`${IMAGE_BASE_URL}${movie.poster_path}`} /> {/* concatène l'url de base pour acceder au image des film avec chacune des url propre a chaque film */}
                        </div>    
                
                <div className="media-body">
                        <h5 className="title_list_item">{movie.title}</h5>
                </div>              
               
              </li>
}

export default VideoListItem;

// ${API_END_POINT}movie/[movieId]&${API_KEY}
// const BASE_URL="https://www.youtube.com/embed/";