import { useNavigate } from 'react-router-dom';

import trlrs from './trailer.jpg';
import tmbnl from './tmbnl.jpg';

import './movieCard.scss';


interface MovieCardProps {
    onClick?: Function
    image: string,
    title: string,
    clazz?: string
}

const MovieCard: React.FC<MovieCardProps> = (props: MovieCardProps) => {

    const navigate = useNavigate();

    return (
        <div className={(props.clazz ? `movie__card ${props.clazz}` : 'movie__card')} onClick={() => (props.onClick ? props.onClick() : '')}>
            <figure className="movie__card-img_container">
                <img className='movie__card-img'
                    src={(props.clazz === 'trailers' ? trlrs : tmbnl)}
                    alt="Thumbnail"
                />
                <figcaption className="movie__card-info">
                    <h3 className="movie__card-title">{props.title}</h3>
                </figcaption>
            </figure>
        </div>
    );
}

export default MovieCard;