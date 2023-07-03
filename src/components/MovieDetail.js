import React, { useEffect, useState } from 'react';

import "../styles/_movie-detail.scss"
import tmdbApi from '../api/tmdb';
import { useSearchParams } from 'react-router-dom';

const MovieDetail = () => {
    const [params] = useSearchParams();
     // console.log(params.get("mediaType"))
    
    const [videoId, setVideoId ] = useState(null);
    
    
    useEffect(()=>{
        const fetchTrailer  = async () => {
            const json  = await tmdbApi.get(`/${params.get("mediaType")}/${params.get("id")}/videos`);
            const video = json.results.find(o => o.site === 'YouTube');
            setVideoId(video?.key);
        }

        fetchTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return (
        <>
           
         
            <div className="movie-box">
            {videoId && (
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
               
            </div>
        </>
    );
}

export default MovieDetail;