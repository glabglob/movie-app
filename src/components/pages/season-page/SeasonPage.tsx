import { MediaType } from '../../../types';
import { Film } from '../../../interfaces';

import { useEffect, useState } from 'react';

import AppContainer from '../../container/AppContainer';
import ImageContainer from '../../image-container/ImageContainer';

import './seasonPage.scss';

interface SeasonPageProps {
    type: MediaType
}

const SeasonPage: React.FC<SeasonPageProps> = (props: SeasonPageProps) => {

    const [film, setFilm] = useState<Film[]>([]);

    const getFilms = () => {
        const arr: Film[] = [];

        for (let i = 0; i < 12; i++) {
            arr.push({
                mediaType: props.type,
                id: i,
                title: 'Some Title',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nihil dolorum eaque nemo quibusdam atque deserunt nisi ad quae beatae aliquid, itaque dignissimos odit, nam voluptatem unde tempora dolore modi. Dolor eveniet, porro nulla consequuntur quis vitae culpa veritatis quas numquam voluptas, maxime corrupti quod velit eius. Aspernatur, iusto fugit.',
                cover: '',
                genreIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                poster: '',
                seasons: []
            })
        }
        setFilm(arr);
    }

    useEffect(() => {
        getFilms();
    }, []);

    return (
        <main>
            <section className="movie__hero">
                <ImageContainer
                    imgSrc={''}
                    alt={'Some title'}
                    clazz='movie__hero-img'
                />
            </section>
            <AppContainer>
                <section className="section movie__poster">
                    <ImageContainer
                        imgSrc={''}
                        alt={'Some title'}
                        clazz='poster'
                    />
                    <article className="movie__poster-info">
                        <h3 className="movie__poster-title">{'Some title'}</h3>
                        <p className="movie__poster-description">Season 1 - {film.length} episodes</p>
                    </article>
                </section>
                <section className="section movie__list">
                    {
                        film.map((film, i) => (
                            <div className="movie__list-item" key={i}>
                                <ImageContainer
                                    imgSrc={film.title}
                                    alt={film.title}
                                    clazz='movie__list-img'
                                />
                                <article className="movie__list-item_info">
                                    <h3 className='movie__list-title'>Episod 1</h3>
                                    <p className='movie__list-description'>{film.description}</p>
                                    <span className='movie__list-date'>Date of Open Air</span>
                                </article>
                            </div>
                        ))
                    }
                </section>
            </AppContainer>
        </main>
    );
}

export default SeasonPage;