import { MediaType } from '../../../types';

import AppContainer from '../../container/AppContainer';
import CatalogComponent from '../../catalog-component/CatalogComponent';

import './trendingPage.scss';

interface TrendingPageProps {
    type: MediaType
}

const TrendingPage: React.FC<TrendingPageProps> = (props: TrendingPageProps) => {
    return (
        <main>
            <section className='page__hero'>
                <AppContainer>
                    <h2 className='page__hero-title'>trendings</h2>
                </AppContainer>
            </section>
            <AppContainer>
                <CatalogComponent itemsPerPage={24} />
            </AppContainer>
        </main>
    );
}

export default TrendingPage;