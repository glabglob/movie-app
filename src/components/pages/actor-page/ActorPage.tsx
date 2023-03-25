import { MediaType } from '../../../types';
import { Film } from '../../../interfaces';

import { useState, useEffect } from 'react';

import AppContainer from '../../container/AppContainer';
import ImageContainer from '../../image-container/ImageContainer';

import './actorPage.scss';

interface ActorPageProps {
    type: MediaType
}

const ActorPage: React.FC<ActorPageProps> = (props: ActorPageProps) => {

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
                    <article className="movie__poster-info actor__info">
                        <h3 className="movie__poster-title actor__name">{'Actor Name'}</h3>
                        <p className="movie__poster-sub__heading">Biography</p>
                        <p className='movie__poster-biography'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Aliquid nam corrupti labore rerum libero.
                            Alias sit numquam minus ad dolore quo accusamus, ipsa eos?
                            Esse nesciunt numquam eius temporibus distinctio,
                            rem laboriosam voluptates soluta repellat modi eos necessitatibus dolor molestias ullam sequi,
                            reiciendis, maiores harum repudiandae.
                            Amet reprehenderit consequuntur deleniti et officiis,
                            ipsam deserunt, distinctio saepe perspiciatis optio quia quod beatae ducimus sed fugit adipisci voluptatibus illum aliquam,
                            quis consequatur vitae maiores enim.
                            Dicta pariatur eaque atque,
                            magnam voluptatum error omnis sunt hic quo commodi optio nihil aperiam quod ducimus natus?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Aliquid nam corrupti labore rerum libero.
                            Alias sit numquam minus ad dolore quo accusamus, ipsa eos?
                            Esse nesciunt numquam eius temporibus distinctio,
                            rem laboriosam voluptates soluta repellat modi eos necessitatibus dolor molestias ullam sequi,
                            reiciendis, maiores harum repudiandae.
                            Amet reprehenderit consequuntur deleniti et officiis,
                            ipsam deserunt, distinctio saepe perspiciatis optio quia quod beatae ducimus sed fugit adipisci voluptatibus illum aliquam,
                            quis consequatur vitae maiores enim.
                            Dicta pariatur eaque atque,
                            magnam voluptatum error omnis sunt hic quo commodi optio nihil aperiam quod ducimus natus?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Aliquid nam corrupti labore rerum libero.
                            Alias sit numquam minus ad dolore quo accusamus, ipsa eos?
                            Esse nesciunt numquam eius temporibus distinctio,
                            rem laboriosam voluptates soluta repellat modi eos necessitatibus dolor molestias ullam sequi,
                            reiciendis, maiores harum repudiandae.
                            Amet reprehenderit consequuntur deleniti et officiis,
                            ipsam deserunt, distinctio saepe perspiciatis optio quia quod beatae ducimus sed fugit adipisci voluptatibus illum aliquam,
                            quis consequatur vitae maiores enim.
                            Dicta pariatur eaque atque,
                            magnam voluptatum error omnis sunt hic quo commodi optio nihil aperiam quod ducimus natus?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Aliquid nam corrupti labore rerum libero.
                            Alias sit numquam minus ad dolore quo accusamus, ipsa eos?
                            Esse nesciunt numquam eius temporibus distinctio,
                            rem laboriosam voluptates soluta repellat modi eos necessitatibus dolor molestias ullam sequi,
                            reiciendis, maiores harum repudiandae.
                            Amet reprehenderit consequuntur deleniti et officiis,
                            ipsam deserunt, distinctio saepe perspiciatis optio quia quod beatae ducimus sed fugit adipisci voluptatibus illum aliquam,
                            quis consequatur vitae maiores enim.
                            Dicta pariatur eaque atque,
                            magnam voluptatum error omnis sunt hic quo commodi optio nihil aperiam quod ducimus natus?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Aliquid nam corrupti labore rerum libero.
                            Alias sit numquam minus ad dolore quo accusamus, ipsa eos?
                            Esse nesciunt numquam eius temporibus distinctio,
                            rem laboriosam voluptates soluta repellat modi eos necessitatibus dolor molestias ullam sequi,
                            reiciendis, maiores harum repudiandae.
                            Amet reprehenderit consequuntur deleniti et officiis,
                            ipsam deserunt, distinctio saepe perspiciatis optio quia quod beatae ducimus sed fugit adipisci voluptatibus illum aliquam,
                            quis consequatur vitae maiores enim.
                            Dicta pariatur eaque atque,
                            magnam voluptatum error omnis sunt hic quo commodi optio nihil aperiam quod ducimus natus?
                             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Aliquid nam corrupti labore rerum libero.
                            Alias sit numquam minus ad dolore quo accusamus, ipsa eos?
                            Esse nesciunt numquam eius temporibus distinctio,
                            rem laboriosam voluptates soluta repellat modi eos necessitatibus dolor molestias ullam sequi,
                            reiciendis, maiores harum repudiandae.
                            Amet reprehenderit consequuntur deleniti et officiis,
                            ipsam deserunt, distinctio saepe perspiciatis optio quia quod beatae ducimus sed fugit adipisci voluptatibus illum aliquam,
                            quis consequatur vitae maiores enim.
                            Dicta pariatur eaque atque,
                            magnam voluptatum error omnis sunt hic quo commodi optio nihil aperiam quod ducimus natus?
                        </p>

                    </article>
                </section>
                <section className="section movie__list">
                    <h2 className='movie__list-heading'>Known For</h2>
                    {
                        film.map((film, i) => (
                            <div className="movie__list-item" key={i}>
                                <ImageContainer
                                    imgSrc={film.title}
                                    alt={film.title}
                                    clazz='movie__list-img'
                                />
                                <article className="movie__list-item_info">
                                    <h3 className='movie__list-title'>{film.title}</h3>
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

export default ActorPage;