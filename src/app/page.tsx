'use client'
import { seriesTypes } from "@/utils/types"; 
import { useState } from "react";
import SeriesBox from "@/components/SeriesBox";

export default function Home() {
  const [homeText, setHomeText] = useState<string>(`
    It's in our nature to explore stories because entertainment is who we are. 
    They fuel our imagination. They bring people together. They make us feel more 
    connected. So immerse yourself, discover new worlds, and explore them with the randomizer!
  `)
  const [series, setSeries] = useState<seriesTypes | null>(null)

  const fetchSeries = async ():Promise<void> => {
    try {
      const randomId:number = Math.floor(Math.random() * 500) + 1;
      const API_URL:string = `https://api.tvmaze.com/shows`;
      const response = await fetch(`${API_URL}/${randomId}`);
      const data = await response.json();

      const seriesData:seriesTypes = {
        name: data.name,
        language: data.language,
        premiered: data.premiered,
        ended: data.ended,
        summary: data.summary,
        genres: data.genres.map((item: any) => item),
        rating: data.rating.average,
        image: data.image.original
      }
      
      setSeries(seriesData);

    } catch (error){
      console.log(`Error: ${error}`)
    }
  }

  return (
    <main className="main">
      <div className="main__text">
        {series && series !== null ? <SeriesBox {...series}/> : <p>{homeText}</p>}
        <button onClick={fetchSeries} className="main__text--button">Roulette</button>
      </div>
    </main>
  );
}
