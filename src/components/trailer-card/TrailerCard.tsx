import ImageContainer from "../image-container/ImageContainer"


import './trailerCard.scss';

interface TrailerCardProps {
    onClick?: Function
    image: string,
    title: string,
    clazz?: string
}

const TrailerCard: React.FC<TrailerCardProps> = (props: TrailerCardProps) => {
    return (
        <div className={(props.clazz ? `trailer__card ${props.clazz}` : 'trailer__card')} onClick={() => (props.onClick ? props.onClick() : '')}>
            <ImageContainer
                clazz='movie__cover trailer__cover'
                imgSrc={props.image}
                alt={props.title}
            />
        </div >
    );
}

export default TrailerCard;