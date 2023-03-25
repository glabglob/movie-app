import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/home-page/HomePage';

import MoviesPage from '../../pages/movies-page/MoviesPage';
import MoviePage from '../../pages/movie-page/MoviePage';

import TvsPage from '../../pages/tvs-page/TvsPage';
import TvPage from '../../pages/tv-page/TvPage';
import SeasonPage from '../../pages/season-page/SeasonPage';

import ActorsPage from '../../pages/actors-page/ActorsPage';
import ActorPage from '../../pages/actor-page/ActorPage';

import TrendingPage from '../../pages/trending-page/TrendingPage';

import SearchPage from '../../pages/search-page/SearchPage';

import './body.scss';

const Body: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>

            <Route path='/movies' element={<MoviesPage type='movies' />}></Route>
            <Route path='/movies/:id' element={<MoviePage type='movie' />}></Route>

            <Route path='/tvs' element={<TvsPage type='tvs' />}></Route>
            <Route path='/tvs/:id' element={<TvPage type='tv' />}></Route>
            <Route path="/tvs/:id/season/:seasonNumber" element={<SeasonPage type='season' />}></Route>

            <Route path='/actors' element={<ActorsPage type='actors' />}></Route>
            <Route path='/actors/:id' element={<ActorPage type='actor' />}></Route>

            <Route path='/trending' element={<TrendingPage type='trending' />}></Route>

            <Route path='/search' element={<SearchPage type='search' />}></Route>
        </Routes >
    );
}

export default Body; 