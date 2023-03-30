import { MediaType } from '../../../types/types';

import AppContainer from '../../container/AppContainer';
import CatalogComponent from '../../catalog-component/CatalogComponent';

import './actorsPage.scss';

interface ActorsPageProps {
    type: MediaType
}

const ActorsPage: React.FC<ActorsPageProps> = (props: ActorsPageProps) => {
    return (
        <main>
            <section className='page__hero'>
                <AppContainer>
                    <h2 className='page__hero-title'>actors</h2>
                </AppContainer>
            </section>
            <AppContainer>
                <CatalogComponent itemsPerPage={24} type={'person'}/>
            </AppContainer>
        </main>
    );
}

export default ActorsPage;