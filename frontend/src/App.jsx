import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MusicPlayer from './pages/MusicPlayer/MusicPlayer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MusicPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
