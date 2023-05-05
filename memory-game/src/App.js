import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";
import ScoreCounter from "components/ScoreCounter";
import Card from "components/Card";

function App() {
  const CARDS_SELECTION = [
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageName: "Dmitri",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      imageName: "Edelgard",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/5/5e/Claude_Profile.jpg?width=640",
      imageName: "Claude",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/62/Hilda_Profile.jpg?width=640",
      imageName: "Hilda",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/b/bf/Bernadetta_Profile.jpg?width=640",
      imageName: "Bernadetta",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/c/c9/Dorothea_Profile.jpg?width=640",
      imageName: "Dorothea",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/3/35/Mercedes_Profile.jpg?width=640",
      imageName: "Mercedes",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/7/72/Lysithea_Profile.jpg?width=640",
      imageName: "Lysithea",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/c/c3/Ashe_Profile.jpg?width=640",
      imageName: "Ashe",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/1/1a/Caspar_Profile.jpg?width=640",
      imageName: "Caspar",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/98/Hubert_Profile.jpg?width=640",
      imageName: "Hubert",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/9a/Sylvain_Profile.jpg?width=640",
      imageName: "Sylvain",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/4/42/Lorenz_Profile.jpg?width=640",
      imageName: "Lorenz",
    },
  ];
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const onClickCard = (imageName) => {
    const selected = selectedCards.find((card) => card === imageName);
    if (selected) {
      if (bestScore < currentScore) setBestScore(currentScore);

      setCurrentScore(0);
      setSelectedCards([]);
    } else {
      setCurrentScore(currentScore + 1);
      setSelectedCards([...selectedCards, imageName]);
    }
    setCards(shuffleArray(cards));
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  useEffect(() => {
    setCards(CARDS_SELECTION);
  }, []);
  return (
    <div className="App">
      <Header />
      <ScoreCounter currentScore={currentScore} bestScore={bestScore} />
      <div className="cards-container">
        {cards?.map((card, i) => {
          return (
            <Card
              key={i}
              imageSrc={card.imageSrc}
              imageName={card.imageName}
              onClickHandler={() => onClickCard(card.imageName)}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
