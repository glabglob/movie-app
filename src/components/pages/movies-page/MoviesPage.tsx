import { MediaType } from '../../../utils/types/types';

import { Helmet } from 'react-helmet';

import AppContainer from '../../container/AppContainer';
import CatalogComponent from '../../catalog-component/CatalogComponent';

import './moviesPage.scss';

interface MoviesPageProps {
    type: MediaType
}

const MoviesPage: React.FC<MoviesPageProps> = (props: MoviesPageProps) => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Movie list" />
                <title>Movie list</title>
            </Helmet>
            <main>
                <section className='page__hero'>
                    <AppContainer>
                        <h2 className='page__hero-title'>movies</h2>
                    </AppContainer>
                </section>
                <AppContainer>
                    <CatalogComponent itemsPerPage={24} type={'movie'} />
                </AppContainer>
            </main>
        </>
    );
}

export default MoviesPage;