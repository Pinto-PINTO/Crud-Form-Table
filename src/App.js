import React from 'react';
import './App.css';
import FormTag from './Components/FormTag';
import TableTag from './Components/TableTag';
import ErrorPage from './Components/ErrorPage';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/form" > Form </Link>
          <Link to="/table" > Table </Link>
        </nav>
        <Routes>

          <Route path="/form" element={<FormTag />} />
          <Route path="/table" element={<TableTag />} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
