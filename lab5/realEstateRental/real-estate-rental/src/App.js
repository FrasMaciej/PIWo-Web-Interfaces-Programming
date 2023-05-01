import logo from './logo.svg';
import UserContext from './data/UserContext';

import { useEffect, useState, useContext, useReducer } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import RealEstateListPage from './Pages/RealEstateList/RealEstateListPage';
import SelectedRealEstatePage from './Pages/SelectedRealEstate/SelectedRealEstatePage';
import AddNewRealEstatePage from './Pages/AddNewRealEstate/AddNewRealEstatePage';
import LoginPage from './Pages/Login/LoginPage';

import axios from 'axios';
import UserInfo from './Pages/SharedComponents/UserInfo';
import BasketPage from './Pages/Basket/BasketPage';
import { MyReducerContext, initState, reducer } from './data/MyReducer';

function App() {

  const [realEstateList, setRealEstateList] = useState([]);
  const [userName] = useContext(UserContext);
  const [state, dispatcher] = useReducer(reducer, initState);

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
      <MyReducerContext.Provider value={[state, dispatcher]}>
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
                <div className="vertical-line-right">
                  <NavLink style={{ textDecoration: 'none', }} to="add-new-real-estate" className="nav-link-style">Add new Real Estate</NavLink>
                </div>
                <div>
                  <NavLink style={{ textDecoration: 'none', }} to="user-basket" className="nav-link-style">Basket</NavLink>
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
                <Route path="/user-basket" element={<BasketPage />} />
              </Routes>
            </BrowserRouter>
          </main>
        </UserContext.Provider>
      </MyReducerContext.Provider>
    </div>
  );
}

export default App;
