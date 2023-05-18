import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { Button } from '../components/Button';
import { getDatabase, ref, get, child } from "firebase/database";
import { FadeInSection } from '../components/FadeInSection';

interface Package {
  name: string;
  price: number;
}

export const Home = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [editing, setEditing] = useState<number>();
  const addPackage =(name: string, price: number) => setPackages(prev => [...prev, { name, price }]);
  useEffect(() => {
    const db = getDatabase();
    const photosRef = ref(db, 'photos');
    const rootRef = ref(db, '/');
    get(child(photosRef, '/')).then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          addPackage(childSnapshot.key!, childSnapshot.val())
        });
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    get(child(rootRef, 'editing')).then((snapshot) => {snapshot ? setEditing(snapshot.val()) : console.log("Shit")});
  }, []);
  return (
    <div>
      <div className="hero-content">
        <Button text='Gallery' link='/gallery' className='gallery-button'/>
        <p className="hero-title" style={{ fontWeight: 'bolder' }}>Cody Visions</p>
        <p className="hero-description">Available in Hendersonville NC</p>
      </div>
      <div className="content">
        <FadeInSection>
          <h2>What is Cody Visions?</h2>
          <p>Cody Visions is a photography business <span style={{ fontWeight: 'bolder' }} >only available in Hendersonville, NC</span>. I specialize in sports photography, but I also do portrait, group and event photography. I even offer photo editing.</p>
        </FadeInSection>
        <FadeInSection>
          <h2>What is the purpose of this website?</h2>
          <p>This website is a place to display my work and to allow people to contact me for business.</p>
        </FadeInSection>
        <FadeInSection>
          <h2>How do I contact you?</h2>
          <p>You can contact me by email at <a href="mailto:westphalphotography28@gmail.com">westphalphotography28@gmail.com</a> or dm me on instagram <a href="https://instagram.com/cody_visions">@cody_visions</a></p>
        </FadeInSection>
        <FadeInSection>
          <h2>Where can I see your work?</h2>
          <p>You can see my work on my <Link style={{ fontWeight: 'bolder', textDecoration: 'none' }}  to="/gallery">gallery page</Link>.</p>
        </FadeInSection>
        <FadeInSection>
          <h2>How much do you charge?</h2>
          <ul >
            {
              packages.map((pack, index) => (
                <li key={index}>{pack.name}: <span style={{ fontWeight: 'bold' }}>${pack.price}</span></li>
              ))
            }
            <li>Editing: ${editing}</li>
          </ul>
        </FadeInSection>
        
      </div>
    </div>
  );
} 