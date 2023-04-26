import React, { useEffect, useState } from 'react';
import '../App.css';
import { getImageUrls } from '../utils/api';

export const  Gallery = () => {
  const [imgs, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getImageUrls();
      const data = await response.json();
      setImages(data);
      setLoading(false);
    })();
  }, []); // eslit-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className='header'>
        <h1>Cody Visions</h1>
        <h2>Images</h2>
      </div>
      <div className='container'>
        {
          loading ? <h3>Loading...</h3>
          : 
          <div id='gallery'>
            {
              imgs ? 
              imgs.map((image, index) => (
                <img className="image" src={image} alt='' key={index}/>
              ))
              : <h3>No images found</h3>
            }
          </div>
        }
      </div>
    </div>
  );
}
