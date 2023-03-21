import Slick, { Settings } from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sliderComponent.scss';

interface SliderComponentProps extends Settings {
    isMovieCard?: boolean
    clazz?: string
}

const SliderComponent: React.FC<SliderComponentProps> = (props: SliderComponentProps) => {

    let settings: Settings = {
        ...props,
    };

    if (props.clazz === 'slick__cards') {
        settings = {
            slidesToShow: 5,
            slidesToScroll: 1,
            swipe: true,
            ...settings,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 321,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                }
            ]
        }
    }

    if (props.clazz === 'slick__scroll') {
        settings = {
            slidesToShow: 5,
            slidesToScroll: 1,
            swipeToSlide: true,
            infinite: true,
            autoplaySpeed: 2000,
            ...settings,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                }
            ]
        }
    }


    return (
        <Slick
            className={props.clazz}
            autoplaySpeed={5000}
            {...settings}
        >
            {props.children}
        </Slick>
    );
}

export default SliderComponent;