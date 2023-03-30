import { Routes, Route } from 'react-router-dom';

import ScrollToTop from '../../scroll-to-top/ScrollToTop';

import HomePage from '../../pages/home-page/HomePage';

import MoviesPage from '../../pages/movies-page/MoviesPage';
import MoviePage from '../../pages/movie-page/MoviePage';

import TvsPage from '../../pages/tvs-page/TvsPage';
import TvPage from '../../pages/tv-page/TvPage';
import SeasonPage from '../../pages/season-page/SeasonPage';

import ActorsPage from '../../pages/actors-page/ActorsPage';
import ActorPage from '../../pages/actor-page/ActorPage';

import SearchPage from '../../pages/search-page/SearchPage';

import './body.scss';

const Body: React.FC = () => {
    return (
        <ScrollToTop>
            <Routes>
                <Route path='/home' element={<HomePage />}></Route>

                <Route path='/movie' element={<MoviesPage type='movie' />}></Route>
                <Route path='/movie/:id' element={<MoviePage type='movie' />}></Route>

                <Route path='/tv' element={<TvsPage type='tv' />}></Route>
                <Route path='/tv/:id' element={<TvPage type='tv' />}></Route>
                <Route path="/tv/:id/season/:seasonNumber" element={<SeasonPage type='season' />}></Route>
                {/* <Route path='/tv/:id/season/:seasonNumber' element={<PopularPage type='episod' />}></Route> */}

                <Route path='/actors' element={<ActorsPage type='actors' />}></Route>
                <Route path='/person/:id' element={<ActorPage type='person' />}></Route>

                <Route path='/search' element={<SearchPage type='search' />}></Route>
            </Routes>
        </ScrollToTop>
    );
}

export default Body; 