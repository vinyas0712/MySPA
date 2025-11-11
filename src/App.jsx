
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Page One</Link> | <Link to="/page-two">Page Two</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
      </Routes>
    </div>
  );
}

export default App;
