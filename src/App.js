import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components';
import { Thankyou } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Thankyou' element={<Thankyou />} />
      </Routes>
    </Router>
  );
}

export default App;
