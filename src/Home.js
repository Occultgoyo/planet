import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        {/* <img className="home_backimg" src="" alt="" /> */}

        <div className="home_list">
          <Product id="1" title = "Razer Blade" price={6785850} image="images/Razer_blade.png"/>
          <Product id="2" title = "End Custom PC " price={10551300} image="images/CustomPC.png"/>
        {/* </div>
        <div className="home_list"> */}
        <Product id="3" title = "Predator Throne" price={20015800} image="images/Predator_Throne.png"/>
        <Product id="4" title = "Zoom Lilac" price={670000} image="images/zoom_lilac.png"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
