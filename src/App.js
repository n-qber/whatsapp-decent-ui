// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ale from './pages/Ale.tsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ale/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
