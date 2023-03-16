import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import css from '../components/App.module.css';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CharacterPage = lazy(() => import('./pages/CharacterPage/CharacterPage'));
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);
// const DetailsMoviePage = lazy(() =>
//   import('pages/DetailsMoviePage/DetailsMoviePage')
// );

const App = () => {
  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/character" element={<CharacterPage />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* <Route path="/movies/:movieId/*" element={<DetailsMoviePage />} /> */}
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
