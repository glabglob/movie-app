import { MediaType } from "../../../utils/types/types";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { Helmet } from "react-helmet";

import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { getMovieDetail, getCast, getTrailers, getRecommendations } from "../../../slices/detailsPageSlice";

import AppContainer from "../../container/AppContainer";
import SliderComponent from "../../slider/SliderComponent";
import ImageContainer from "../../image-container/ImageContainer";
import CastCard from "../../cast-card/CastCard";
import MovieCard from "../../movie-card/MovieCard";
import TrailerCard from "../../trailer-card/TrailerCard";
import TrailerModal from "../../trailer-modal/TrailerModal";

interface TvPageProps {
    type: MediaType
}

const TvPage: React.FC<TvPageProps> = (props: TvPageProps) => {

    const [trailerSrc, setTrailerSrc] = useState('');

    const { id } = useParams<any>();

    const dispatch = useAppDispatch();
    const {
        movieDetailFetchStatus,
        castFetchStatus,
        trailersFetchStatus,
        recommendationsFetchStatus,
        movie,
        cast,
        trailers,
        recommendations
    } = useAppSelector(state => state.detailPageReducer);

    useEffect(() => {
        dispatch(getMovieDetail({ mediaType: props.type, movieId: `${id}` }));
        dispatch(getCast({ mediaType: props.type, movieId: `${id}` }));
        dispatch(getTrailers({ mediaType: props.type, movieId: `${id}` }));
        dispatch(getRecommendations({ mediaType: props.type, movieId: `${id}` }));
        // eslint-disable-next-line
    }, [id]);

    const playTrailer = async (key: string) => {
        setTrailerSrc(`https://www.youtube.com/embed/${key}?autoplay=1`);
    };

    return (
        <>
            <Helmet>
                <meta name="description" content={`${movie.title} page`} />
                <title>{movie.title}</title>
            </Helmet>
            <main>
                <TrailerModal
                    onHide={() => setTrailerSrc('')}
                    videoId={`${trailerSrc}`}
                ></TrailerModal>
                <section className="movie__hero">
                    <ImageContainer
                        imgSrc={
                            (!movie.cover) ?
                                `https://image.tmdb.org/t/p/original${movie.poster}` :
                                `https://image.tmdb.org/t/p/original${movie.cover}`
                        }
                        alt={`${movie.title}`}
                        clazz='movie__hero-img'
                    />
                </section>
                <AppContainer>
                    <section className="section movie__poster">
                        <ImageContainer
                            imgSrc={
                                (!movie.poster) ?
                                    `https://image.tmdb.org/t/p/original${movie.cover}` :
                                    `https://image.tmdb.org/t/p/original${movie.poster}`
                            }
                            alt={`${movie.title}`}
                            clazz='poster'
                        />
                        <article className="movie__poster-info">
                            <h3 className="movie__poster-title">{movie.title}</h3>
                            <ul className="movie__poster-genres">
                                {
                                    (!movie.genres) ? '' : (movie.genres.map((genre, i) => (
                                        <li key={i} className="movie__poster-genres_items">{genre.name}</li>
                                    )))
                                }
                            </ul>
                            <p className="movie__poster-description">{movie.description}</p>
                        </article>
                    </section>
                    {
                        (cast.length === 0) ? '' :
                            <section className="section movie__casts">
                                <h2>top casts</h2>
                                {
                                    (castFetchStatus !== 'idle') ?
                                        <BeatLoader
                                            color='#582904'
                                            cssOverride={{
                                                margin: '0 auto'
                                            }}
                                        /> :
                                        <SliderComponent
                                            clazz={"slick__scroll"}
                                            autoplay={true}
                                            infinite={(cast.length <= 5) ? false : true}
                                        >
                                            {
                                                cast.map((cast, i) => (
                                                    <Link to={`/person/${cast.id}`} key={i}>
                                                        <CastCard
                                                            image={`https://image.tmdb.org/t/p/original${cast.cover}`}
                                                            actorName={cast.name}
                                                            charName={cast.charName}
                                                            alt={`${cast.name}`}
                                                        />
                                                    </Link>
                                                ))
                                            }
                                        </SliderComponent>
                                }
                            </section>
                    }
                    {
                        (trailers.length === 0) ? '' :
                            <section className="section movie__trailers">
                                <h2>trailers</h2>
                                {
                                    (trailersFetchStatus !== 'idle') ?
                                        <BeatLoader
                                            color='#582904'
                                            cssOverride={{
                                                margin: '0 auto'
                                            }}
                                        /> :
                                        <SliderComponent
                                            clazz={"slick__scroll"}
                                            autoplay={false}
                                            infinite={(trailers.length <= 5) ? false : true}
                                        >
                                            {
                                                trailers.map((trailers, i) => (
                                                    <TrailerCard
                                                        image={`https://img.youtube.com/vi/${trailers.key}/mqdefault.jpg`}
                                                        title={''}
                                                        key={i}
                                                        onClick={() => playTrailer(trailers.key)}
                                                    />
                                                ))
                                            }
                                        </SliderComponent>
                                }
                            </section>
                    }
                    {
                        (movie.seasons.length === 0) ? '' :
                            <section className="section movie__seasons">
                                <h2>seasons</h2>
                                {
                                    (movieDetailFetchStatus !== 'idle') ?
                                        <BeatLoader
                                            color='#582904'
                                            cssOverride={{
                                                margin: '0 auto'
                                            }}
                                        /> :
                                        <SliderComponent
                                            autoplay={false}
                                            swipe={true}
                                            clazz={'slick__cards'}
                                            infinite={(movie.seasons.length <= 5) ? false : true}
                                        >
                                            {
                                                movie.seasons.map((seasons, i) => (
                                                    <Link to={`/tv/${id}/season/${seasons.seasonNumber}`} key={i}>
                                                        <MovieCard
                                                            image={`https://image.tmdb.org/t/p/original${seasons.poster}`}
                                                            title={`${seasons.title}`}

                                                        />
                                                    </Link>

                                                ))
                                            }
                                        </SliderComponent>
                                }
                            </section>
                    }
                    {
                        (recommendations.length === 0) ? '' :
                            <section className="section movie__recommendations">
                                <h2>recommendations</h2>
                                {
                                    (recommendationsFetchStatus !== 'idle') ?
                                        <BeatLoader
                                            color='#582904'
                                            cssOverride={{
                                                margin: '0 auto'
                                            }}
                                        /> :
                                        <SliderComponent
                                            autoplay={false}
                                            swipe={true}
                                            clazz={'slick__cards'}
                                            infinite={(recommendations.length <= 5) ? false : true}
                                        >
                                            {
                                                recommendations.map((rec, i) => (
                                                    <Link to={`/${rec.mediaType}/${rec.id}`} key={i}>
                                                        <MovieCard
                                                            image={
                                                                (!rec.poster) ?
                                                                    `https://image.tmdb.org/t/p/original${rec.cover}` :
                                                                    `https://image.tmdb.org/t/p/original${rec.poster}`
                                                            }
                                                            title={rec.title}
                                                        />
                                                    </Link>
                                                ))
                                            }
                                        </SliderComponent>
                                }

                            </section>
                    }
                </AppContainer>
            </main>
        </>
    );
}

export default TvPage;