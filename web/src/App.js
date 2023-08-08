import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles.css';

const App = () => {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/options" element={<Options />} />
              <Route path="/cafe" element={<Cafe />} />
              <Route path="/pub" element={<Pub />} />
              <Route path="/jardim" element={<Jardim />} />
              <Route path="/relatorio" element={<Relatorio />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

