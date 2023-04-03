import { MediaType } from '../../../utils/types/types';

import { Helmet } from 'react-helmet';

import AppContainer from '../../container/AppContainer';
import CatalogComponent from '../../catalog-component/CatalogComponent';

interface ActorsPageProps {
    type: MediaType
}

const ActorsPage: React.FC<ActorsPageProps> = (props: ActorsPageProps) => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Actors list" />
                <title>Actors list</title>
            </Helmet>
            <main>
                <section className='page__hero'>
                    <AppContainer>
                        <h2 className='page__hero-title'>actors</h2>
                    </AppContainer>
                </section>
                <AppContainer>
                    <CatalogComponent itemsPerPage={24} type={'person'} />
                </AppContainer>
            </main>
        </>
    );
}

export default ActorsPage;