import { useNavigate } from "react-router-dom";
import { Film } from "../../interfaces";

import tmbnl from './tmbnl.jpg';
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
        <div className="trendings__content" onClick={() => (props.onClick ? props.onClick() : '')}>
            <div className="trendings__content-img_container">
                <img className='trendings__content-img'
                    src={tmbnl}
                    alt="Thumbnail"
                />
            </div>
            <div className="trendings__content-info">
                <p className="trendings__content-title">{props.title}</p>
                <p className='trendings__content-description'>{props.description}</p>
            </div>
        </div>
    );
}

export default TrendingHero;