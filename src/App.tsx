import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [imgs, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch('http://localhost:3000/images');
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
              imgs.map((image, index) => (
                <img className="image" src={image} alt='' key={index}/>
              ))
            }
          </div>
        }
      </div>
    </div>
  );
}

export default App;
