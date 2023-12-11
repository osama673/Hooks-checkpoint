import './App.css';
import MOviesList from './components/MOviesList';
import NavBar from './components/NavBar';
import React, { useState } from 'react';


function App() {
    const [search, setSearch] = useState("");
   const [rate, setRate] = useState(0);
   
  return (
    <div className="App">
     <NavBar setSearch={setSearch} setRate={setRate} rate={rate}/>
     <MOviesList rate={rate} search={search} />
    </div>
  );
}

export default App;
