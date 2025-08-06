import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CourseCatalog from './pages/CourseCatalog';
import University from './pages/University';
import CourseDetail from './pages/CourseDetail';
import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';
import Settings from './pages/Settings';
import History from './pages/History';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<CourseCatalog />} />
          <Route path="/university/:id" element={<University />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
