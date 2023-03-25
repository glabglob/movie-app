import { ReactNode } from "react"
import { MediaType } from "./types"

export interface AppContainerProps {
    children?: ReactNode
    className?: string
}

export interface Film {
    mediaType: MediaType
    id: number
    title: string
    description: string
    poster: string
    cover: string
    genreIds: number[]
    seasons: Season[]
    episodes?: Episode[]
}

// export interface Season {
//     id: number
//     filmName: string
//     name: string
//     seasonNumber: number
//     posterPath: string
//     episodes: Episode[]
//     airDate: string
// }

// export interface Episode {
//     id: number
//     title: string
//     overview: string
//     airDate: string
//     stillPath: string
//     episodeNumber: number
// }

export interface Episode {
    id?: number
    title?: string
    overview?: string
    airDate?: string
    stillPath?: string
    episodeNumber?: number
}

export interface SearchResultProps {
    keyword: string
    goToSearchPage: Function
}

export interface Season {
    id: number,
    seasonNumber: number
}

export interface Cast {
    id: number,
    actorName: string,
    charName: string,
}