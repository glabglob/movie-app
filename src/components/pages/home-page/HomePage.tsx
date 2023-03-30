import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { getTrendings, getInCinema, getPopular, getTopRatedTv, getTopRatedMovie } from '../../../slices/homePageSlice';

import AppContainer from '../../container/AppContainer';
import SliderComponent from '../../slider/SliderComponent';
import TrendingHero from '../../trending-hero/TrendingHero';
import MovieCard from '../../movie-card/MovieCard';

import './homePage.scss';

const HomePage: React.FC = () => {

    const dispatch = useAppDispatch();
    // status is for spinners
    const {
        trendingsFetchStatus,
        inCinemaFetchStatus,
        popularFetchStatus,
        topRatedTvFetchStatus,
        topRatedMovieFetchStatus,
        trendings,
        inCinema,
        popular,
        topRatedTv,
        topRatedMovie
    } = useAppSelector(state => state.homePageReducer);

    useEffect(() => {
        dispatch(getTrendings());
        dispatch(getInCinema('movie'));
        dispatch(getPopular());
        dispatch(getTopRatedTv('tv'));
        dispatch(getTopRatedMovie('movie'));
        // eslint-disable-next-line
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
                        autoplaySpeed={3500}
                        clazz={'slick__hero'}
                    >
                        {
                            trendings.map((film, i) => (
                                <Link to={`/${film.mediaType}/${film.id}`} key={i}>
                                    <TrendingHero
                                        image={`https://image.tmdb.org/t/p/original${film.cover}`}
                                        title={film.title}
                                        description={film.description}
                                    />
                                </Link>
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
                            <Link to={`/${film.mediaType}/${film.id}`} key={i}>
                                <MovieCard
                                    image={(film.poster === null || film.poster === undefined) ?
                                        `https://image.tmdb.org/t/p/original${film.cover}` :
                                        `https://image.tmdb.org/t/p/original${film.poster}`}
                                    title={film.title}
                                />
                            </Link>
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
                            <Link to={`/${film.mediaType}/${film.id}`} key={i} >

                                <MovieCard

                                    image={(film.poster === null || film.poster === undefined) ?
                                        `https://image.tmdb.org/t/p/original/${film.cover}` :
                                        `https://image.tmdb.org/t/p/original${film.poster}`}
                                    title={film.title}

                                />
                            </Link>
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
                            <Link to={`/${film.mediaType}/${film.id}`} key={i}>
                                <MovieCard
                                    image={(film.poster === null || film.poster === undefined) ?
                                        `https://image.tmdb.org/t/p/original${film.cover}` :
                                        `https://image.tmdb.org/t/p/original${film.poster}`}
                                    title={film.title}
                                />
                            </Link>
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
                            <Link to={`/${film.mediaType}/${film.id}`} key={i}>
                                <MovieCard
                                    image={(film.poster === null || film.poster === undefined) ?
                                        `https://image.tmdb.org/t/p/original${film.cover}` :
                                        `https://image.tmdb.org/t/p/original${film.poster}`}
                                    title={film.title}
                                />
                            </Link>
                        ))}
                    </SliderComponent>
                </section>
            </AppContainer>
        </main >
    );
}

export default HomePage;