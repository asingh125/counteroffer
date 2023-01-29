import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import CasesPage from './components/CasesPage';


function App() {

  useEffect(() => {

    // Fetch the username from the cookie
    // async function fetch() {
    //   await getUser().then((response) => {
    //     if ("response is not null") {
    //       setUser("INSERT USERNAME HERE");
    //     }
    //   })
    // }
    // fetch();

  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/cases" element={<CasesPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
