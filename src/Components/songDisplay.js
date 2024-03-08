import React from "react";
import { UseSelector, useSelector } from "react-redux";



const SongDisplay=()=>{
let songData=useSelector((state)=>state.song);
    return(
        <div>
            <hr></hr>
         {songData&&(
            <div>
                <h2>{songData.name}</h2>
                <h3>{songData.artist}</h3>
                <h3>{songData.album}</h3>
            </div>
         )}
        </div>
    )
}

export default SongDisplay;