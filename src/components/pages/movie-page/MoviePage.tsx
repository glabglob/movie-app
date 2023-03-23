import { MediaType } from "../../../types";
import { Cast, Film } from "../../../interfaces";

import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import AppContainer from "../../container/AppContainer";
import SliderComponent from "../../slider/SliderComponent";
import ImageContainer from "../../image-container/ImageContainer";
import CastCard from "../../cast-card/CastCard";
import MovieCard from "../../movie-card/MovieCard";
import TrailerCard from "../../trailer-card/TrailerCard";

import './moviePage.scss';

interface MoviePageProps {
    mediaType: MediaType
}

const MoviePage: React.FC<MoviePageProps> = (props: MoviePageProps) => {

    const { params } = useParams();
    const [casts, setCasts] = useState<Cast[]>([]);
    const [trailers, setTrailers] = useState<Film[]>([]);
    const [recommendations, setRecommendations] = useState<Film[]>([]);

    const [film, setFilm] = useState<Film>({
        mediaType: props.mediaType,
        id: 0,
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        cover: '',
        genreIds: [1, 2, 3, 4, 5],
        poster: '',
        seasons: [
            {
                id: 1,
                seasonNumber: 1
            },
            {
                id: 2,
                seasonNumber: 2
            }, {
                id: 3,
                seasonNumber: 3
            }, {
                id: 4,
                seasonNumber: 4
            }, {
                id: 5,
                seasonNumber: 5
            }, {
                id: 6,
                seasonNumber: 6
            },

        ]
    });

    const getCasts = () => {
        const arr: Cast[] = [];

        for (let i = 0; i < 20; i++) {
            arr.push({
                id: i,
                actorName: "Leonardo DiCaprio",
                charName: "Jordan Belfort",
            })
        }
        setCasts(arr);
    }

    const getFilms = () => {
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
        setTrailers(arr);
        setRecommendations(arr);
    }


    useEffect(() => {
        getCasts();
        getFilms();
    }, []);

    return (
        <main>
            <section className="movie__hero">
                <ImageContainer
                    imgSrc={''}
                    alt={film.title}
                    clazz='movie__hero-img'
                />
            </section>
            <AppContainer>
                <section className="section movie__poster">
                    <ImageContainer
                        imgSrc={''}
                        alt={film.title}
                        clazz='poster'
                    />
                    <article className="movie__poster-info">
                        <h3 className="movie__poster-title">{film.title}</h3>
                        <ul className="movie__poster-genres">
                            {film.genreIds.map((genre, i) => (
                                <li key={i} className="movie__poster-genres_items">item {genre}</li>
                            ))}
                        </ul>
                        <p className="movie__poster-description">{film.description}</p>
                    </article>
                </section>
                <section className="section movie__casts">
                    <h2>casts</h2>
                    <SliderComponent
                        clazz={"slick__scroll"}
                        autoplay={true}
                    >
                        {
                            casts.map((cast, i) => (
                                <CastCard image='' actorName={cast.actorName} charName={cast.charName} key={i} />
                            ))
                        }
                    </SliderComponent>
                </section>
                <section className="section movie__trailers">
                    <h2>trailers</h2>
                    <SliderComponent
                        clazz={"slick__scroll"}
                        autoplay={false}
                    >
                        {
                            trailers.map((trailers, i) => (
                                <TrailerCard clazz="" image='' title={trailers.title} key={i} />
                            ))
                        }
                    </SliderComponent>
                </section>
                <section className="section movie__seasons">
                    <h2>seasons</h2>
                    <SliderComponent
                        autoplay={false}
                        swipe={true}
                        clazz={'slick__cards'}
                        infinite={film.seasons.length < 5 ? false : true}
                    >
                        {
                            film.seasons.map((seasons, i) => (
                                <MovieCard clazz='' image='' title={`Season ${seasons.seasonNumber}`} key={i} />
                            ))
                        }
                    </SliderComponent>
                </section>
                <section className="section movie__recommendations">
                    <h2>recommendations</h2>
                    <SliderComponent
                        autoplay={false}
                        swipe={true}
                        clazz={'slick__cards'}
                    >
                        {
                            recommendations.map((recommendations, i) => (
                                <MovieCard image='' title={recommendations.title} key={i} />
                            ))
                        }
                    </SliderComponent>
                </section>
            </AppContainer>
        </main >
    );
}

export default MoviePage;