import React, { useState } from 'react';

const ShowSheet = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Collect form data
    const formData = {
      name: name,
      email: email,
      message: message
    };
    console.log(formData);
    // Replace this URL with your Web App URL from Google Apps Script
    const sheetURL = 'https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbyUNyImgeF64Wa0Nns-or7ddNpoWX9AkhO9J04x4OmfOinxIk-ISSgCnHAA-VMPLlcEUw/exec';
  
     // Replace with your Google Apps Script Web App URL
//   const sheetURL = 'https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/YOUR_WEB_APP_URL/exec';

  try {
    // Send the request to Google Apps Script
    const response =  fetch(sheetURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),  // Sending form data as JSON
    });

    if (!response.ok) {
      // Handle server errors (e.g., 404, 500)
      throw new Error('Server error, please try again later.');
    }

    const data =  response.json();  // Parse the response JSON

    // If the response indicates success
    console.log('Success:', data);
    alert('Form Submitted Successfully!');

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  } catch (error) {
    // Handle errors (network, server issues, or unexpected)
    console.error('Error:', error);
    alert('Error Submitting Form: ' + error.message);
  }
    // fetch(sheetURL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),  // Ensure the form data is sent as JSON
    // })
    // .then(response => response.json())  // Parse the response as JSON
    // .then(data => {
    //   console.log('Success:', data);
    //   alert('Form Submitted Successfully!');
      
    //   // Clear the form fields
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    //   alert('Error Submitting Form');
    // });
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
