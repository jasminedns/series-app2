import "./series-box.scss"
import { seriesTypes } from "@/utils/types"
import Image from "next/image"

const SeriesBox = ({name, language, premiered, ended, summary, genres, rating, image}:seriesTypes) => {
    return (
        <div className="info__box">
            <h2>{name}</h2>
            <Image src={image} alt={name} width={300} height={350}/>
            <p><span>Language:</span> {language}</p>
            <p><span>Premiered:</span> {premiered}</p>
            {ended && ended !== null 
                ? 
                    <p><span>Ended:</span> {ended}</p> 
                : 
                    <span>Currently airing</span>
            }
            {rating && rating !== null ? <p><span>Average rating:</span> {rating}</p> : ""}
            {genres && genres.length > 0 
                ?
                    <p className="info__genre--container">
                        <span className="info__genre--category">Genre:</span>   
                        {genres.map((item, index) => (
                            <span key={index} className="info__genre--names">{item}</span>
                        ))}
                    </p> 
                : ""
            }
            <div className="info__summary--container" dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
    )
}

export default SeriesBox