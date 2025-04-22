import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
const MyFunction = () => {
  const price = 20;
  const [quantity, setQuantity] = React.useState(1);
  const total = quantity * price; // Declare total with const or let

  return (
      <div> 
          <h2>Heading 1</h2>
          <div>element 1</div>
          <div>element 2</div>
          <div>element 3</div>
          <div>element 4</div>
          <div className="value">100</div>
          <div className="price">{price}</div>
          <div>Total: {total}</div> {/* Display the total */}
          <button onClick={() => setQuantity(quantity + 1)}>Plus</button>
          <button onClick={() => setQuantity(quantity - 1)}>Minus</button>
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyFunction />);