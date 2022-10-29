import React from 'react'
import Card from "../components/Card";
import Banner from '../components/Banner';


function Home() {
    return (
      <div className="Home">
        <Banner page="home"/>
        <Card />
      </div>
    );
  }
  
  export default Home;