import { MediaType } from '../../../utils/types/types';

import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BeatLoader, GridLoader } from 'react-spinners';
import { Helmet } from 'react-helmet';

import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { getKnownFor, getActorDetails } from "../../../slices/actorPageSlice";

import AppContainer from '../../container/AppContainer';
import ImageContainer from '../../image-container/ImageContainer';

import './actorPage.scss';

interface ActorPageProps {
    type: MediaType
}

const ActorPage: React.FC<ActorPageProps> = (props: ActorPageProps) => {

    const { id } = useParams<any>();

    const dispatch = useAppDispatch();
    const {
        knownForFetchStatus,
        actorDetailsFetchStatus,
        knownFor,
        actorDetails
    } = useAppSelector(state => state.actorPageReducer);

    useEffect(() => {
        dispatch(getKnownFor({ personId: `${id}` }));
        dispatch(getActorDetails({ personId: `${id}` }));

    }, [id]);

    return (
        <>
            <Helmet>
                <meta name="description" content={`${actorDetails.name} page`} />
                <title>{actorDetails.name}</title>
            </Helmet>
            <main>
                <AppContainer>
                    {
                        (actorDetailsFetchStatus !== 'idle') ?
                            <GridLoader
                                color='#582904'
                                cssOverride={{
                                    margin: '0 auto',
                                    marginTop: '150px'
                                }}
                            /> :
                            <section className="section movie__poster actor__poster">
                                <div className="poster__container">
                                    <ImageContainer
                                        imgSrc={`https://image.tmdb.org/t/p/original${actorDetails.poster}`}
                                        alt={`${actorDetails.name}`}
                                        clazz='poster'
                                    />
                                    <article className="movie__poster-info actor__info">
                                        <h3 className="movie__poster-title actor__name">{actorDetails.name}</h3>
                                        <p className="movie__poster-sub__heading">Biography</p>
                                        <p className='movie__poster-biography'>
                                            {actorDetails.biography}
                                        </p>
                                    </article>
                                </div>
                            </section>
                    }
                    {
                        (knownFor.length === 0) ? '' :
                            <section className="section movie__list">
                                <h2 className='movie__list-heading'>Known For</h2>
                                {
                                    (knownForFetchStatus !== 'idle') ?
                                        <BeatLoader
                                            color='#582904'
                                            cssOverride={{
                                                margin: '0 auto'
                                            }}
                                        /> :
                                        knownFor.map((movie, i) => (
                                            <div className="movie__list-item-container" key={i}>
                                                <Link to={`/${movie.mediaType}/${movie.id}`}>
                                                    <div className="movie__list-item">
                                                        <ImageContainer
                                                            imgSrc={
                                                                (movie.poster === undefined || movie.poster === null) ?
                                                                    `https://image.tmdb.org/t/p/original${movie.cover}` :
                                                                    `https://image.tmdb.org/t/p/original${movie.poster}`
                                                            }
                                                            alt={`${movie.title}`}
                                                            clazz='movie__list-img'
                                                        />
                                                        <article className="movie__list-item_info">
                                                            <h3 className='movie__list-title'>{movie.title}</h3>
                                                            <p className='movie__list-description'>{movie.description}</p>
                                                            <span className='movie__list-date'>{movie.date}</span>
                                                        </article>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))
                                }
                            </section>
                    }

                </AppContainer>
            </main>
        </>
    );
}

export default ActorPage;