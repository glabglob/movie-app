import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../utils/hooks/useAppSelector';
import { getSearchResult } from "../../slices/searchSlice";

import ImageContainer from '../image-container/ImageContainer';

import './serachBar.scss';

const SearchBar: React.FC = () => {

    const searchTimeout = useRef<any>('')

    const dispatch = useAppDispatch();
    const {
        searchResult
    } = useAppSelector(state => state.searchReducer);

    const navigate = useNavigate();
    const location = useLocation();
    const [params] = useSearchParams();

    const [isSearchFocused, setSearchFocus] = useState(false);
    const [pathname, setPathname] = useState('');
    const [keyword, setKeyword] = useState('');

    const pathnameRef = useRef('');
    const defaultKeyword = useRef('');
    const searchRef = useRef<HTMLInputElement>(null);

    const goToSearchPage = () => {
        if (keyword) {
            defaultKeyword.current = keyword;
            navigate(`/search?q=${keyword}`);
            setSearchFocus(false);
            searchRef.current?.blur();
        }
    }

    const setSearchTimeout = (query: string) => {
        clearTimeout(searchTimeout.current)
        searchTimeout.current = setTimeout(() => {
            dispatch(getSearchResult({ query: `${query}` }));
        }, 100);
    }

    const onSubmitHendler: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        goToSearchPage();
    }

    const initKeyword = () => {
        if (pathnameRef.current === '/search') {
            setKeyword(defaultKeyword.current);
        } else {
            setKeyword('');
        }
    }

    const onWindowClick = () => {
        setSearchFocus(false);
        initKeyword();
    }

    useEffect(() => {
        setPathname(location.pathname)
        pathnameRef.current = location.pathname
        defaultKeyword.current = params.get('q') || ''
        initKeyword()
        // eslint-disable-next-line
    }, [location.pathname])

    useEffect(() => {
        window.addEventListener('click', onWindowClick)

        return () => {
            window.removeEventListener('click', onWindowClick)
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setSearchTimeout(keyword);
        // eslint-disable-next-line
    }, [keyword]);

    return (
        <div className="header__navigation-search">
            <form className='header__navigation-form'
                onSubmit={onSubmitHendler}
            >
                <input className='header__navigation-input'
                    type="text"
                    placeholder='Search or jump to...'
                    name="q"
                    autoComplete='off'
                    value={keyword}
                    onInput={e => setKeyword(e.currentTarget.value)}
                    onClick={e => {
                        e.stopPropagation()
                        setSearchFocus(true)
                    }}
                />
            </form>
            {
                isSearchFocused ?
                    (<div className="search__result">
                        {
                            searchResult.map((movie, i) => (
                                <Link to={`/${movie.mediaType}/${movie.id}`} key={i}>
                                    <div className="search__result-content"

                                    >
                                        <ImageContainer
                                            clazz={'search__result-img'}
                                            imgSrc={
                                                (!movie.poster) ?
                                                    `https://image.tmdb.org/t/p/original${movie.cover}` :
                                                    `https://image.tmdb.org/t/p/original${movie.poster}`
                                            }
                                            alt={`${movie.title}`}
                                        />
                                        <article className="search__result-info">
                                            <p className="search__result-title">
                                                {movie.title}
                                            </p>
                                        </article>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>) : (' ')
            }
        </div>
    );
}

export default SearchBar;