import React, { useEffect, useState } from 'react';
import '../App.css';
import { getImageUrls } from '../utils/api';
import { NavBar } from '../components/NavBar';

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
      <NavBar />
      <div className='content'>
        <div className='header'>
          <h2>Gallery</h2>
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
    </div>
  );
}
