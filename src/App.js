import React from "react";
import "./App.css";
import Quer from "./components/Quer";
import {selectUser} from './features/userSlice'
import Login from '/compo'

function App() {

const user = useSelector(selectUser)
  return (
    <div className="App">
      {
        user ? (   <Quer />) : (<Login/>)
      }
   
    </div>
  );
}

export default App;
