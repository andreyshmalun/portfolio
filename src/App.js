import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CaseStudy from './components/CaseStudy/CaseStudy'
import CaseStudy2 from './components/CaseStudy2/CaseStudy2'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/casestudy' element={<CaseStudy />} />
      <Route path='/casestudy2' element={<CaseStudy2 />} />

    </Routes>
  );
}

export default App;
