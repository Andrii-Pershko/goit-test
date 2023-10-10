import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';

const Layout = lazy(() => import('./Layout/'));
const Home = lazy(() => import('../Page/Home'));
const Favorites = lazy(() => import('../Page/Favorites'));
const Catalog = lazy(() => import('../Page/Catalog'));

// const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="catalog" element={<Catalog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
