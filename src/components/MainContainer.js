import React from 'react'

import Slider from "./Slider";
import Banner from "./Banner";

const MainContainer = () => {
  return (
    <>
    
        <Banner/>
            <Slider
                mediaType="tv"
                title="NETFLIX ORIGINALS"
                path="/discover/tv"
                params={{ with_networks: 213 }}
                isLarge
            />
            <Slider
                title="TRENDING NOW"
                path="/trending/all/week"
                isLarge
            />
            <Slider
                mediaType="movie"
                title="TOP RATED"
                path="/movie/top_rated"
                isLarge
            />
            <Slider
                mediaType="movie"
                title="ACTION MOVIES"
                path="/discover/movie"
                params={{ with_genres: 28 }}
                isLarge
            />
          
    </>
  )
}

export default MainContainer