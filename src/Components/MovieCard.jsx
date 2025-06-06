
const MovieCard = ({ movieObj, watchlist, addtowatchlist, removewatchlist }) => {

  function doesContain() {
    for (let i = 0; i < watchlist.length; i++) {
      if(watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div className={"h-72 rounded-lg w-48 bg-center justify-between flex-col bg-cover flex items-end hover:scale-110 duration-300"} style={{ backgroundImage:`url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})` }} >
      
      {doesContain() === false ? (
        <div onClick={() => addtowatchlist(movieObj)} className="justify-center m-2 text-xl bg-gray-700 rounded-2xl hover:cursor-pointer items-center">
          🤍
        </div>
      ) : (
        <div onClick={() => removewatchlist(movieObj)} className="justify-center m-2 text-xl bg-gray-700 rounded-2xl hover:cursor-pointer items-center">
          ❤️
        </div>
      )}

        <div className='text-white w-full text-center text-xl p-2 rounded-lg bg-gray-900'>
            {movieObj.title}
        </div>
    </div>
  )
}

export default MovieCard;