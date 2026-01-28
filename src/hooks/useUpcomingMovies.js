import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../features/movies/moviesSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
                const data = await res.json()
                dispatch(addUpcomingMovies(data.results))
                console.log(data.results);
                
            } catch (error) {
                toast.error('Failed to fetch upcoming movies', {
                    position: 'top-right',
                    autoClose: 3000,
                });
            }
        })();

    }, [dispatch])
}

export default useUpcomingMovies;
