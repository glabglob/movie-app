import { SeasonInitialState } from "../utils/interfaces/slicesInterfaces";
import { MediaType } from "../utils/types/types";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { transformEpisode, transformSeason } from "./resultTransform/seasonData";

import { useHttp } from "../utils/hooks/http.hook";
import { _apiBase, _apiKey } from "../utils/api/api";

const initialState: SeasonInitialState = {
    seasonFetchStatus: 'idle',
    season: {},
    episodeFetchStatus: 'idle',
    episode: {}
};

export const getSeasons = createAsyncThunk(
    'seasonPage/fetchSeasons',
    async ({ mediaType, tvId, seasonId }: { mediaType?: MediaType, tvId?: string, seasonId?: string }) => {
        const { request } = useHttp();
        const res = await request(`${_apiBase}${mediaType}/${tvId}/season/${seasonId}?api_key=${_apiKey}&language=en-US`);
        return transformSeason(res)
    }
);

export const getEpisode = createAsyncThunk(
    'seasonPage/fetchEpisode',
    async ({ mediaType, tvId, seasonId, episodId }: { mediaType?: MediaType, tvId?: string, seasonId?: string, episodId?: string }) => {
        const { request } = useHttp();
        const res = await request(`${_apiBase}/tv/${tvId}/season/${seasonId}/episode/${episodId}?api_key=${_apiKey}&language=en-US`);
        return transformEpisode(res)
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
            .addCase(getEpisode.pending, state => { state.episodeFetchStatus = 'pending' })
            .addCase(getEpisode.fulfilled, (state, action) => {
                state.episodeFetchStatus = 'idle';
                state.episode = action.payload;
            })
            .addDefaultCase(() => { })
    }
});

export default seasonPageSlice.reducer