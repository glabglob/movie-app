import { Link } from "react-router-dom";
import ImageContainer from "../image-container/ImageContainer";

import './trendingHero.scss';

interface TrendingHeroProps {
    image: string,
    title: string,
    description: string,
    clazz?: string
    mediaType: string,
    movieId: number
}

const TrendingHero: React.FC<TrendingHeroProps> = (props: TrendingHeroProps) => {

    return (
        <section
            className="trendings__content"
        >
            <Link to={`/${props.mediaType}/${props.movieId}`}>
                <ImageContainer
                    clazz={'trendings__cover'}
                    imgSrc={props.image}
                    alt={props.title}
                />
                <article className="trendings__content-info">
                    <p className="trendings__content-title">
                        {props.title}
                    </p>
                    <p className='trendings__content-description'>
                        {props.description}
                    </p>
                </article>
            </Link>
        </section>
    );
}

export default TrendingHero;