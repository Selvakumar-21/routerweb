import React from "react";
import Layout from "./../components/Layout";
import { Link } from "react-router-dom";
import "../style/HomeStyles.css";
import First from "../images/First-image.jpg";


const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${First})` }}>
        <div className="headerContainer">
          <h1>Food Paradise</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
    
    
  );
};

export default Home;