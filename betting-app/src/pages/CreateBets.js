
import React, { useState } from 'react';
import axios from 'axios';

function CreateBetPage() {
  const [formData, setFormData] = useState({
    address: '',
    global_bet_id: 0,
    bet_id: 0,
    bet_team1: '',
    bet_team2: '',
    bet_description: '',
    bet_name: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data object to send to the backend
    const dataToSend = {
      address: formData.address,
      global_bet_id: parseInt(formData.global_bet_id),
      bet_id: parseInt(formData.bet_id),
      bet_team1: formData.bet_team1,
      bet_team2: formData.bet_team2,
      bet_description: formData.bet_description,
      bet_name: formData.bet_name,
    };

    // Send the data to the backend using Axios
    axios
      .post('https://fictional-bassoon-x4g9p7q5rww2vwv9-4000.app.github.dev/bets/allbets', dataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status === 201) {
          // Bet created successfully, you can handle this accordingly
          console.log('Bet created successfully');
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error creating bet:', error);
      });
  };

    // Style objects for form elements and button
    const inputStyle = {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    };

    const buttonStyle = {
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      padding: '10px 15px',
      borderRadius: '5px',
      cursor: 'pointer',
    };

    const buttonHoverStyle = {
      backgroundColor: '#2675c9',
    };

    return (
      <div>
        <h2>Create a New Bet</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User Address"
            style={inputStyle} // Apply the input style
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
          <input
            type="number"
            placeholder="Global Bet ID"
            style={inputStyle}
            value={formData.global_bet_id}
            onChange={(e) =>
              setFormData({ ...formData, global_bet_id: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Bet ID"
            style={inputStyle}
            value={formData.bet_id}
            onChange={(e) =>
              setFormData({ ...formData, bet_id: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Team A"
            style={inputStyle}
            value={formData.bet_team1}
            onChange={(e) =>
              setFormData({ ...formData, bet_team1: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Team B"
            style={inputStyle}
            value={formData.bet_team2}
            onChange={(e) =>
              setFormData({ ...formData, bet_team2: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Bet Description"
            style={inputStyle}
            value={formData.bet_description}
            onChange={(e) =>
              setFormData({ ...formData, bet_description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Bet Name"
            style={inputStyle}
            value={formData.bet_name}
            onChange={(e) =>
              setFormData({ ...formData, bet_name: e.target.value })
            }
          />
          <button
            type="submit"
            style={buttonStyle} // Apply the button style
          >
            Create Bet
          </button>
        </form>
      </div>
    );
  }


export default CreateBetPage;
