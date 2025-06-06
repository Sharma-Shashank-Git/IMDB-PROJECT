import { useEffect, useState } from "react";
import { MovieContext } from "./MovieContext";

export default function MovieContextWrapper({children}) {
    const [watchlist, setwatchlist] = useState([]);
    
    const addtowatchlist = (movieObj) => {
        let updatedwatchlist = [...watchlist, movieObj]
        setwatchlist(updatedwatchlist);
        localStorage.setItem("watchlist",JSON.stringify(updatedwatchlist));
    }

    const removewatchlist = (movieObj) => {
        let filteredMovies = watchlist.filter((movie) => {
        return movie.id !== movieObj.id;
        })
        setwatchlist(filteredMovies);
        localStorage.setItem("watchlist",JSON.stringify(filteredMovies));
    }

    useEffect(() => {
        let moviesFromLocalStorage = localStorage.getItem("watchlist")
        
        if(!moviesFromLocalStorage) {
            return
        }

        setwatchlist(JSON.parse(moviesFromLocalStorage));
        console.log(JSON.parse(moviesFromLocalStorage));
    },[]);

    return (
        <MovieContext.Provider value={{watchlist, addtowatchlist, removewatchlist, setwatchlist}}>
            {children}
        </MovieContext.Provider>
    )
}