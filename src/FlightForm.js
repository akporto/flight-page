import React, { useState } from 'react';
import "./FlightForm.css"

function FlightForm({ onAddFlight }) {
  const [companyName, setCompanyName] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [destination, setDestination] = useState('');
  const [gateNumber, setGateNumber] = useState('');
  const [arrivalFlightNumber, setArrivalFlightNumber] = useState('');
  const [origin, setOrigin] = useState('');
 
  const handleAddFlight = () => {
    // Verifica se todos os campos estão preenchidos
    if (
      companyName.trim() === '' ||
      flightNumber.trim() === '' ||
      destination.trim() === '' ||
      gateNumber.trim() === '' ||
      arrivalFlightNumber.trim() === '' ||
      origin.trim() === ''
    ) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Verifica se os campos de número contêm apenas números
    if (isNaN(Number(flightNumber)) || isNaN(Number(gateNumber)) || isNaN(Number(arrivalFlightNumber))) {
      alert('Certifique-se de que os campos de número contenham apenas números.');
      return;
    }

    const newFlight = {
      companyName,
      flightNumber,
      destination,
      gateNumber,
      arrivalFlightNumber,
      origin,
    };

    onAddFlight(newFlight);

    // Limpa os campos após adicionar o voo
    setCompanyName('');
    setFlightNumber('');
    setDestination('');
    setGateNumber('');
    setArrivalFlightNumber('');
    setOrigin('');
  };

  return (
    <div className='container'>
        <div className='partida-info'>
      <span>Nome da Companhia: </span>
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <span>  Número do Voo: </span>
      <input
        type="text"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
      />
      <span> Destino: </span>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <span>Portão de embarque: </span>
      <input
        type="text"
        value={gateNumber}
        onChange={(e) => setGateNumber(e.target.value)}
      />
      </div>
      <div className="origem-info">
        <span>Número da Chegada:  </span>
        <input
          type="text"
          value={arrivalFlightNumber}
          onChange={(e) => setArrivalFlightNumber(e.target.value)}
        />
        <span>  Origem: </span>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </div>
      <button onClick={handleAddFlight}>Adicionar Voo</button>
    </div>
  );
}

export default FlightForm;
