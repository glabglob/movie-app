import { ActorPageInitialState, DetailPageInitialState, KnownFor } from "../interfaces/slicesInterfaces";
import { MediaType } from "../types/types";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { transformKnownFor, transformActorDetails } from "./resultTransform/actorsData";

import { useHttp } from "../hooks/http.hook";
import { _apiBase, _apiKey } from "../api/api";

const initialState: ActorPageInitialState = {
    knownForFetchStatus: 'idle',
    knownFor: [],
    actorDetailsFetchStatus: 'idle',
    actorDetails: {},
};

export const getActorDetails = createAsyncThunk(
    'detailPage/fetchActorDetails',
    async ({ mediaType, personId }: { mediaType?: MediaType, personId?: string }) => {
        const { request } = useHttp();
        const res = await request(`${_apiBase}/person/${personId}?api_key=${_apiKey}&language=en-US`);
        return transformActorDetails(res);
    }
);

export const getKnownFor = createAsyncThunk(
    'detailPage/fetchKnownFor',
    async ({ mediaType, personId }: { mediaType?: MediaType, personId?: string }) => {
        const { request } = useHttp();
        const res = await request(`${_apiBase}/person/${personId}/combined_credits?api_key=${_apiKey}&language=en-US`);
        const filteredResult = res.cast.filter((item: any) => item.popularity > 100).slice(0, 20);
        return filteredResult.map((items: any) => transformKnownFor(items, mediaType));
    }
);

const actorPageSlice = createSlice({
    name: 'detailPage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getKnownFor.pending, state => { state.knownForFetchStatus = 'pending' })
            .addCase(getKnownFor.fulfilled, (state, action) => {
                state.knownForFetchStatus = 'idle';
                state.knownFor = action.payload;
            })
            .addCase(getActorDetails.pending, state => { state.actorDetailsFetchStatus = 'pending' })
            .addCase(getActorDetails.fulfilled, (state, action) => {
                state.actorDetailsFetchStatus = 'idle';
                state.actorDetails = action.payload;
            })
            .addDefaultCase(() => { })
    }
});

export default actorPageSlice.reducer