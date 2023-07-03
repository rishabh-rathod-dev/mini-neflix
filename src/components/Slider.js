import React, { useState, useEffect } from "react";

import tmdbApi from '../api/tmdb';
import Cards from "./Cards";

const Slider = ({ mediaType, title, path, params = {}, isLarge }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const json = await tmdbApi.get(path, params);
        setItems(json.results);
        };
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    //console.log(items,"items");
    return (
        <div className="media-slider">
      <h3 className="media-slider__title">{title}</h3>
      <div className="media-slider__cards">
        {items.map((media) => (
          
          <Cards
            isLarge={isLarge}
            key={media.id}
            media={media}
            mediaType={media.media_type || mediaType}
            rating={media.vote_average}
          />
       
        ))}
      </div>
    </div>
    );
}

export default Slider;