import { MediaType } from '../types/types';
import { PagianteInitialState } from '../interfaces/slicesInterfaces';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { useHttp } from '../hooks/http.hook';
import { _apiBase, _apiKey } from '../api/api';
import { transformFetch } from './resultTransform/dataTransform';

const initialState: PagianteInitialState = {
    paginateResultFetchStatus: 'idle',
    paginateResult: [],
    currentPage: 1,
    totalPages: 500,
};

export const getPaginateResult = createAsyncThunk(
    'paginatePage/fetchPaginateResult',
    async ({ mediaType, pageNumber }: { mediaType?: MediaType, pageNumber?: string }) => {
        const { request } = useHttp();
        const res = await request(`${_apiBase}${mediaType}/popular?api_key=${_apiKey}&language=en-US&page=${pageNumber}`);
        return res.results.map((items: any) => transformFetch(items, mediaType));
    }
);

const paginatePageSlice = createSlice({
    name: 'paginatePage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPaginateResult.pending, state => { state.paginateResultFetchStatus = 'pending' })
            .addCase(getPaginateResult.fulfilled, (state, action) => {
                state.paginateResultFetchStatus = 'idle';
                state.paginateResult = action.payload;
            })
            .addDefaultCase(() => { })
    },
});

export default paginatePageSlice.reducer;