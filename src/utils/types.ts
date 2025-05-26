export type seriesTypes = {
  name: string,
  language: string,
  premiered: string,
  ended:string,
  summary:string,
  genres: string[],
  rating: string,
  image: string
}

export type DisplaySeriesTypes = { 
  name: string,
  rating: number | null, 
  image: string 
}
