import React, { useEffect, useState } from 'react';
import '../App.css';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';

export const  Gallery = () => {
  const [imgs, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const addImage = (url: string) => setImages(prev => [...prev, url]);

  useEffect(() => {
    setLoading(true);
    const storage = getStorage(); // Gets the storage bucket
    const imagesRef = ref(storage, 'images'); // References the images folder
    listAll(imagesRef).then((images) => { // Lists all the images in the folder
      images.items.forEach((imageRef) => { // For each image in the folder
        getDownloadURL(imageRef).then((url) => { // Get the download URL
          addImage(url); // Add the URL to the images array
        });
      });
    });
    setLoading(false);
  }, []);

  return (
    <div>
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
                  <img className="image" src={image} alt='' key={index} loading='lazy'/>
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
