import { SeasonInitialState } from "../interfaces/slicesInterfaces";
import { MediaType } from "../types/types";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { transformSeason } from "./resultTransform/seasonData";

import { useHttp } from "../hooks/http.hook";
import { _apiBase, _apiKey } from "../api/api";

const initialState: SeasonInitialState = {
    seasonFetchStatus: 'idle',
    season: {},
};

export const getSeasons = createAsyncThunk(
    'seasonPage/fetchSeasons',
    async ({ mediaType, tvId, seasonId }: { mediaType?: MediaType, tvId?: string, seasonId?: string }) => {
        const { request } = useHttp();
        const res = await request(`${_apiBase}${mediaType}/${tvId}/season/${seasonId}?api_key=${_apiKey}&language=en-US`);
        return transformSeason(res)
    }
);

const seasonPageSlice = createSlice({
    name: 'seasonPage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSeasons.pending, state => { state.seasonFetchStatus = 'pending' })
            .addCase(getSeasons.fulfilled, (state, action) => {
                state.seasonFetchStatus = 'idle';
                state.season = action.payload;
            })
            .addDefaultCase(() => { })
    }
});

export default seasonPageSlice.reducer