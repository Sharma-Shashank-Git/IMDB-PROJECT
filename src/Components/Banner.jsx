import axios from "axios";
import { useEffect, useState } from "react";

const Banner = () => {
  const [bannerimage, setbannerimage] = useState("https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68");
  const [title, settitle] = useState("Placeholder Movie");
  
  useEffect(() => {
    axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1"
    )
    .then(function(res) {
        const movie = res.data.results[0];
        setbannerimage(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`);
        settitle(movie.original_title);
    })
    .catch((err) => {
      console.log(err);
    })
  },[])

  return (
    <div className={'h-[60vh] w-[100vw] bg-cover bg-center flex items-end'} 
    style={{backgroundImage: `url(${bannerimage})`}}>

        <div className='text-white text-3xl w-full text-center pb-3'>
          {title}
        </div>
    </div>
  )
}

export default Banner;