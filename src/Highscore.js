import React, { useState, useEffect } from 'react';
import './Highscore.css';

function HighScores() {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/highscores')
      .then(response => response.json())
      .then(data => setHighScores(data))
      .catch(error => console.error('Error fetching high scores:', error));
  }, []);

  // This function generates a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div>
      <h1 className="highscores-heading">High Scores</h1>
      <table className="highscores-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {highScores.map((score, index) => (
            <tr key={index}>
              {/* Apply the random color to the username */}
              <td style={{ color: getRandomColor() }}>{score.username}</td>
              <td className="highscores-score">{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HighScores;