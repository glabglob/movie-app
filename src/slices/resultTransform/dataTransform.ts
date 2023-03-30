import { Film } from "../../interfaces/interfaces"
import { MediaType } from "../../types/types"

export const transformFetch = (obj: any, mediaType?: MediaType): Film | any => {
    return {
        id: obj.id,
        mediaType: mediaType || obj.media_type,
        title: obj.title || obj.name,
        description: obj.overview,
        cover: obj.backdrop_path,
        poster: obj.poster_path || obj.profile_path,
        genreIds: obj.genre_ids || obj.genres?.map((g: any) => g.id) || [],
    };
};

