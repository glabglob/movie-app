import { Film } from "../../interfaces";

import { useNavigate } from "react-router-dom";

import ImageContainer from "../image-container/ImageContainer";

import './trendingHero.scss';

interface TrendingHeroProps {
    onClick?: Function,
    image: string,
    title: string,
    description: string
}

const TrendingHero: React.FC<TrendingHeroProps> = (props: TrendingHeroProps) => {

    const navigate = useNavigate();

    return (
        <div
            className="trendings__content"
            onClick={() => (props.onClick ? props.onClick() : '')}
        >
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
        </div>
    );
}

export default TrendingHero;