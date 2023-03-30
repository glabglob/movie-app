import { MediaType } from "../types/types";
import { Film } from "./interfaces"

export interface getTrendingsProps {
    media_type?: 'all' | 'movie' | 'tv' | 'person',
    time_window?: 'week' | 'day'
}

export interface HomePageInitialState {
    trendingsFetchStatus: 'idle' | 'pending' | 'failed',
    trendings: Film[],
    inCinemaFetchStatus: 'idle' | 'pending' | 'failed',
    inCinema: Film[],
    popularFetchStatus: 'idle' | 'pending' | 'failed',
    popular: Film[],
    topRatedTvFetchStatus: 'idle' | 'pending' | 'failed',
    topRatedTv: Film[],
    topRatedMovieFetchStatus: 'idle' | 'pending' | 'failed',
    topRatedMovie: Film[]
}

export interface PagianteInitialState {
    paginateResultFetchStatus: 'idle' | 'pending' | 'failed',
    paginateResult: Film[],
    currentPage: number,
    totalPages: number,
}

export interface DetailPageInitialState {
    movieDetailFetchStatus: 'idle' | 'pending' | 'failed',
    movie: TransformObj,
    castFetchStatus: 'idle' | 'pending' | 'failed',
    cast: Cast[],
    trailersFetchStatus: 'idle' | 'pending' | 'failed',
    trailers: Trailer[],
    recommendationsFetchStatus: 'idle' | 'pending' | 'failed',
    recommendations: Film[]
}

export interface ActorPageInitialState {
    actorDetailsFetchStatus: 'idle' | 'pending' | 'failed',
    actorDetails: Actor,
    knownForFetchStatus: 'idle' | 'pending' | 'failed',
    knownFor: KnownFor[],
}

export interface SeasonInitialState {
    seasonFetchStatus: 'idle' | 'pending' | 'failed',
    season: Season,
}

export interface SearchResultInitialState {
    serachResultFetchStatus: 'idle' | 'pending' | 'failed',
    searchResult: Film[],
}

export interface TransformObj {
    id?: number,
    title?: string,
    description?: string,
    poster?: string,
    cover?: string,
    genres?: Genre[],
    release_date?: string,
    seasons: Season[],
}

export interface KnownFor {
    id?: number,
    poster?: string,
    cover?: string,
    title?: string,
    description?: string,
    mediaType?: MediaType,
    date?: string
}

export interface Collection {
    id: number,
    name: string,
    poster_path: string,
}

export interface Cast {
    mediaType: MediaType
    id: number,
    name: string,
    charName: string,
    cover: string,
}

export interface Genre {
    id: number,
    name: string,
}

export interface Trailer {
    id: number,
    key: string,
    site: string,
}

export interface Season {
    id?: number,
    title?: string,
    description?: string,
    seasonNumber?: number,
    poster?: string,
    episodes?: Episode[],
    airDate?: string,
}

export interface Episode {
    id: number,
    title: string,
    description: string,
    date: string,
    poster: string,
    episodeNumber: number,
}

export interface Actor {
    name?: string,
    poster?: string,
    biography?: string
}