import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import SurveyPage from './assets/pages/SurveyPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SurveyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
