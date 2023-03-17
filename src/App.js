import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './components/detailPage/detail';
import Home from './components/homePage/home';
import NotMatch from './components/notMatch';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
