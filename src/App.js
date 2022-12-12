import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CaseStudy from './components/CaseStudy/CaseStudy'
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/casestudy' element={<CaseStudy />} />
    </Routes>
  );
}

export default App;
