import React from "react";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import Navigation2 from "../components/Navigation2";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="containers">
        <Navbar />
        <div className="container__item">
          <div className="grid__item1">
            <Navigation2 />
          </div>
          <div className="grid__item2">
            <HomeContent />
          home
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
