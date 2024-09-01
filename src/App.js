import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Before_login from './pages/before_login/Before_login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Before_login/>}  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
