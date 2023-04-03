import { Helmet } from "react-helmet";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

import AppContainer from '../../container/AppContainer';
import SliderComponent from '../../slider/SliderComponent';
import TrendingHero from '../../trending-hero/TrendingHero';
import MovieCard from '../../movie-card/MovieCard';

import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { getTrendings, getInCinema, getPopular, getTopRatedTv, getTopRatedMovie } from '../../../slices/homePageSlice';

import './homePage.scss';

const HomePage: React.FC = () => {

    const dispatch = useAppDispatch();
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
        <>
            <Helmet>
                <meta name="description" content="Movie App" />
                <title>Movie App</title>
            </Helmet>
            <main>
                <AppContainer>
                    <section className="hero__trending">
                        <h2>Trending</h2>
                        {
                            (trendingsFetchStatus !== 'idle') ?
                                <BeatLoader
                                    color='#582904'
                                    cssOverride={{
                                        margin: '0 auto'
                                    }}
                                /> :
                                <SliderComponent
                                    autoplay={true}
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    autoplaySpeed={3500}
                                    clazz={'slick__hero'}
                                >
                                    {
                                        trendings.map((film, i) => (
                                            <TrendingHero
                                                image={`https://image.tmdb.org/t/p/original${film.cover}`}
                                                title={film.title}
                                                description={film.description}
                                                mediaType={film.mediaType}
                                                movieId={film.id}
                                                key={i}
                                            />
                                        ))
                                    }
                                </SliderComponent>
                        }
                    </section>
                    <section className='section cinema'>
                        <h2>In <span>cinema</span></h2>
                        {
                            (inCinemaFetchStatus !== 'idle') ?
                                <BeatLoader
                                    color='#582904'
                                    cssOverride={{
                                        margin: '0 auto'
                                    }}
                                /> :
                                <SliderComponent
                                    autoplay={true}
                                    clazz={'slick__cards'}
                                >
                                    {inCinema.map((film, i) => (
                                        <Link to={`/${film.mediaType}/${film.id}`} key={i}>
                                            <MovieCard
                                                image={(!film.poster) ?
                                                    `https://image.tmdb.org/t/p/original${film.cover}` :
                                                    `https://image.tmdb.org/t/p/original${film.poster}`}
                                                title={film.title}
                                            />
                                        </Link>
                                    ))}
                                </SliderComponent>
                        }
                    </section>
                    <section className='section popular'>
                        <h2>Whats <span>Popular</span></h2>
                        {
                            (popularFetchStatus !== 'idle') ?
                                <BeatLoader
                                    color='#582904'
                                    cssOverride={{
                                        margin: '0 auto'
                                    }}
                                /> :
                                <SliderComponent
                                    autoplay={true}
                                    clazz={'slick__cards'}
                                >
                                    {popular.map((film, i) => (
                                        <Link to={`/${film.mediaType}/${film.id}`} key={i}>
                                            <MovieCard
                                                image={(!film.poster) ?
                                                    `https://image.tmdb.org/t/p/original/${film.cover}` :
                                                    `https://image.tmdb.org/t/p/original${film.poster}`}
                                                title={film.title}
                                            />
                                        </Link>
                                    ))}
                                </SliderComponent>
                        }
                    </section>
                    <section className='section top_rated-tv'>
                        <h2>top rated <span>tv's</span></h2>
                        {
                            (topRatedTvFetchStatus !== 'idle') ?
                                <BeatLoader
                                    color='#582904'
                                    cssOverride={{
                                        margin: '0 auto'
                                    }}
                                /> :
                                <SliderComponent
                                    autoplay={true}
                                    clazz={'slick__cards'}
                                >
                                    {topRatedTv.map((film, i) => (
                                        <Link to={`/${film.mediaType}/${film.id}`} key={i}>
                                            <MovieCard
                                                image={(!film.poster) ?
                                                    `https://image.tmdb.org/t/p/original/${film.cover}` :
                                                    `https://image.tmdb.org/t/p/original${film.poster}`}
                                                title={film.title}
                                            />
                                        </Link>
                                    ))}
                                </SliderComponent>
                        }
                    </section>
                    <section className='section top_rated-movies'>
                        <h2>top rated <span>movies</span></h2>
                        {
                            (topRatedMovieFetchStatus !== 'idle') ?
                                <BeatLoader
                                    color='#582904'
                                    cssOverride={{
                                        margin: '0 auto'
                                    }}
                                /> :
                                <SliderComponent
                                    autoplay={true}
                                    clazz={'slick__cards'}
                                >
                                    {topRatedMovie.map((film, i) => (
                                        <Link to={`/${film.mediaType}/${film.id}`} key={i}>
                                            <MovieCard
                                                image={(!film.poster) ?
                                                    `https://image.tmdb.org/t/p/original/${film.cover}` :
                                                    `https://image.tmdb.org/t/p/original${film.poster}`}
                                                title={film.title}
                                            />
                                        </Link>
                                    ))}
                                </SliderComponent>
                        }

                    </section>
                </AppContainer>
            </main >
        </>
    );
}

export default HomePage;