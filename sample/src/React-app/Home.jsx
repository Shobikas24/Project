import Background5 from "./images/background5.jpg";

import Section8 from "./Section8";
import Header from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Footer from "./Footer";
import "./Css/Home.css";
import Section12 from "./Section12";
function Home() {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: `url(${Background5})` }}
      >

      

        {/* Navbar */}
        <Header />

        {/* Section1 Card and Image */}
        <Section1 />

        {/* Section2 Services page card and text */}
        <Section2 />
        {/* Section3 About Us image and card */}

        <Section3 />

        {/* Section4 our prising */}

        <Section4 />
        {/* Section5 image and text*/}
        <Section5 />
        {/* Section6 */}
        <Section6 />
        <Section7 />
        <Section8 />
        <Section12 />
        <Footer />
      </div>
    </>
  );
}

export default Home;
