import React from 'react';
import Navbar from './Components/Navbar'; // Import the Navbar component
import Header from './Components/header';
import CategoryBrowse from './Components/CategoryBrowse';
import Slideshow from './Components/Slideshow';
import EventListVertical from './Components/EventList';
import Footer from './Components/Footer';
import CreateEvent from './Components/CreateEvent';



const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Slideshow/>
      <CreateEvent/>
      <CategoryBrowse/>
      <EventListVertical/>
      
      <Footer />
    </div>
  );
};

export default App;
