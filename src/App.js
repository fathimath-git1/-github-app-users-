import logo from './logo.svg';
import './App.css';
import Add from './compenent/Add';
import Search from './compenent/Search';
import Delete from './compenent/Delete';
import View from './compenent/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './compenent/Home';

function App() {
  return (
    <div>
       
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/Delete' element={<Delete/>}/>
        <Route path='/View' element={<View/>}/>
        </Routes></BrowserRouter>
   </div>
  );
}

export default App;
