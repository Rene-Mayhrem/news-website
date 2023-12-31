import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Authentication from './pages/authentication/Authentication';
import Home from './pages/home/Home';

function App() {
  return (

    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <Router>
        <Routes>
        <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Authentication />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;