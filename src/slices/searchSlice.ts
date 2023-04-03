import { MediaType } from '../utils/types/types';
import { SearchResultInitialState } from '../utils/interfaces/slicesInterfaces';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { useHttp } from '../utils/hooks/http.hook';
import { _apiBase, _apiKey } from '../utils/api/api';
import { transformFetch } from './resultTransform/dataTransform';

const initialState: SearchResultInitialState = {
    serachResultFetchStatus: 'idle',
    searchResult: []
};

export const getSearchResult = createAsyncThunk(
    'searchPage/fetchSearchResult',
    async ({ mediaType, query }: { mediaType?: MediaType, query?: string }) => {
        const { request } = useHttp();
        const res = await request(`${_apiBase}/search/multi?api_key=${_apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
        return res.results.map((items: any) => transformFetch(items));
    }
);

const searchPageSlice = createSlice({
    name: 'searchPage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSearchResult.pending, state => { state.serachResultFetchStatus = 'pending' })
            .addCase(getSearchResult.fulfilled, (state, action) => {
                state.serachResultFetchStatus = 'idle';
                state.searchResult = action.payload;
            })
            .addDefaultCase(() => { })
    },
});

export default searchPageSlice.reducer;