import { Film } from "../utils/interfaces/interfaces";
import { HomePageInitialState } from "../utils/interfaces/slicesInterfaces";
import { MediaType } from "../utils/types/types";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { useHttp } from "../utils/hooks/http.hook";
import { _apiBase, _apiKey } from "../utils/api/api";
import { transformFetch } from "./resultTransform/dataTransform";

const initialState: HomePageInitialState = {
    trendingsFetchStatus: 'idle',
    trendings: [],
    inCinemaFetchStatus: 'idle',
    inCinema: [],
    popularFetchStatus: 'idle',
    popular: [],
    topRatedTvFetchStatus: 'idle',
    topRatedTv: [],
    topRatedMovieFetchStatus: 'idle',
    topRatedMovie: []
};

export const getTrendings = createAsyncThunk(
    'homePage/fetchTrendings',
    async (mediaType?: MediaType) => {
        const { request } = useHttp();
        const resMovie = await request(`${_apiBase}trending/movie/week?api_key=${_apiKey}`);
        const resTv = await request(`${_apiBase}trending/tv/week?api_key=${_apiKey}`);
        const res = compareMovies(
            resMovie.results.map((items: any) => transformFetch(items, 'movie')),
            resTv.results.map((items: any) => transformFetch(items, 'tv'))
        );
        return res
    }
);

export const getInCinema = createAsyncThunk(
    'homePage/fetchInCinema',
    async (mediaType?: MediaType) => {
        const { request } = useHttp();
        const res = await request(`${_apiBase}${mediaType}/now_playing?api_key=${_apiKey}`);
        return res.results.map((items: any) => transformFetch(items, mediaType)).slice(0, 10);
    }
);

export const getPopular = createAsyncThunk(
    'homePage/fetchPopular',
    async (mediaType?: MediaType) => {
        const { request } = useHttp();
        const resMovie = await request(`${_apiBase}movie/popular?api_key=${_apiKey}`);
        const resTv = await request(`${_apiBase}tv/popular?api_key=${_apiKey}`);
        const res = compareMovies(
            resMovie.results.map((items: any) => transformFetch(items, 'movie')),
            resTv.results.map((items: any) => transformFetch(items, 'tv'))
        );
        return res
    }
);

export const getTopRatedTv = createAsyncThunk(
    'homePage/fetchTopRatedTv',
    async (mediaType?: MediaType) => {
        const { request } = useHttp();
        const res = await request(`${_apiBase}tv/top_rated?api_key=${_apiKey}`);
        return res.results.map((items: any) => transformFetch(items, mediaType)).slice(0, 10);
    }
);

export const getTopRatedMovie = createAsyncThunk(
    'homePage/fetchTopRatedMovie',
    async (mediaType?: MediaType) => {
        const { request } = useHttp();
        const res = await request(`${_apiBase}${mediaType}/top_rated?api_key=${_apiKey}`);
        return res.results.map((items: any) => transformFetch(items, mediaType)).slice(0, 10);
    }
);

const compareMovies = (movies: Film[], tvs: Film[]) => {
    const result = [];

    for (let i = 0; i < 5; i++) {
        if (i < movies.length) {
            result.push(movies[i]);
        }
        if (i < tvs.length) {
            result.push(tvs[i]);
        }
    }
    return result;
}

const homePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTrendings.pending, state => { state.trendingsFetchStatus = 'pending' })
            .addCase(getTrendings.fulfilled, (state, action) => {
                state.trendingsFetchStatus = 'idle';
                state.trendings = action.payload;
            })
            .addCase(getInCinema.pending, state => { state.inCinemaFetchStatus = 'pending' })
            .addCase(getInCinema.fulfilled, (state, action) => {
                state.inCinemaFetchStatus = 'idle';
                state.inCinema = action.payload;
            })
            .addCase(getPopular.pending, state => { state.popularFetchStatus = 'pending' })
            .addCase(getPopular.fulfilled, (state, action) => {
                state.popularFetchStatus = 'idle';
                state.popular = action.payload;
            })
            .addCase(getTopRatedTv.pending, state => { state.topRatedTvFetchStatus = 'pending' })
            .addCase(getTopRatedTv.fulfilled, (state, action) => {
                state.topRatedTvFetchStatus = 'idle';
                state.topRatedTv = action.payload;
            })
            .addCase(getTopRatedMovie.pending, state => { state.topRatedMovieFetchStatus = 'pending' })
            .addCase(getTopRatedMovie.fulfilled, (state, action) => {
                state.topRatedMovieFetchStatus = 'idle';
                state.topRatedMovie = action.payload;
            })
            .addDefaultCase(() => { })
    }
});

export default homePageSlice.reducer