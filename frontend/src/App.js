import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const options = [
    { value : 1, Label: 'Call'},
    { value : 2, Label: 'Put'}
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [s, setS] = useState(0);
  const [k, setK] = useState(0);
  const [t, setT] = useState(0);
  const [r, setR] = useState(0);
  const [sigma, setSigma] = useState(0);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async () => {
  const response = await fetch(`http://localhost:5000/black-scholes${selectedOption}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      S: s,
      K: k,
      T: t,
      r: r,
      sigma: sigma
    })
  });

  if (response.ok) {
    const data = await response.json();
    alert(`Result: ${data.result}`);
  } else {
    alert('Error calculating option price');
  }
};

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Black-Scholes Calculator
        </p>
      </header>
        <label>Select an Option </label>
          <select onChange={handleSelectChange} value={selectedOption}>
            <option value="">--Select an option--</option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.Label}
              </option>
            ))}
          </select>
          <br></br>
        <label>S </label>
        <input type="number" placeholder="S" value={s} onChange={e => setS(Number(e.target.value))} />
        <br></br>
        <label>K </label>
        <input type="number" placeholder="K" value={k} onChange={e => setK(Number(e.target.value))} />
        <br></br>
        <label>T </label>
        <input type="number" placeholder="T" value={t} onChange={e => setT(Number(e.target.value))} />
        <br></br>
        <label>r </label>
        <input type="number" placeholder="r" value={r} onChange={e => setR(Number(e.target.value))} />
        <br></br>
        <label>Sigma </label>
        <input type="number" placeholder="Sigma" value={sigma} onChange={e => setSigma(Number(e.target.value))} />
      

      <button className="Submit-Button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
