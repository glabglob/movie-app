import { Film } from '../../interfaces/interfaces';

import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import MovieCard from '../movie-card/MovieCard';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useParams } from 'react-router-dom';

import './catalogComponent.scss';
import { getPaginateResult } from '../../slices/pagitaneSlice';
import { MediaType } from '../../types/types';

interface CatalogComponentProps {
    itemsPerPage: number
    type: MediaType
}

const CatalogComponent: React.FC<CatalogComponentProps> = (props: CatalogComponentProps) => {

    const { id } = useParams<any>();

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
    };

    return (
        <section className='section catalog'>
            <div className="catalog__items">
                {
                    paginateResult.map((film, i) => (
                        <MovieCard
                            key={i}
                            image={
                                (!film.cover) ?
                                    `https://image.tmdb.org/t/p/original${film.poster}` :
                                    `https://image.tmdb.org/t/p/original${film.cover}`
                            }
                            title={film.title}
                        />
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



//   const handlePageClick = (page) => {
//     dispatch(fetchData(page.selected + 1));
//   };

//   return (
//     <div>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//       <ReactPaginate
//         pageCount={totalPages}
//         onPageChange={handlePageClick}
//         containerClassName={'pagination'}
//         activeClassName={'active'}
//       />
//     </div>
//   );
// };





























// const myComponentSlice = createSlice({
//   name: 'myComponent',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.data = action.payload.data;
//         state.totalPages = action.payload.totalPages;
//         state.currentPage = action.payload.currentPage;
//         state.error = null;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload.error;
//       });
//   },
// });

