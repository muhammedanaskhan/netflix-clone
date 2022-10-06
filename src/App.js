import './App.css';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {

  //const user = {name: "anas"};
  const user=null;

  useEffect(() =>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
          //Logged in
          console.log(userAuth)
      }else{
          //Logged out
      }
    })
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>

            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}

      </Router>
    </div>
  );
}

export default App;
