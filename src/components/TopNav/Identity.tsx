import React from 'react';
import logo from '/public/logo.png'; // Adjust the path to your logo

const Identity = () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Insight Care" style={{ height: '30px', marginRight: '10px' }} />
        <span>Insight Care</span>
    </div>
);

export default Identity;
