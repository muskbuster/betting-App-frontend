import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';

function AllBetsPage() {
  const [allBets, setAllBets] = useState([]);

  useEffect(() => {
    // Fetch all bets from the API
    axios.get('https://fictional-bassoon-x4g9p7q5rww2vwv9-4000.app.github.dev/bets/allbets')
      .then((response) => {
        if (response.status === 200) {
          // Update the state with the retrieved bets
          setAllBets(response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching bets:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Bets</h2>
      <div className="bet-cards">
        {allBets.map((bet) => (
          <div className="bet-card" key={bet.bet_id}>
            <h3>{bet.bet_name}</h3>
            <p>{bet.bet_description}</p>
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default AllBetsPage;
