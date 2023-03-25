import { MediaType } from '../../../types';

import AppContainer from '../../container/AppContainer';
import CatalogComponent from '../../catalog-component/CatalogComponent';

import './moviesPage.scss';

interface MoviesPageProps {
    type: MediaType
}

const MoviesPage: React.FC<MoviesPageProps> = (props: MoviesPageProps) => {
    return (
        <main>
            <section className='page__hero'>
                <AppContainer>
                    <h2 className='page__hero-title'>movies</h2>
                </AppContainer>
            </section>
            <AppContainer>
                <CatalogComponent itemsPerPage={24} />
            </AppContainer>
        </main>
    );
}

export default MoviesPage;