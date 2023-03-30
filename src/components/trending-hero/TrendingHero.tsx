import ImageContainer from "../image-container/ImageContainer";

import './trendingHero.scss';

interface TrendingHeroProps {
    image: string,
    title: string,
    description: string,
    clazz?:string
}

const TrendingHero: React.FC<TrendingHeroProps> = (props: TrendingHeroProps) => {

    return (
        <section
            className="trendings__content"
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
        </section>
    );
}

export default TrendingHero;