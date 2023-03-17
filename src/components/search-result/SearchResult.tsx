import { SearchResultProps } from '../../interfaces';
import { Film } from '../../interfaces';

import { useState, useEffect } from 'react';

import tmbnl from './tmbnl.jpg';
import './serachResult.scss';

interface Props {
    keyword: string
    goToSearchPage: Function
}

const SearchResult: React.FC<SearchResultProps> = (props: Props) => {

    const [items, setItems] = useState<Film[]>([])

    const getItems = () => {
        const arr: Film[] = [];

        for (let i = 0; i < 5; i++) {
            arr.push({
                id: i,
                title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nihil dolorum eaque nemo quibusdam atque deserunt nisi ad quae beatae aliquid, itaque dignissimos odit, nam voluptatem unde tempora dolore modi. Dolor eveniet, porro nulla consequuntur quis vitae culpa veritatis quas numquam voluptas, maxime corrupti quod velit eius. Aspernatur, iusto fugit.',
                description: '',
                cover: '',
                genreIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                poster: '',
                seasons: []
            })
        }
        setItems(arr);
    }

    useEffect(() => {
        getItems()
    }, [props.keyword]);

    return (
        <div className="search__result">
            {
                items.map((film, i) => (
                    <div className="search__result-content"
                        key={i}
                    >
                        <div className="search__result-img_container">
                            <img className='search__result-img'
                                src={tmbnl}
                                alt="Thumbnail"
                            />
                        </div>
                        <div className="search__result-info">
                            <p className="search__result-title">{film.title}</p>
                            <ul className='search__result-genres'>
                                {
                                    film.genreIds.map(() => (
                                        <li key={i}>item {i}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }
            {
                items.length > 4 ? (
                    <button className='search__result-button'
                        onClick={() => props.goToSearchPage()}
                    >
                        More Results
                    </button>
                ) : ('')
            }
        </div>
    );
}

export default SearchResult;