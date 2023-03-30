import { MediaType } from "../../types/types";
import { Actor, KnownFor, } from "../../interfaces/slicesInterfaces";

export const transformActorDetails = (obj: any): Actor => {
    return {
        name: obj.name,
        poster: obj.profile_path,
        biography: obj.biography,
    }
};
export const transformKnownFor = (obj: any, mediaType?: MediaType): KnownFor => {
    return {
        id: obj.id,
        poster: (!obj.poster_path) ? obj.backdrop_path : obj.poster_path,
        cover: obj.backdrop_path,
        title: obj.title || obj.name,
        description: obj.overview,
        mediaType: mediaType || obj.media_type,
        date: (!obj.first_air_date) ? '' : obj.first_air_date
    }
}