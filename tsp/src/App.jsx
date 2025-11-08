import { useEffect } from 'react';
import TShirtF from './assets/TShirtF.webp';
import TShirtB from './assets/TShirtB.webp';
import HoodieF from './assets/HoodieF.webp';
import HoodieB from './assets/HoodieB.webp';
import LongF from './assets/LongF.webp';
import LongB from './assets/LongB.webp';
import './App.css';

function App() {
const merch = [
    { name: 'T-Shirt', front: TShirtF, back: TShirtB },
    { name: 'Hoodie', front: HoodieF, back: HoodieB },
    { name: 'Long Sleeve', front: LongF, back: LongB },
  ];


  // Parallax effect for hero
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero');
      hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          Work Hard, <span className="highlight">Party Harder</span>
        </h1>
       
      </section>

      {/* Merch Section */}
      <section className="merch">
        <h2>
          Do you know the <span className="highlight">Mifflin Man?</span>
        </h2>
        <div className="merch-grid">
          {merch.map((item, idx) => (
            <div className="merch-card" key={idx}>
              <img 
                src={item.front} 
                alt={item.name} 
                onMouseEnter={e => e.currentTarget.src = item.back}
                onMouseLeave={e => e.currentTarget.src = item.front}
              />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      <a href="https://pogo.undergroundshirts.com/collections/mhr-248-order-page" className="shop-btn" target="_blank" rel="noopener noreferrer">
  GO TO SHOP
</a>
      </section>
    </div>
  );
}

export default App;
