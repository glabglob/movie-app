import { ReactNode } from "react"
import { MediaType } from "../types/types"
import { Season } from "./slicesInterfaces"

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
}

export interface SearchResultProps {
    keyword: string
    goToSearchPage: Function
}


