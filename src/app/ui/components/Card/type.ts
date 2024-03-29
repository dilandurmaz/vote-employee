export interface CardProps {
    index: number
    imageUrl:string
    redirectUrl: string
    fullName:string
    title:string
    numberOfVotes:number
    onVote: Function
}