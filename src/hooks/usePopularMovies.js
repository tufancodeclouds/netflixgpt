import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../features/movies/moviesSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
                const data = await res.json()
                dispatch(addPopularMovies(data.results))
            } catch (error) {
                toast.error('Failed to fetch popular movies', {
                    position: 'top-right',
                    autoClose: 3000,
                });
            }
        })();

    }, [dispatch])
}

export default usePopularMovies;