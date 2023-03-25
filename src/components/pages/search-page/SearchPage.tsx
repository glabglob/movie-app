import { MediaType } from '../../../types';

import AppContainer from '../../container/AppContainer';
import CatalogComponent from '../../catalog-component/CatalogComponent';

import './searchPage.scss';

interface SearchPageProps {
    type: MediaType | 'search'
}

const SearchPage: React.FC<SearchPageProps> = (props: SearchPageProps) => {
    return (
        <main>
            <section className='page__hero'>
                <AppContainer>
                    <h2 className='page__hero-title search-page'>{`Search result for ${'searchResult'}`}</h2>
                </AppContainer>
            </section>
            <AppContainer>
                <CatalogComponent itemsPerPage={24} />
            </AppContainer>
        </main>
    );
}

export default SearchPage;