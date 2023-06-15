import {   BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
		<BrowserRouter>

		<Routes>
			<Route path='/' element={<Home/>} />
			<Route path='/login' element={<Login/>} />
			<Route path='/register' element={<Register/>} />
		</Routes>
		
		</BrowserRouter>
    
    </div>
  );
}

export default App;
