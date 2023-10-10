import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Favorites from "../Page/Favorites";
import Home from "../Page/Home";
import Catalog from "../Page/Catalog";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="favorites"
            element={<Favorites />}
          />
          <Route
            path="catalog"
            element={<Catalog />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
