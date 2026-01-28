import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../features/movies/moviesSlice';

const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!movie_id) return;

        (async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, API_OPTIONS);
                const data = await res.json();
                const trailer = data.results.filter(video => video.type === "Trailer");                
                const key = trailer.length ? trailer[0]?.key : data.results[0]?.key;
                dispatch(addTrailerVideo(key))
            } catch (error) {
                toast.error('Failed to fetch video key', {
                    position: 'top-right',
                    autoClose: 3000,
                });
            }
        })();

    }, [movie_id, dispatch]);
}

export default useMovieTrailer;