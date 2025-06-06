import { useState,useEffect, useContext } from "react";
import genreids from "../assets/genre";
import { MovieContext } from "./MovieContext";

const Watchlist = () => {
    const {watchlist, setwatchlist} = useContext(MovieContext);
    const [search, setsearch] = useState("");
    const [Currgenre, setCurrgenre] = useState("All");
    const [genreList, setgenreList] = useState([]);

    const handlesearch = (e) => {
        setsearch(e.target.value);
    }

    const handleFilter = (genre) => {
        setCurrgenre(genre);
    }

    const handleAscendingRatings = () => {
        let sortedAscending = watchlist.sort((a,b) => {
            return a.vote_average - b.vote_average;
        })
        setwatchlist([...sortedAscending]);
    }

    const handleDescendingRatings = () => {
        let sortedDescending = watchlist.sort((a,b) => {
            return b.vote_average - a.vote_average;
        })
        setwatchlist([...sortedDescending]);
    }

    useEffect(() => {
        let moviesFromLocalStorage = localStorage.getItem("watchlist")
        
        if(!moviesFromLocalStorage) {
            return
        }

        setwatchlist(JSON.parse(moviesFromLocalStorage));
        console.log(JSON.parse(moviesFromLocalStorage));
    },[]);

    useEffect(() => {
        let genres = watchlist.map((movie) => {
            return genreids[movie.genre_ids[0]];
        })
        genres = new Set(genres);
        setgenreList(["All",...genres]);
    },[watchlist])

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        {/* Search feild */}
        <div className="flex justify-center my-10">
            <input type="text" placeholder="Search Movies" value={search} onChange={handlesearch} className="border border-gray-500 h-[3rem] w-[18rem] px-3" />
        </div>

        {/* Genre */}
        <div className="flex justify-center m-4">
            {genreList.map((genre) => {
                return (
                    <div key={genre}
                        onClick={() => handleFilter(genre)}
                        className={
                            Currgenre == genre
                            ? "mx-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl cursor-pointer"
                            : "mx-4 flex justify-center items-center bg-gray-400 h-[3rem] w-[9rem] text-white border rounded-xl cursor-pointer"
                        }
                    >
                        {genre}
                    </div>
                )
            })}
        </div>

        {/* watchlist table */}
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead>
                <tr className="bg-gray-50">
                    <th className="px-6 py-4 font-medium text-gray-900">Name</th>
                    <th>
                        <div className="flex items-center gap-2">
                            <i
                            onClick={handleAscendingRatings}
                            className="fa-solid fa-arrow-up"
                            ></i>
                            <div>Rating</div>
                            <i
                            onClick={handleDescendingRatings}
                            className="fa-solid fa-arrow-down"
                            ></i>
                        </div>
                    </th>
                    <th>
                        <div className="flex">
                            <div>Popularity</div>
                        </div>
                    </th>
                    <th>
                        <div className="flex">
                            <div>Genre</div>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {watchlist
                .filter((movie) => {
                    if(Currgenre === "All") {
                        return true;
                    }
                    return genreids[movie.genre_ids[0]] === Currgenre;
                })
                .filter((movie) => 
                    movie.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((movieObj) => (
                    <tr key={movieObj.id} className="hover:bg-gray-50">
                    <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                        <img
                            className="h-[6rem] w-[10rem] object-contain"
                            src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                            alt="Movie Poster"
                        />
                        <div className="font-medium ml-3 text-gray-700 text-sm">
                            {movieObj.title}
                        </div>
                    </td>
                    <td className="pl-6 py-4">{movieObj.vote_average}</td>
                    <td className="pl-6 py-4">{movieObj.popularity}</td>
                    <td className="pl-6 py-4">{genreids[movieObj.genre_ids[0]]}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Watchlist;