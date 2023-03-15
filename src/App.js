import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './components/homePage/homePage';
import DetailPage from './components/detailPage/detailPage';
import NotMatch from './components/notMatch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/detailPage" element={<DetailPage />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}

export default App;
