import React from 'react';
import './App.css';

function App() {
  const interests = [
    {
      title: 'Uzay',
      img: 'https://www.bilimseldunya.com/wp-content/uploads/2022/03/Teleskop-Cesitleri.jpg'
    },
    {
      title: 'Kodlama',
      img: 'https://www.algobash.com/wp-content/uploads/2023/03/Online-Coding-Test-in-Java.jpg'
    },
    {
      title: 'Futbol',
      img: 'https://cms.vodafone.com.tr/static/img/content/25-02/20/pexels-pixabay-47730.jpg'
    }
  ];

  return (
    <div className="container">
      <div className="background" />
      
      <div className="overlay">
        <header>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Userbox_creeper.jpg" 
            alt="Profil Foto" 
            className="profilePic" 
          />
          <h1>Mambetov Aziz</h1>
          <p>Geleceğin Astronomu | Toktogul Satılganov Okulu</p>
        </header>

        <section className="info">
          <h2>👤 Hakkımda</h2>
          <ul>
            <li><strong>Doğum:</strong> 5 Temmuz 2012, İstanbul</li>
            <li><strong>Şu an:</strong> Kırgızistan'da yaşıyorum</li>
            <li><strong>Türkiye'de:</strong> 12 yıl yaşadım</li>
            <li><strong>Okul:</strong> Toktogul Satılganov Ortaokulu</li>
            <li><strong>Hedef Meslek:</strong> Astronom</li>
          </ul>
        </section>

        <section className="interests">
          <h2>🚀 İlgi Alanlarım</h2>
          <div className="hobiContainer">
            {interests.map((hobi, index) => (
              <div key={index} className="hobi">
                <img src={hobi.img} alt={hobi.title} />
                <p>{hobi.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="goals">
          <h2>🎯 Hedeflerim</h2>
          <ul>
            <li>Rusçayı daha iyi öğrenmek</li>
            <li>İngilizceyi C1 seviyesine çıkarmak</li>
            <li>Yurt dışında iyi bir üniversite kazanmak</li>
            <li>Astronom olmak</li>
            <li>Dünya dışı yaşamı keşfetmek</li>
          </ul>
          <div className="extra">
            "Gökyüzüne bakan bir çocuk asla hayal kurmaktan vazgeçmez."
          </div>
        </section>

        <div className="spaceShip">
          <img 
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/0b0183fb-cc61-473e-aab3-a8bac2c453fc/df1zvxw-fc7c9c38-1eba-4e26-ac90-7f8dfda22d37.png" 
            alt="Uzay Gemisi" 
            className="floppa" 
          />
        </div>

        <footer>
          <p>&copy; {new Date().getFullYear()} Mambetov Aziz</p>
        </footer>
      </div>
    </div>
  );
}

export default App;