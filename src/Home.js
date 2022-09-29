import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_list">
          <Product
            id="1"
            title="Razer Blade"
            price={6785850}
            image={process.env.PUBLIC_URL + "/images/Razer_blade.png"}
          />
          <Product
            id="2"
            title="End Custom PC "
            price={10551300}
            image={process.env.PUBLIC_URL + "/images/CustomPC.png"}
          />
          
          <Product
            id="3"
            title="Predator Throne"
            price={20015800}
            image={process.env.PUBLIC_URL + "/images/Predator_Throne.png"}
          />
          <Product
            id="4"
            title="Zoom Lilac"
            price={670000}
            image={process.env.PUBLIC_URL + "/images/zoom_lilac.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
