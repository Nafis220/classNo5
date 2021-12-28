import React from "react"
import About from "./pages/About";
import Help from "./pages/Help";
import Home from "./pages/Home";
import { Router,  } from "@reach/router"
import ClockPage from "./pages/clockPage/ClockPage";
import Task from "./pages/task/task";


function App() {
  return (
    <Router>
    <Home path='/'/>
    <About path='/about'/>
    <Help path='/help'/>
    <ClockPage path='/clock' />
    <Task path = '/toDo'/>
    </Router>
 
  );
}

export default App;
