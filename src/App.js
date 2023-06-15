import {   BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
		<BrowserRouter>

		<Routes>
			<Route path='/' element={<Home/>} />
			<Route path='/register' element={<Register/>} />
		</Routes>
		
		</BrowserRouter>
    
    </div>
  );
}

export default App;
