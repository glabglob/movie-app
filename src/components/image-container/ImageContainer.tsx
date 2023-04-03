import './imgaeContainer.scss';

interface ImageContainerProps {
    clazz?: string,
    imgSrc: string | undefined,
    alt: string
}

const ImageContainer: React.FC<ImageContainerProps> = (props: ImageContainerProps) => {
    return (
        <figure
            className={props.clazz ? `movie__card-img_container ${props.clazz}` : "movie__card-img_container"}
        >
            <img
                className="movie__card-img"
                src={props.imgSrc}
                alt={props.alt}
            />
        </figure>
    );
}

export default ImageContainer;