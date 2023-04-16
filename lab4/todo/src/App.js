import Main from './Pages/Main';
import './App.css';
import { useState } from 'react';
import Search from './Pages/Search'
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  const toDoListDefault = [
    "wpisać oceny",
    "sprawdzić zadanie",
    "kupić broń na poniedziałek Wielkanocny"
  ]

  const [toDoList, setToDoList] = useState(toDoListDefault);

  return (
    <div className="App">
      <header></header>
      <main>
        <BrowserRouter>
          <nav>
            <NavLink to="/">Main</NavLink>
            <NavLink to="search">Search</NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<Main toDoList={toDoList} setToDoList={setToDoList} />} />
            <Route path="/search" element={<Search toDoList={toDoList} />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer>A to footer</footer>
    </div>
  );
}

export default App;
