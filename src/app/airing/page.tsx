'use client'

import DisplaySeries from "@/components/DisplaySeries";
import { useState, useEffect } from "react";
import '../../app/globals.scss';
import { DisplaySeriesTypes } from "@/utils/types";

const Airing = () => {
    const [allAiring, setAllAiring] = useState<DisplaySeriesTypes[] | null>(null);

    let airingShows:DisplaySeriesTypes[] = [];

    const fetchAiring = async () => {

        try {
            for (let page = 0; page < 3; page++) {
                const response = await fetch(`https://api.tvmaze.com/shows?page=${page}`);
                const data = await response.json();

                for (let i = 0; i < data.length; i++) {
                    if(data[i].ended === null) {
                        airingShows.push({
                            name: data[i].name, 
                            rating: data[i].rating.average || null, 
                            image: data[i].image.original
                        })
                    }
                }
            }

            setAllAiring(airingShows);

        } catch (error) {
            console.log(`Something has gone wrong: ${error}`)
        }
    }

    useEffect(() => {
        fetchAiring();
    }, [])

    return (
        <div className="airing__container">
            <h2 className="airing__title">Airing Shows</h2>
            <div className="airing__series--container">
                {allAiring && allAiring.length > 0 
                    ? (
                        allAiring.map((item, index) => (
                            <DisplaySeries key={index} name={item.name} rating={item.rating} image={item.image} />
                        ))
                    ) : (
                        allAiring && allAiring.length === 0 && <p>There's no airing series in our catalog at the moment!</p>
                    )
                }
            </div>
        </div>
    )
}

export default Airing