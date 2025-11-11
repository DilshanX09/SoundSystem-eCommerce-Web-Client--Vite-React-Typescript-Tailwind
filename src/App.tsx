import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeView from './views/Home.view';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/hello" element={<h1>Hello from Sound Crafters</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
