
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Initial from './layout/Initial';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Initial />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
