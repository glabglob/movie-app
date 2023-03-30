import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import AppContainer from '../../container/AppContainer';
import SearchBar from '../../searchBar/SearchBar';

import logo from './logo.png';
import './header.scss';

const Header: React.FC = () => {

    //smart header
    const [userScrollPosition, setUserScrollPosition] = useState(0);
    const [includeHide, setIncludeHide] = useState(false);
    const defaultOffset = 100;

    //menu
    const [menuActive, setMenuActive] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [userScrollPosition]);

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
                <NavLink to={'/home'} className='header__logo'>
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
                <nav className={`header__navigation ${menuActive ? 'active-menu' : ''}`}>
                    <ul className="header__navigation-list">
                        <li className='header__navigation-list_item'>
                            <NavLink to={'/movie'}
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
                    </ul>
                </nav>
                {/* search form */}
                <SearchBar />
            </AppContainer>
        </header>

    );
}

export default Header;




