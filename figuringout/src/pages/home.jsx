import React from 'react'
import Hero from './Home/Hero';
import SearchSection from './Home/SearchSection';
import PopularTutorials from './Home/PopularTutorials';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
      <Hero />
      <SearchSection />
      <PopularTutorials />
    </div>
  );
}

export default Home