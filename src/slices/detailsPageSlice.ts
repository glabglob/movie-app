import { DetailPageInitialState } from "../utils/interfaces/slicesInterfaces";
import { MediaType } from "../utils/types/types";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { transformDetails, transformCast, transformTrailers } from "./resultTransform/movieDetailsData";
import { transformFetch } from "./resultTransform/dataTransform";

import { useHttp } from "../utils/hooks/http.hook";
import { _apiBase, _apiKey } from "../utils/api/api";

const initialState: DetailPageInitialState = {
    movieDetailFetchStatus: 'idle',
    movie: {
        seasons: []
    },
    castFetchStatus: 'idle',
    cast: [],
    trailersFetchStatus: 'idle',
    trailers: [],
    recommendationsFetchStatus: 'idle',
    recommendations: [],
};

export const getMovieDetail = createAsyncThunk(
    'detailPage/fetchMovieDetail',
    async ({ mediaType, movieId }: { mediaType?: MediaType, movieId?: string }) => {
        const { request } = useHttp();
        const res = await request(`${_apiBase}${mediaType}/${movieId}?api_key=${_apiKey}&language=en-US`);
        return transformDetails(res)
    }
);

export const getCast = createAsyncThunk(
    'detailPage/fetchCast',
    async ({ mediaType, movieId }: { mediaType?: MediaType, movieId?: string }) => {
        const { request } = useHttp();
        const res = await request(`${_apiBase}${mediaType}/${movieId}/credits?api_key=${_apiKey}&language=en-US`);
        return res.cast.sort((a: any, b: any) => b.popularity - a.popularity).map((items: any) => transformCast(items, mediaType)).slice(0, 10);
    }
);

export const getTrailers = createAsyncThunk(
    'detailPage/fetchTrailers',
    async ({ mediaType, movieId }: { mediaType?: MediaType, movieId?: string }) => {
        const { request } = useHttp();
        const res = await request(`${_apiBase}${mediaType}/${movieId}/videos?api_key=${_apiKey}`);
        return res.results.map((items: any) => transformTrailers(items, mediaType));
    }
);

export const getRecommendations = createAsyncThunk(
    'detailPage/fetchRecommendations',
    async ({ mediaType, movieId }: { mediaType?: MediaType, movieId?: string }) => {
        const { request } = useHttp();
        const res = await request(`${_apiBase}${mediaType}/${movieId}/recommendations?api_key=${_apiKey}&language=en-US&page=1`);
        return res.results.map((items: any) => transformFetch(items, mediaType)).slice(0, 10);
    }
);

const detailPageSlice = createSlice({
    name: 'detailPage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovieDetail.pending, state => { state.movieDetailFetchStatus = 'pending' })
            .addCase(getMovieDetail.fulfilled, (state, action) => {
                state.movieDetailFetchStatus = 'idle';
                state.movie = action.payload;
            })
            .addCase(getCast.pending, state => { state.castFetchStatus = 'pending' })
            .addCase(getCast.fulfilled, (state, action) => {
                state.castFetchStatus = 'idle';
                state.cast = action.payload;
            })
            .addCase(getTrailers.pending, state => { state.trailersFetchStatus = 'pending' })
            .addCase(getTrailers.fulfilled, (state, action) => {
                state.trailersFetchStatus = 'idle';
                state.trailers = action.payload;
            })
            .addCase(getRecommendations.pending, state => { state.recommendationsFetchStatus = 'pending' })
            .addCase(getRecommendations.fulfilled, (state, action) => {
                state.recommendationsFetchStatus = 'idle';
                state.recommendations = action.payload;
            })
            .addDefaultCase(() => { })
    }
});

export default detailPageSlice.reducer