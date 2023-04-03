import { MediaType } from '../../../utils/types/types';

import { Helmet } from 'react-helmet';

import AppContainer from '../../container/AppContainer';
import CatalogComponent from '../../catalog-component/CatalogComponent';

interface TvsPageProps {
    type: MediaType | 'tvs'
}

const TvsPage: React.FC<TvsPageProps> = (props: TvsPageProps) => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Tv's list" />
                <title>Tv's list</title>
            </Helmet>
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
        </>
    );
}

export default TvsPage;