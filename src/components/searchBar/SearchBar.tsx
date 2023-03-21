import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useRef } from 'react';

import { Film } from '../../interfaces';

import tmbnl from './tmbnl.jpg';
import './serachBar.scss';

const SearchBar: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [params, _] = useSearchParams();

    const [isSearchFocused, setSearchFocus] = useState(false);
    const [pathname, setPathname] = useState('');
    const [keyword, setKeyword] = useState('');

    const pathnameRef = useRef('');
    const defaultKeyword = useRef('');
    const searchRef = useRef<HTMLInputElement>(null);

    const [items, setItems] = useState<Film[]>([]);

    useEffect(() => {
        setPathname(location.pathname)
        pathnameRef.current = location.pathname
        defaultKeyword.current = params.get('q') || ''
        initKeyword()
    }, [location.pathname])

    useEffect(() => {
        window.addEventListener('click', onWindowClick)

        return () => {
            window.removeEventListener('click', onWindowClick)
        }
    }, [])

    const goToSearchPage = () => {
        if (keyword) {
            defaultKeyword.current = keyword
            navigate(`/search?q=${keyword}`)
            setSearchFocus(false)
            searchRef.current?.blur()
        }
    }

    const onSubmitHendler: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        goToSearchPage();
    }

    const initKeyword = () => {
        if (pathnameRef.current === '/search') {
            setKeyword(defaultKeyword.current)
        } else {
            setKeyword('')
        }
    }

    const onWindowClick = () => {
        setSearchFocus(false)
        initKeyword()
    }

    const getItems = () => {
        const arr: Film[] = [];

        for (let i = 0; i < 5; i++) {
            arr.push({
                mediaType: 'tv',
                id: i,
                title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nihil dolorum eaque nemo quibusdam atque deserunt nisi ad quae beatae aliquid, itaque dignissimos odit, nam voluptatem unde tempora dolore modi. Dolor eveniet, porro nulla consequuntur quis vitae culpa veritatis quas numquam voluptas, maxime corrupti quod velit eius. Aspernatur, iusto fugit.',
                description: '',
                cover: '',
                genreIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                poster: '',
                seasons: []
            })
        }
        setItems(arr);
    }

    useEffect(() => {
        getItems()
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
                            items.map((film, i) => (
                                <div className="search__result-content"
                                    key={i}
                                >
                                    <figure className="search__result-img_container">
                                        <img className='search__result-img'
                                            src={tmbnl}
                                            alt="Thumbnail"
                                        />
                                    </figure>
                                    <div className="search__result-info">
                                        <p className="search__result-title">{film.title}</p>
                                        <ul className='search__result-genres'>
                                            {
                                                film.genreIds.map(() => (
                                                    <li key={i}>item {i}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            items.length > 4 ? (
                                <button className='search__result-button'
                                    onClick={() => goToSearchPage()}
                                >
                                    More Results
                                </button>
                            ) : ('')
                        }
                    </div>) : (' ')
            }


        </div>
    );
}

export default SearchBar;