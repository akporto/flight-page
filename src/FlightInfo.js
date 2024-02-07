import React from 'react';
import numberToWords from 'number-to-words';

const FlightInfo = ({ flight, index, visibleSection, toggleSection, onRemove }) => {
  const isVisible = (section) => visibleSection === section;

  const numberToWordsEnglish = (number) => {
    const digits = number.toString().split('');
    const words = digits.map(digit => numberToWords.toWords(parseInt(digit))).join(' ');
    return words;
  };

  return (
    <div className="flight-info">
      <h2>Informações do Voo {index + 1}</h2>
      <div className="flight-details">
        {isVisible('embarque') && (
          <div className='embarque'>
            <span>{flight.companyName}</span>
            <span>Voo: {flight.flightNumber}</span>
            <span>Com destino à: {flight.destination}</span>
            <span>Embarque Portão: {flight.gateNumber}</span>
            <p>
              {flight.companyName} flight {numberToWordsEnglish(flight.flightNumber)} to {flight.destination} now boarding gate {numberToWordsEnglish(flight.gateNumber)}
            </p>
          </div>
        )}
        {isVisible('chegada') && (
          <div className='chegada'>
            <span>A Sinart informa a chegada do {flight.companyName}</span>
            <span>Voo: {flight.arrivalFlightNumber}</span>
            <span>Procedente de: {flight.origin}</span>
            <p>
              Sinart informs {flight.companyName} flight {numberToWordsEnglish(flight.flightNumber)} from {flight.origin} has just arrived
            </p>
          </div>
        )}
        {isVisible('imediato') && (
          <div className='imediato'>
            <span>{flight.companyName}</span>
            <span>Voo: {flight.flightNumber}</span>
            <span>Com destino à: {flight.destination}</span>
            <span>Embarque Imediato Portão: {flight.gateNumber}</span>
            <p>
              {flight.companyName} flight {numberToWordsEnglish(flight.flightNumber)} to {flight.destination} now boarding gate {numberToWordsEnglish(flight.gateNumber)}
            </p>
          </div>
        )}
        {isVisible('ultimaChamada') && (
          <div className='ultimaChamada'>
            <span>Ultima Chamada {flight.companyName}</span>
            <span>Voo: {flight.flightNumber}</span>
            <span>Com destino à: {flight.destination}</span>
            <span>Embarque Imediato Portão: {flight.gateNumber}</span>
            <p>
              Last call {flight.companyName} flight {numberToWordsEnglish(flight.flightNumber)} to {flight.destination} now boarding gate {numberToWordsEnglish(flight.gateNumber)}
            </p>
          </div>
        )}
      </div>
      <div className="button-container">
        <button className='embarque' onClick={() => toggleSection('embarque')}>Embarque</button>
        <button className='chegada' onClick={() => toggleSection('chegada')}>Chegada</button>
        <button className='imediato' onClick={() => toggleSection('imediato')}>Imediato</button>
        <button className='ultima' onClick={() => toggleSection('ultimaChamada')}>Última Chamada</button>
        <button className='remover' onClick={() => {
  if (window.confirm('Tem certeza que deseja remover este voo?')) {
    onRemove(index);
  }
}}>Remover</button>
      </div>
    </div>
  );
};

export default FlightInfo;