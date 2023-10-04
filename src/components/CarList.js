import React from 'react';
import CarCard from './CarCard';
import './CarList.css';

function CarList({ cars }) {
  return (
    <div className="car-list">
      {cars.map((car, index) => (
          <CarCard car={car} />
      ))}
    </div>
  );
}

export default CarList;

