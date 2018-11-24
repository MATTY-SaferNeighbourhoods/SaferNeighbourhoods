import React from 'react';

const TheftComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'green',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );

export default TheftComponent; 
