import Image from "next/image"
import { DisplaySeriesTypes } from "@/utils/types"
import '../../app/globals.scss'

const DisplaySeries = ({name, rating, image}:DisplaySeriesTypes) => {
    return ( 
        <div className="series__container">
            <h2>{name}</h2>
            <Image src={image} alt={name} width={300} height={350}/>
            <p>Rating: {rating}</p>
        </div>
    )
}

export default DisplaySeries