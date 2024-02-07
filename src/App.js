import React from 'react';
import Header from "./Header";
import FlightForm from './FlightForm';
import FlightInfo from "./FlightInfo";
import Footer from './Footer';
import './App.css';

const SECTIONS = {
  EMBARQUE: 'embarque',
  CHEGADA: 'chegada',
  IMEDIATO: 'imediato',
  ULTIMA_CHAMADA: 'ultimaChamada',
};

function App() {
  const [flights, setFlights] = React.useState([]);
  const [visibleSection, setVisibleSection] = React.useState(SECTIONS.EMBARQUE);

  const handleAddFlight = (newFlight) => {
    setFlights([...flights, newFlight]);
    setVisibleSection(SECTIONS.EMBARQUE);
  };

  const handleRemoveFlight = (index) => {
    const updatedFlights = [...flights];
    updatedFlights.splice(index, 1);
    setFlights(updatedFlights);
  };

  const toggleSection = (section) => {
    setVisibleSection(section);
  };

  return (
    <div className="app-container">
      <Header />
      <FlightForm onAddFlight={handleAddFlight} />
      <div className="content-container">
        <div className="container">
          {flights.map((flight, index) => (
            <FlightInfo
              key={index}
              flight={flight}
              index={index}
              visibleSection={visibleSection}
              toggleSection={toggleSection}
              onRemove={handleRemoveFlight}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;