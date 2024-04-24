// Import necessary modules from React and CSS file
import React, { useState, useEffect } from 'react';
import './Highscore.css';

// Define HighScores component
function HighScores() {
  // Initialize state for high scores with an empty array
  const [highScores, setHighScores] = useState([]);

  // Use useEffect hook to fetch high scores data when component mounts
  useEffect(() => {
    fetch('http://localhost:4000/highscores') // Fetch data from server
      .then(response => response.json()) // Parse response as JSON
      .then(data => setHighScores(data)) // Update highScores state with fetched data
      .catch(error => console.error('Error fetching high scores:', error)); // Log any errors
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]; // Generate a random hexadecimal color
    }
    return color;
  };

  // Render the component
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
          {highScores.map((score, index) => ( // Map over highScores array to create a row for each score
            <tr key={index}>
              <td style={{ color: getRandomColor() }}>{score.username}</td> 
              <td className="highscores-score">{score.score}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HighScores; // Export HighScores component