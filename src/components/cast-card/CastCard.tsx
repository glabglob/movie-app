import './castCard.scss';

interface CastCardProps {
    clazz?: string
    image: string,
    actorName: string,
    charName: string,
    alt?: string
}

const CastCard: React.FC<CastCardProps> = (props: CastCardProps) => {
    return (
        <div className={(props.clazz ? `cast__card ${props.clazz}` : 'cast__card')} >
            <figure className="cast__card-img_container">
                <img className='cast__card-img'
                    src={props.image}
                    alt={props.alt}
                />
                <figcaption className="cast__card-info">
                    <p className="cast__card-actorName">{props.actorName}</p>
                    <p className='cast__card-charName'>{props.charName}</p>
                </figcaption>
            </figure>
        </div>
    );
}

export default CastCard;