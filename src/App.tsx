import * as React from "react";
import { Route, Routes } from "react-router-dom";

import CountryPage from "./pages/Country";
import HomePage from "./pages/Home";
import NotFountPage from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/country/:name" element={<CountryPage />}></Route>
        <Route path="*" element={<NotFountPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
