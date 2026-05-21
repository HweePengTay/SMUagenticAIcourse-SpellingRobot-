
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import ParentDashboard from './pages/ParentDashboard';
import ChildHome from './pages/ChildHome';
import UploadWordList from './pages/UploadWordList';
import ReviewWordList from './pages/ReviewWordList';
import TestIntro from './pages/TestIntro';
import SpellingTest from './pages/SpellingTest';
import WellDone from './pages/WellDone';
import TestResults from './pages/TestResults';
import ProgressAnalytics from './pages/ProgressAnalytics';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/parent" element={<ParentDashboard />} />
        <Route path="/child" element={<ChildHome />} />
        <Route path="/upload" element={<UploadWordList />} />
        <Route path="/review" element={<ReviewWordList />} />
        <Route path="/test-intro" element={<TestIntro />} />
        <Route path="/test" element={<SpellingTest />} />
        <Route path="/well-done" element={<WellDone />} />
        <Route path="/results" element={<TestResults />} />
        <Route path="/analytics" element={<ProgressAnalytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
