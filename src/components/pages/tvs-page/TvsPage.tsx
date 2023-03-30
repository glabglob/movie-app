import { MediaType } from '../../../types/types';

import AppContainer from '../../container/AppContainer';
import CatalogComponent from '../../catalog-component/CatalogComponent';

import './tvsPage.scss';

interface TvsPageProps {
    type: MediaType | 'tvs'
}

const TvsPage: React.FC<TvsPageProps> = (props: TvsPageProps) => {
    return (
        <main>
            <section className='page__hero'>
                <AppContainer>
                    <h2 className='page__hero-title'>Tv's</h2>
                </AppContainer>
            </section>
            <AppContainer>
                <CatalogComponent itemsPerPage={24} type={'tv'} />
            </AppContainer>
        </main>
    );
}

export default TvsPage;