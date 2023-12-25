import Background5 from "./images/background5.jpg";


import Section7 from "./Section7";
import Section8 from "./Section8";
import Header from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import "./Css/Home.css";
import GridBasicExample from "./Section12";

function Home() {
  return (
    <>
      <div className="Banner">
        {/* Section1 */}

        <img
          className="Image1 img-fluid w-100 "
          src={Background5}
          alt="background5"
        />

        {/* Navbar */}
        <Header />

        {/* Section1 Card and Image */}
        <Section1 />

        {/* Section2 Services page card and text */}
        <Section2 />
        {/* Section3 About Us image and card */}

        <Section3 />

        {/* Section4 our prising */}

<Section4/>
        {/* Section5 image and text*/}
        <Section5/>
        {/* Section6 */}
       <Section6/>
        <Section7 />
        <Section8 />
        <GridBasicExample/>
      </div>
    </>
  );
}

export default Home;
