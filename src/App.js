import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; 
import Loading from './screens/Loading';
import Ourteam from './screens/ourTeam';
import Toolbox from './screens/toolbox';
import Homepage from './screens/homepage';
import Aboutus from './screens/aboutus';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/toolbox" element={<Toolbox />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </div>
  );
};

export default App;
