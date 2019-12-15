import React from 'react';
import images from '../images.js';

export default function Gallery() {
  const pics = Object.values(images)
  
  return (
    
    <div className="gallery">
      {pics.map((pic) => <img className="gallery-pic" src={pic}/>)}
    </div>
  )
}
