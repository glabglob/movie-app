import { useNavigate } from 'react-router-dom';

import ldcp from './actor.jpg';

import './castCard.scss';


interface CastCardProps {
    onClick?: Function
    image: string,
    actorName: string,
    charName: string,
}

const CastCard: React.FC<CastCardProps> = (props: CastCardProps) => {

    const navigate = useNavigate();

    return (
        <div className="cast__card" onClick={() => (props.onClick ? props.onClick() : '')}>
            <figure className="cast__card-img_container">
                <img className='cast__card-img'
                    src={ldcp}
                    alt="Thumbnail"
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