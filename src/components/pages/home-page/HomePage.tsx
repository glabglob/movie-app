import { Film } from '../../../interfaces';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AppContainer from '../../container/AppContainer';
import SliderComponent from '../../slider/SliderComponent';
import TrendingHero from '../../trending-hero/TrendingHero';
import MovieCard from '../../movie-card/MovieCard';

import './homePage.scss';

const HomePage: React.FC = () => {

    const navigate = useNavigate();

    const [trendings, setTrendings] = useState<Film[]>([]);
    const [inCinema, setInCinema] = useState<Film[]>([]);
    const [popular, setPopular] = useState<Film[]>([]);
    const [topRatedTv, setTopRatedTv] = useState<Film[]>([]);
    const [topRatedMovie, setTopRatedMovie] = useState<Film[]>([]);


    const getItems = () => {
        const arr: Film[] = [];

        for (let i = 0; i < 5; i++) {
            arr.push({
                mediaType: 'movie',
                id: i,
                title: 'Some Title',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nihil dolorum eaque nemo quibusdam atque deserunt nisi ad quae beatae aliquid, itaque dignissimos odit, nam voluptatem unde tempora dolore modi. Dolor eveniet, porro nulla consequuntur quis vitae culpa veritatis quas numquam voluptas, maxime corrupti quod velit eius. Aspernatur, iusto fugit.',
                cover: '',
                genreIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                poster: '',
                seasons: []
            })
        }
        setTrendings(arr);
        setInCinema(arr);
        setPopular(arr);
        setTopRatedTv(arr);
        setTopRatedMovie(arr);
    }

    useEffect(() => {
        getItems();
    }, []);

    return (
        <main>
            <AppContainer>
                <section className="hero__trending">
                    <h2>Trengind</h2>
                    <SliderComponent
                        autoplay={true}
                        slidesToShow={1}
                        slidesToScroll={1}
                        clazz={'slick__hero'}
                    >
                        {
                            trendings.map((film, i) => (
                                <TrendingHero image='' title={film.title} description={film.description} key={i} />
                            ))
                        }
                    </SliderComponent>
                </section>
                <section className='section cinema'>
                    <h2>In cinema</h2>
                    <SliderComponent
                        autoplay={true}
                        clazz={'slick__cards'}
                    >
                        {inCinema.map((film, i) => (
                            <MovieCard image='' title={film.title} key={i} />
                        ))}
                    </SliderComponent>
                </section>
                <section className='section popular'>
                    <h2>Whats Popular</h2>
                    <SliderComponent
                        autoplay={true}
                        clazz={'slick__cards'}
                    >
                        {popular.map((film, i) => (
                            <MovieCard image='' title={film.title} key={i} />
                        ))}
                    </SliderComponent>
                </section>
                <section className='section top_rated-tv'>
                    <h2>top rated tv's</h2>
                    <SliderComponent
                        autoplay={true}
                        clazz={'slick__cards'}
                    >
                        {topRatedTv.map((film, i) => (
                            <MovieCard image='' title={film.title} key={i} />
                        ))}
                    </SliderComponent>
                </section>
                <section className='section top_rated-movies'>
                    <h2>top rated movies</h2>
                    <SliderComponent
                        autoplay={true}
                        clazz={'slick__cards'}
                    >
                        {topRatedMovie.map((film, i) => (
                            <MovieCard image='' title={film.title} key={i} />
                        ))}
                    </SliderComponent>
                </section>
            </AppContainer>
        </main >
    );
}

export default HomePage;