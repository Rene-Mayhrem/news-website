import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Element from './components/Element';
import Initial from './layout/Initial';

function App() {
  return (
    
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <Router>
        <Routes>
          <Route exact path='/' element={<Element />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
