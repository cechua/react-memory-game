import React from "react";

const ScoreCounter = ({ currentScore, bestScore }) => {
  return (
    <div className="score-counter">
      <span>Current Score: {currentScore}</span>
      <span>Best Score: {bestScore}</span>
      <span>
        Game Mechanics: Select characters but you cannot select them twice or
        your score will be reset.
      </span>
    </div>
  );
};

export default ScoreCounter;
