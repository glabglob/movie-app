import { Film } from '../../interfaces';

import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import MovieCard from '../movie-card/MovieCard';

import './catalogComponent.scss';

interface CatalogComponentProps {
    itemsPerPage: number
}

const CatalogComponent: React.FC<CatalogComponentProps> = (props: CatalogComponentProps) => {

    const [film, setfFilm] = useState<Film[]>([]);
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + props.itemsPerPage;

    const currentItems = film.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(film.length / props.itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * props.itemsPerPage) % film.length;
        setItemOffset(newOffset);
    };

    const getFilms = () => {
        const arr: Film[] = [];

        for (let i = 0; i < 11120; i++) {
            arr.push({
                mediaType: 'movie',
                id: i,
                title: 'Some Title',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nihil dolorum eaque nemo quibusdam atque deserunt nisi ad quae beatae aliquid, itaque dignissimos odit, nam voluptatem unde tempora dolore modi. Dolor eveniet, porro nulla consequuntur quis vitae culpa veritatis quas numquam voluptas, maxime corrupti quod velit eius. Aspernatur, iusto fugit.',
                cover: '',
                genreIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                poster: '',
                seasons: []
            })
        }
        setfFilm(arr);
    }

    useEffect(() => {
        getFilms();
    }, []);

    return (
        <section className='section catalog'>
            <div className="catalog__items">
                {
                    currentItems.map((film, i) => (
                        <MovieCard
                            key={i}
                            image={film.cover}
                            title={film.title}
                        />
                    ))
                }
            </div>
            <ReactPaginate
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                pageCount={pageCount}
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