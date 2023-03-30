import { MediaType } from '../../../types/types';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import AppContainer from '../../container/AppContainer';
import ImageContainer from '../../image-container/ImageContainer';

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
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
    }, []);

    return (
        <main>
            <section className='page__hero'>
                <AppContainer>
                    <h2 className='page__hero-title search-page'>{`Search result for ${search.substring(3).replace(/%20/g, ' ')}`}</h2>
                </AppContainer>
            </section>
            <AppContainer>
                <section className="section movie__list search__list">
                    {
                        searchResult.map((movie, i) => (
                            <div className="movie__list-item" key={i}>
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
                        ))
                    }
                </section>
            </AppContainer>
        </main>
    );
}

export default SearchPage;