import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import RealEstateListPage from './Pages/RealEstateList/RealEstateListPage';
import SelectedRealEstatePage from './Pages/SelectedRealEstate/SelectedRealEstatePage';
import AddNewRealEstatePage from './Pages/AddNewRealEstate/AddNewRealEstatePage';

function App() {
  const [realEstateList, setRealEstateList] = useState([
    { id: 1, city: 'Cracow', bedrooms: 2, description: 'Spacious apartment in the city center', price: 500000 },
    { id: 2, city: 'Warsaw', bedrooms: 3, description: 'A modern apartment in a prestigious area', price: 750000 },
    { id: 3, city: 'Gdansk', bedrooms: 1, description: 'Charming apartment in the heart of the city', price: 350000 },
    { id: 4, city: 'Poznan', bedrooms: 2, description: 'Comfortable apartment in a quiet neighborhood', price: 450000 },
  ]);

  const handleAddRealEstate = (newRealEstate) => {
    console.log(newRealEstate);
    const updatedList = [...realEstateList, newRealEstate];
    setRealEstateList(updatedList);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <BrowserRouter>
          <nav class="navigation-menu">
            <NavLink style={{ textDecoration: 'none', }} to="real-estate-list">Real Estate List</NavLink>
            <NavLink style={{ textDecoration: 'none', }} to="add-new-real-estate">Add new Real Estate</NavLink>
          </nav>
          <div class="line-container">
            <hr class="full-width-line" />
          </div>
          <Routes>
            <Route path="/real-estate-list" element={<RealEstateListPage realEstateList={realEstateList} />} />
            <Route path="/add-new-real-estate" element={<AddNewRealEstatePage onAddRealEstate={handleAddRealEstate} />} />
            <Route path="/selected-real-estate/:id" element={<SelectedRealEstatePage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
