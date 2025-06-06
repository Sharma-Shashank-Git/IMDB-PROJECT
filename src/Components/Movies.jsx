import { useContext, useEffect } from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import { MovieContext } from './MovieContext';
import PaginationSlice from './Redux/PaginationSlice';
import { useDispatch, useSelector } from 'react-redux';
import fetchMiddleWare from './Redux/MovieMiddleWare';

const PaginationActions = PaginationSlice.actions;

const Movies = () => { 
  const {movies, error, loading} = useSelector((state) => state.MovieSlice);

  const {PageNo} = useSelector((state) => state.PaginationSlice);

  const dispatch = useDispatch();

  const {watchlist, addtowatchlist, removewatchlist} = useContext(MovieContext);

  const handlenext = () => {
    dispatch(PaginationActions.handleNext());
  }

  const handleprev = () => {
    dispatch(PaginationActions.handlePrevious());
  }

  useEffect(() => {
    dispatch(fetchMiddleWare(PageNo));
  },[PageNo])

  if(loading) {
    return (
      <div>
        <div className='text-4xl font-bold text-center m-5'>Loading...</div>
      </div>
    )
  }

  if(error) {
    return (
      <div>
        <div className='text-4xl font-bold text-center m-5'>Something went wrong!</div>
      </div>
    )
  }

  return (
    <div className='min-h-screen'>
      <div className='text-4xl font-bold text-center m-5'>Trending Movies</div>

        {/* MOVIES */}
        <div className='flex justify-evenly gap-8 flex-wrap'>
          {movies.map((movie, idx) => {
            return (<MovieCard key={idx} movieObj={movie} addtowatchlist={addtowatchlist} removewatchlist={removewatchlist} watchlist={watchlist} />)
          })}
        </div>

        {/* PAGINATION */}
        <Pagination nextpageFn={handlenext} prevpageFn={handleprev} pagenumber={PageNo}/>
    </div>
  )
}

export default Movies;