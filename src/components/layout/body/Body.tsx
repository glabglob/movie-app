import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GridLoader } from 'react-spinners';

import ScrollToTop from '../../scroll-to-top/ScrollToTop';

import './body.scss';

import '../../pages/home-page/homePage.scss';
import '../../pages/movies-page/moviesPage.scss';
import '../../pages/movie-page/moviePage.scss';
import '../../pages/season-page/seasonPage.scss';
import '../../pages/episode-page/episodePage.scss';
import '../../pages/actor-page/actorPage.scss';
import '../../pages/search-page/searchPage.scss';
import '../../pages/404-page/notFoundPage.scss';

const HomePage = lazy(() => import('../../pages/home-page/HomePage'));
const MoviesPage = lazy(() => import('../../pages/movies-page/MoviesPage'));
const MoviePage = lazy(() => import('../../pages/movie-page/MoviePage'));
const TvsPage = lazy(() => import('../../pages/tvs-page/TvsPage'));
const TvPage = lazy(() => import('../../pages/tv-page/TvPage'));
const SeasonPage = lazy(() => import('../../pages/season-page/SeasonPage'));
const EpisodePage = lazy(() => import('../../pages/episode-page/EpisodePage'));
const ActorsPage = lazy(() => import('../../pages/actors-page/ActorsPage'));
const ActorPage = lazy(() => import('../../pages/actor-page/ActorPage'));
const SearchPage = lazy(() => import('../../pages/search-page/SearchPage'));
const NotFoundPage = lazy(() => import('../../pages/404-page/NotFoundPage'));


const Body: React.FC = () => {
    return (
        <ScrollToTop>
            <Suspense fallback={
                <div className='spinner__container'>
                    <GridLoader className='spinner' color=' #580100' />
                </div>
            }>
                <Routes>
                    <Route path='/movie-app' element={<HomePage />}></Route>

                    <Route path='/movie' element={<MoviesPage type='movie' />}></Route>
                    <Route path='/movie/:id' element={<MoviePage type='movie' />}></Route>

                    <Route path='/tv' element={<TvsPage type='tv' />}></Route>
                    <Route path='/tv/:id' element={<TvPage type='tv' />}></Route>
                    <Route path="/tv/:id/season/:seasonNumber" element={<SeasonPage type='season' />}></Route>
                    <Route path='/tv/:id/season/:seasonNumber/episode/:episodeNumber' element={<EpisodePage type='episod' />}></Route>

                    <Route path='/actors' element={<ActorsPage type='actors' />}></Route>
                    <Route path='/person/:id' element={<ActorPage type='person' />}></Route>

                    <Route path='/search' element={<SearchPage type='search' />}></Route>

                    <Route path='/*' element={<NotFoundPage />}></Route>
                </Routes>
            </Suspense>
        </ScrollToTop >
    );
}

export default Body;