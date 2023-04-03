import { MediaType } from '../../../utils/types/types';

import { Link, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { Helmet } from 'react-helmet';

import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { getSeasons } from '../../../slices/seasonSlice';

import AppContainer from '../../container/AppContainer';
import ImageContainer from '../../image-container/ImageContainer';

import './seasonPage.scss';

interface SeasonPageProps {
    type: MediaType
}

const SeasonPage: React.FC<SeasonPageProps> = (props: SeasonPageProps) => {

    const { id, seasonNumber } = useParams<any>();

    const dispatch = useAppDispatch();
    const {
        seasonFetchStatus,
        season
    } = useAppSelector(state => state.seasonReducer);

    useEffect(() => {
        dispatch(getSeasons({ mediaType: 'tv', tvId: `${id}`, seasonId: `${seasonNumber}` }));
        // eslint-disable-next-line
    }, [seasonNumber, id]);

    return (
        <>
            <Helmet>
                <meta name="description" content={`${season.title} page`} />
                <title>{season.title}</title>
            </Helmet>
            <main>
                <section className="movie__hero">
                    <ImageContainer
                        imgSrc={`https://image.tmdb.org/t/p/original${season.poster}`}
                        alt={`${season.title}`}
                        clazz='movie__hero-img'
                    />
                </section>
                <AppContainer>
                    <section className="section movie__poster">
                        <ImageContainer
                            imgSrc={`https://image.tmdb.org/t/p/original${season.poster}`}
                            alt={`${season.title}`}
                            clazz='poster'
                        />
                        <article className="movie__poster-info">
                            <h3 className="movie__poster-title">{season.title}</h3>
                            <p className="movie__poster-description">Season 1 - {season.episodes?.length} episodes</p>
                        </article>
                    </section>
                    <section className="section movie__list">
                        {
                            (seasonFetchStatus !== 'idle') ?
                                <BeatLoader
                                    color='#582904'
                                    cssOverride={{
                                        margin: '0 auto'
                                    }}
                                /> :
                                season.episodes?.map((episode, i) => (
                                    <div className="movie__list-item-container" key={i}>
                                        <Link to={`/tv/${id}/season/${seasonNumber}/episode/${episode.episodeNumber}`}>
                                            <div className="movie__list-item">
                                                <ImageContainer
                                                    imgSrc={`https://image.tmdb.org/t/p/original${episode.poster}`}
                                                    alt={`${episode.title}`}
                                                    clazz='movie__list-img'
                                                />
                                                <article className="movie__list-item_info">
                                                    <h3 className='movie__list-title'>Episode <span>{episode.episodeNumber}</span></h3>
                                                    <h3 className='movie__list-title'>{episode.title}</h3>
                                                    <p className='movie__list-description'>{episode.description}</p>
                                                    <span className='movie__list-date'>{episode.date}</span>
                                                </article>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                        }
                    </section>
                </AppContainer>
            </main>
        </>
    );
}

export default SeasonPage;