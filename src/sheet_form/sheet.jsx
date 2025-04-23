import React, { useState } from 'react';

const ShowSheet = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


const handleSubmit = (e) => {
  e.preventDefault();  // Corrected function call (with parentheses)
  const body = `Name=${name}&Email=${email}&Message=${message}`;
  const data = {
    "Name": name,
    "Email": email,
    "Message": message,
  }
  console.log("Body",body)
  console.log("data",data)
  const url = "https://cors-anywhere.herokuapp.com/script.google.com/macros/s/AKfycbyUNyImgeF64Wa0Nns-or7ddNpoWX9AkhO9J04x4OmfOinxIk-ISSgCnHAA-VMPLlcEUw/exec";
  
  // Use the state variables directly in the body
  
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body, // Send the data using the state values
  })
    .then(res => res.text())
    .then(data => {
      alert(data); // Show alert with the response data
    })
    .catch(error => alert('Error: ' + error + error.Message)); // Alert if an error occurs
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
            
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShowSheet;
