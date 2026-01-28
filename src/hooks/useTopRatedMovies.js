import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedMovies } from '../features/movies/moviesSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
                const data = await res.json()
                dispatch(addTopRatedMovies(data.results))
            } catch (error) {
                toast.error('Failed to fetch top rated movies', {
                    position: 'top-right',
                    autoClose: 3000,
                });
            }
        })();

    }, [dispatch])
}

export default useTopRatedMovies;