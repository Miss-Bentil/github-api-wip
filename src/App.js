import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from 'react-router-dom';
import Callback from './components/Callback';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/callback" element={<Callback/>} />
      </Routes>
    </div>
  );
}

export default App;
