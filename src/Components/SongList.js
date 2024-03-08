import React from "react";
import songsData from "../Data/SongsData";
import {useDispatch } from "react-redux";
import { clickedSong } from "../redux/features/songs/songSlice";

const SongList=()=>{
    const dispatch=useDispatch();
let Data=songsData;
    return(
        <div>
        {Data.map((iteam)=>(
            <h2 key={iteam.id} onClick={()=>dispatch(clickedSong(iteam))}>{iteam.name}</h2>
        ))}
        </div>
    )
}


export default SongList;