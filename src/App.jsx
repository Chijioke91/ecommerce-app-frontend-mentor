import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/home';

export default function App() {
  useEffect(() => {
    alert(
      'Kindly note that this site is designed strictly for just mobile(375px) and desktop(1440px) screens.'
    );
  }, []);

  return (
    <div className="min-h-screen min-w-full font-kumb text-base selection:text-white selection:bg-[#ff7d1a]">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
