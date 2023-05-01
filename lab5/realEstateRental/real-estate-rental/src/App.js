import logo from './logo.svg';
import UserContext from './data/UserContext';

import { useEffect, useState, useContext } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import RealEstateListPage from './Pages/RealEstateList/RealEstateListPage';
import SelectedRealEstatePage from './Pages/SelectedRealEstate/SelectedRealEstatePage';
import AddNewRealEstatePage from './Pages/AddNewRealEstate/AddNewRealEstatePage';
import LoginPage from './Pages/Login/LoginPage';

import axios from 'axios';
import UserInfo from './Pages/SharedComponents/UserInfo';


function App() {

  const [realEstateList, setRealEstateList] = useState([]);
  const [userName] = useContext(UserContext);

  useEffect(() => {
    axios.get("data/real-estates.json").then((response) => {
      setRealEstateList(response.data);
    })
  }, [])

  const handleAddRealEstate = (newRealEstate) => {
    const updatedList = [...realEstateList, newRealEstate];
    setRealEstateList(updatedList);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <UserContext.Provider value={useState()}>
        <main>
          <BrowserRouter>
            <nav className="navigation-menu">
              <div></div>
              <div className="vertical-line-right">
                <NavLink style={{ textDecoration: 'none', }} to="" className="nav-link-style" >Login</NavLink>
              </div>
              <div className="vertical-line-right">
                <NavLink style={{ textDecoration: 'none', }} to="real-estates-list" className="nav-link-style" >Real Estate List</NavLink>
              </div>
              <div>
                <NavLink style={{ textDecoration: 'none', }} to="add-new-real-estate" className="nav-link-style">Add new Real Estate</NavLink>
              </div>
              <div className="user-info" >
                <UserInfo></UserInfo>
              </div>
            </nav>

            <div className="line-container">
              <hr className="full-width-line" />
            </div>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/add-new-real-estate" element={<AddNewRealEstatePage onAddRealEstate={handleAddRealEstate} />} />
              <Route path="/selected-real-estate/:id" element={<SelectedRealEstatePage />} />
              <Route path="/real-estates-list" element={<RealEstateListPage realEstateList={realEstateList} />} />
            </Routes>
          </BrowserRouter>
        </main>
      </UserContext.Provider>
    </div>
  );
}

export default App;
