import ImageContainer from '../image-container/ImageContainer';

import './movieCard.scss';

interface MovieCardProps {
    image: string,
    title: string,
    clazz?: string,
}

const MovieCard: React.FC<MovieCardProps> = (props: MovieCardProps) => {

    return (
        <div className={(props.clazz ? `movie__card  ${props.clazz}` : 'movie__card ')}>
            <ImageContainer
                clazz='movie__cover'
                imgSrc={props.image}
                alt={props.title}
            />
            <h3 className="movie__card-title ">{props.title}</h3>
        </div >
    );
}

export default MovieCard;

