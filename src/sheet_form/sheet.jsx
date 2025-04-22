import React, { useState } from 'react';

const ShowSheet = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      name,
      email,
      message
    };

    // Replace this URL with your Web App URL from Google Apps Script
    const sheetURL = 'https://script.google.com/macros/s/AKfycbyUNyImgeF64Wa0Nns-or7ddNpoWX9AkhO9J04x4OmfOinxIk-ISSgCnHAA-VMPLlcEUw/exec';

    fetch(sheetURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Form Submitted Successfully!');
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error Submitting Form');
    });
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShowSheet;
