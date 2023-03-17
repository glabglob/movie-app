import { ReactNode } from "react"

export interface AppContainerProps {
    children?: ReactNode
    className?: string
}

export interface SearchResultProps {
    keyword: string
    goToSearchPage: Function
}

export interface Season {
    id: number
}

export interface Film {
    id: number
    title: string
    description: string
    poster: string
    cover: string
    genreIds: number[]
    seasons: Season[]
}