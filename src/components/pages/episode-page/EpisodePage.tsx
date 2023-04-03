import { MediaType } from '../../../utils/types/types';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import { Helmet } from 'react-helmet';

import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { getEpisode } from '../../../slices/seasonSlice';

import AppContainer from '../../container/AppContainer';
import ImageContainer from '../../image-container/ImageContainer';

import './episodePage.scss';

interface ActorPageProps {
    type: MediaType
}

const EpisodePage: React.FC<ActorPageProps> = (props: ActorPageProps) => {

    const { id, seasonNumber, episodeNumber } = useParams<any>();

    const dispatch = useAppDispatch();
    const {
        episodeFetchStatus,
        episode
    } = useAppSelector(state => state.seasonReducer);

    useEffect(() => {
        dispatch(getEpisode({ tvId: id, seasonId: seasonNumber, episodId: episodeNumber }));
    }, [id]);

    return (
        <>
            <Helmet>
                <meta name="description" content={`${episode.title}`} />
                <title>{episode.title}</title>
            </Helmet>
            <main>
                <AppContainer>
                    {
                        (episodeFetchStatus !== 'idle') ?
                            <GridLoader
                                color='#582904'
                                cssOverride={{
                                    margin: '0 auto',
                                    marginTop: '150px'
                                }}
                            /> :
                            <section className="section movie__poster episode__poster">

                                <div className="movie__list-item episode__poster">
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
                            </section>
                    }
                </AppContainer>
            </main>
        </>
    );
}

export default EpisodePage;

