
import { MediaType } from "../../../types";

import './catalogPage.scss';

interface CatalogPageProps {
    type: MediaType | 'search'
}

const CatalogPage: React.FC<CatalogPageProps> = (props: CatalogPageProps) => {
    return (
        <div className="">
            {props.type}
        </div>
    );
}

export default CatalogPage;