import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Answers from './pages/Answers';
import NotFoundPage from './pages/NotFoundPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SurveyPage />} />
          <Route path="/answers" element={<Answers />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
