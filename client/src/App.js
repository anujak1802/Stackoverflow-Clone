import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
      </Router>
    </div>
  );
}

export default App;
