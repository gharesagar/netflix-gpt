import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {

  const dispatch = useDispatch(); 

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING, API_OPTIONS);

    const json = await data.json();
    console.log(json);

    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    getNowPlayingMovies()
  }, [])
}

export default useNowPlayingMovies;