import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import AppContainer from '../../container/AppContainer';
import SearchResult from '../../search-result/SearchResult';

import logo from './logo.png';
import './header.scss';

const Header: React.FC = () => {

    //smart header
    const [userScrollPosition, setUserScrollPosition] = useState(0);
    const [includeHide, setIncludeHide] = useState(false);
    const defaultOffset = 100;

    //menu
    const [menuActive, setMenuActive] = useState(false);

    //search
    const navigate = useNavigate();
    const location = useLocation();
    const [params, _] = useSearchParams();

    const [isSearchFocused, setSearchFocus] = useState(false);
    const [pathname, setPathname] = useState('')
    const [keyword, setKeyword] = useState('');

    const pathnameRef = useRef('');
    const defaultKeyword = useRef('');
    const searchRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        window.addEventListener('click', onWindowClick)

        return () => {
            window.removeEventListener('click', onWindowClick)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [userScrollPosition]);

    useEffect(() => {
        setPathname(location.pathname)
        pathnameRef.current = location.pathname
        defaultKeyword.current = params.get('q') || ''
        initKeyword()
    }, [location.pathname])

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

    const handleScroll = () => {
        const scrollPosition = document.documentElement.scrollTop;
        if (scrollPosition > userScrollPosition && !includeHide && scrollPosition > defaultOffset) {
            setIncludeHide(true);
        } else if (scrollPosition < userScrollPosition && includeHide) {
            setIncludeHide(false);
        }
        setUserScrollPosition(scrollPosition);
    }

    const handleMenuClick = () => {
        setMenuActive(!menuActive);
        document.body.classList.toggle('lock');
    }

    const handleLinkClick = () => {
        setMenuActive(false);
        document.body.classList.remove('lock');
    }

    return (

        <header className={`header ${includeHide ? 'hide-header' : ''}`}>
            <AppContainer>
                {/* logo img */}
                <NavLink to={'/'} className='header__logo'>
                    <img src={logo} alt="Logo" className='header__logo' />
                </NavLink>
                {/* burger menu */}
                <div className={`header__navigation-menu ${menuActive ? 'active-menu' : ''}`}
                    onClick={handleMenuClick}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* navigation */}
                <div className={`header__navigation ${menuActive ? 'active-menu' : ''}`}>
                    <ul className="header__navigation-list">
                        <li className='header__navigation-list_item'>
                            <NavLink to={'/movies'}
                                className='header__navigation-list_links'
                                onClick={handleLinkClick}
                            >movies
                            </NavLink>
                        </li>
                        <li className='header__navigation-list_item'>
                            <NavLink to={'/tv'}
                                className='header__navigation-list_links'
                                onClick={handleLinkClick}
                            >tv shows
                            </NavLink>
                        </li>
                        <li className='header__navigation-list_item'>
                            <NavLink to={'/actors'}
                                className='header__navigation-list_links'
                                onClick={handleLinkClick}
                            >actors
                            </NavLink>
                        </li>
                        <li className='header__navigation-list_item'>
                            <NavLink to={'/trending'}
                                className='header__navigation-list_links'
                                onClick={handleLinkClick}
                            >trending
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* search form */}
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
                            (<SearchResult keyword={keyword} goToSearchPage={goToSearchPage}></SearchResult>) : (' ')
                    }
                </div>
            </AppContainer>
        </header>

    );
}

export default Header;




