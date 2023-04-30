import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import RealEstateListPage from './Pages/RealEstateList/RealEstateListPage';
import SelectedRealEstatePage from './Pages/SelectedRealEstate/SelectedRealEstatePage';
import AddNewRealEstatePage from './Pages/AddNewRealEstate/AddNewRealEstatePage';
import axios from 'axios';

function App() {

  const [realEstateList, setRealEstateList] = useState([]);

  useEffect(() => {
    axios.get("data/real-estates.json").then((response) => {
      setRealEstateList(response.data);
    })
  }, [])

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
          <nav className="navigation-menu">
            <NavLink style={{ textDecoration: 'none', }} to="">Real Estate List</NavLink>
            <NavLink style={{ textDecoration: 'none', }} to="add-new-real-estate">Add new Real Estate</NavLink>
          </nav>
          <div className="line-container">
            <hr className="full-width-line" />
          </div>
          <Routes>
            <Route path="/" element={<RealEstateListPage realEstateList={realEstateList} />} />
            <Route path="/add-new-real-estate" element={<AddNewRealEstatePage onAddRealEstate={handleAddRealEstate} />} />
            <Route path="/selected-real-estate/:id" element={<SelectedRealEstatePage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
