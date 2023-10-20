// Navbar.js
import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './navbar.css'; // Import the CSS file
import {ConnectButton} from '@suiet/wallet-kit';

const WalletNavbar = () => {
  const handleConnectWallet = () => {
    // Handle wallet connection logic here
    alert('Connect Wallet logic goes here');
  };

  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand className="navbar-brand">WC betting</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="navbar-btn">
          <Button variant="primary" onClick={handleConnectWallet}>
            Connect Wallet
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default WalletNavbar;
