import React from 'react';
import classNames from 'classnames';
import { generateImageUrl, ImageSizes } from "../utils/tmdb";
import { Link } from 'react-router-dom';


const Cards = ({ media, mediaType, rating, isLarge }) => {

console.log(rating);
    return (
        <>
        <Link to={`/movie?id=${media.id}&mediaType=${mediaType}`} >
        {/* <Link to={"/movie?id="+ media.id }> */}
            <div key={media.id}  className="media-card">
                <img className={classNames(
                    'media-card__poster',
                    { 'media-card__poster--large': isLarge },
                )}
                src={
                    generateImageUrl(media.poster_path, ImageSizes.poster)
                 }
                alt={media.original_title}
                />
                <div className="media-card__cover">
                    <div className="media-card__name">
                        {media.title || media.name || media.original_name}<br/>
                        <b>Rating ({rating})</b>
                    </div>
                    <div className="media-card__description">
                        {media.overview}
                    </div>
                </div>
            </div>
            </Link>
        
        </>
    );
}

export default Cards;