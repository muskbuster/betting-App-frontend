import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BetDetails() {
  const { id } = "01"; // Get the bet_id from the URL parameter
  const [formData, setFormData] = useState({
    team1_amount: 0,
    team2_amount: 0,
  });

  useEffect(() => {
    // Fetch the details of the specific bet using the bet_id
    axios.patch(`https://fictional-bassoon-x4g9p7q5rww2vwv9-4000.app.github.dev/bets/allbets/0`)
      .then((response) => {
        if (response.status === 200) {
          // Update the form data with the retrieved bet details
          setFormData({
            team1_amount: response.data.bet_team1_amount,
            team2_amount: response.data.bet_team2_amount,
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching bet details:', error);
      });
  }, [id]); // Fetch data when the id parameter changes

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data object to send to the backend
    const dataToSend = {
      bet_id: parseInt(id),
      team1_amount: parseInt(formData.team1_amount),
      team2_amount: parseInt(formData.team2_amount),
    };

    // Send the data to the backend using Axios
    axios
      .patch(`https://fictional-bassoon-x4g9p7q5rww2vwv9-4000.app.github.dev/bets/allbets/:${id}`, dataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          // Bet details updated successfully, you can handle this accordingly
          console.log('Bet details updated successfully');
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error updating bet details:', error);
      });
  };

  return (
    <div>
      <h2>Bet Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Updated Team1 Amount"
          value={formData.team1_amount}
          onChange={(e) => setFormData({ ...formData, team1_amount: e.target.value })}
        />
        <input
          type="number"
          placeholder="Updated Team2 Amount"
          value={formData.team2_amount}
          onChange={(e) => setFormData({ ...formData, team2_amount: e.target.value })}
        />
        <button type="submit">Update Bet Details</button>
      </form>
    </div>
  );
}

export default BetDetails;
