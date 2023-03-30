import { MediaType } from '../../../types/types';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
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
        <main>
            <AppContainer>
                <section className="section movie__poster actor__poster">
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
                </section>
                <section className="section movie__list">
                    <h2 className='movie__list-heading'>Known For</h2>
                    {
                        knownFor.map((movie, i) => (
                            <div className="movie__list-item" key={i}>
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
                        ))
                    }
                </section>
            </AppContainer>
        </main>
    );
}

export default ActorPage;