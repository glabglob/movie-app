import { MediaType } from '../../utils/types/types';

import { useEffect } from 'react';
import { GridLoader } from 'react-spinners';

import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../utils/hooks/useAppSelector';
import { Link } from 'react-router-dom';
import { getPaginateResult } from '../../slices/pagitaneSlice';

import ReactPaginate from 'react-paginate';
import MovieCard from '../movie-card/MovieCard';


import './catalogComponent.scss';

interface CatalogComponentProps {
    itemsPerPage: number
    type: MediaType
}

const CatalogComponent: React.FC<CatalogComponentProps> = (props: CatalogComponentProps) => {

    const dispatch = useAppDispatch();
    const {
        paginateResultFetchStatus,
        currentPage,
        totalPages,
        paginateResult
    } = useAppSelector((state) => state.paginateReducer);

    useEffect(() => {
        dispatch(getPaginateResult({ mediaType: props.type, pageNumber: `${currentPage}` }));
    }, [currentPage, dispatch]);

    const handlePageClick = (event: any) => {
        dispatch(getPaginateResult({ mediaType: props.type, pageNumber: `${event.selected + 1}` }));
        window.scrollTo(0, 0);
    };

    return (
        <section className='section catalog'>
            <div className="catalog__items">
                {
                    (paginateResultFetchStatus !== 'idle') ?
                        <GridLoader
                            color='#582904'
                            cssOverride={{
                                margin: '0 auto'
                            }}
                        /> :
                        paginateResult.map((item, i) => (
                            <Link to={`/${item.mediaType}/${item.id}`} key={i}>
                                <MovieCard
                                    image={
                                        (!item.cover) ?
                                            `https://image.tmdb.org/t/p/original${item.poster}` :
                                            `https://image.tmdb.org/t/p/original${item.cover}`
                                    }
                                    title={item.title}
                                />
                            </Link>
                        ))
                }
            </div>
            <ReactPaginate
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                pageCount={totalPages}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                containerClassName="pagination"
                pageLinkClassName="page-link"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="active__pagination"
                renderOnZeroPageCount={() => null}
            />
        </section>
    );
}

export default CatalogComponent;