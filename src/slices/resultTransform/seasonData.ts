import { MediaType } from "../../types/types";
import { Season } from "../../interfaces/slicesInterfaces";

export const transformSeason = (obj: any, mediaType?: MediaType): Season => {
    return {
        id: obj._id,
        title: obj.name,
        description: obj.overview,
        seasonNumber: obj.season_number,
        poster: obj.poster_path,
        airDate: obj.air_date,
        episodes: (!obj.episodes) ?
            [] : obj.episodes.map((episodes: any) => ({
                id: episodes.id,
                title: episodes.name,
                description: episodes.overview,
                date: episodes.air_date,
                episodeNumber: episodes.episode_number,
                poster: episodes.still_path
            })
            )
    }
};

