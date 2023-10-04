import React, { useState } from 'react';
import CarList from './components/CarList';
import Pagination from './components/Pagination';
import './App.css';
import sampleCars from './cars.json';
import SearchBar from './components/SearchBar';

function App() {
  
  const [cars] = useState(sampleCars);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <SearchBar setSearchQuery={setSearchQuery}/>
      <main>
        <CarList cars={currentCars} />
        <Pagination
          carsPerPage={carsPerPage}
          totalCars={filteredCars.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </main>
    </div>
  );
}

export default App;
