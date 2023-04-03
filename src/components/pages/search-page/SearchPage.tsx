import { MediaType } from '../../../utils/types/types';

import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import { Helmet } from 'react-helmet';

import AppContainer from '../../container/AppContainer';
import ImageContainer from '../../image-container/ImageContainer';

import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { getSearchResult } from '../../../slices/searchSlice';

import './searchPage.scss';

interface SearchPageProps {
    type: MediaType | 'search'
}

const SearchPage: React.FC<SearchPageProps> = (props: SearchPageProps) => {

    const { search } = useLocation();

    const dispatch = useAppDispatch();
    const {
        serachResultFetchStatus,
        searchResult
    } = useAppSelector(state => state.searchReducer);

    useEffect(() => {
        dispatch(getSearchResult({ query: `${search.substring(3)}` }));
        // eslint-disable-next-line
    }, [search]);

    return (
        <>
            <Helmet>
                <meta name="description" content="Search page" />
                <title>Search results for:{search.substring(3).replace(/%20/g, ' ')}</title>
            </Helmet>
            <main>
                <section className='page__hero'>
                    <AppContainer>
                        <h2 className='page__hero-title'>Search result for: <span>{`${search.substring(3).replace(/%20/g, ' ')}`}</span></h2>
                    </AppContainer>
                </section>
                <AppContainer>
                    <section className="section movie__list search__list">
                        {
                            (serachResultFetchStatus !== 'idle') ?
                                <GridLoader
                                    color='#582904'
                                    cssOverride={{
                                        margin: '0 auto'
                                    }}
                                /> :
                                (searchResult.length === 0) ?
                                    <div className="no__results">
                                        <h2>No Results...</h2>
                                    </div> :
                                    searchResult.map((movie, i) => (
                                        <div className="movie__list-item-container" key={i}>
                                            <Link to={`/${movie.mediaType}/${movie.id}`} >
                                                <div className="movie__list-item" >
                                                    <ImageContainer
                                                        imgSrc={`https://image.tmdb.org/t/p/original${movie.poster}`}
                                                        alt={movie.title}
                                                        clazz='movie__list-img'
                                                    />
                                                    <article className="movie__list-item_info">
                                                        <h3 className='movie__list-title'>{movie.title}</h3>
                                                        <p className='movie__list-description'>{movie.description}</p>
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

export default SearchPage;