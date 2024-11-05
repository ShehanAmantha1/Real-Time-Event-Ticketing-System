import React from 'react';
import Navbar from './Components/Navbar'; // Import the Navbar component
import Header from './Components/header';
import CategoryBrowse from './Components/CategoryBrowse';
import Slideshow from './Components/Slideshow';
import EventListVertical from './Components/EventList';
import Footer from './Components/Footer';



const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Slideshow/>
      <CategoryBrowse/>
      <EventListVertical/>
      <Footer />
    </div>
  );
};

export default App;
