import { Film } from '../../interfaces';

import tmbnl from './tmbnl.jpg';

import './movieCard.scss';


interface MovieCardProps {
    film: Film
}

const MovieCard: React.FC<MovieCardProps> = (props: MovieCardProps) => {
    return (
        <div className="movie__card">
            <div className="movie__card-img_container">
                <img className='movie__card-img'
                    src={tmbnl}
                    alt="Thumbnail"
                />
            </div>
            <div className="movie__card-info">
                <h3 className="movie__card-title">{props.film.title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;