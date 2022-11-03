import { Route, Routes } from 'react-router-dom';
import Layout from './component/common/Layout';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
