import { MediaType } from "../../utils/types/types";
import { Cast, Trailer, TransformObj } from "../../utils/interfaces/slicesInterfaces";

export const transformDetails = (obj: any): TransformObj => {
    return {
        id: obj.id,
        title: obj.title || obj.name,
        description: obj.overview,
        tagline: obj.tagline,
        rating: obj.vote_average,
        homepage: obj.homepage,
        cover: obj.backdrop_path,
        poster: obj.poster_path,
        genres: obj.genres,
        release_date: obj.release_date,
        seasons: (!obj.seasons) ?
            [] : obj.seasons.map(
                (season: any) =>
                ({
                    id: season.id,
                    title: season.name,
                    poster: season.poster_path,
                    seasonNumber: season.season_number,
                    airDate: season.air_date,
                    episodes: [],
                })
            ),
    }
}

export const transformCast = (obj: any, mediaType?: MediaType): Cast => {
    return {
        id: obj.id,
        mediaType: mediaType || obj.media_type,
        name: obj.name,
        charName: obj.character,
        cover: obj.profile_path,
        popularity: obj.popularity
    };
};

export const transformTrailers = (obj: any, mediaType?: MediaType): Trailer => {
    return {
        id: obj.id,
        key: obj.key,
        site: obj.site,
    }
};


