import { Routes, Route } from 'react-router-dom';

import CatalogPage from '../../pages/catalog-page/CatalogPage';
import HomePage from '../../pages/home-page/HomePage';
import MoviePage from '../../pages/movie-page/MoviePage';

import './body.scss';

const Body: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/movies' element={<CatalogPage type='movie' />}></Route>
            <Route path='/tv' element={<CatalogPage type='tv' />}></Route>
            <Route path='/search' element={<CatalogPage type='search' />}></Route>
            <Route path='/movie/:id' element={<MoviePage mediaType='movie' />}></Route>
        </Routes>
    );
}

export default Body; 