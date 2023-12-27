import React from "react";
import Background3 from "./images/background3.jpg";
import Container from "react-bootstrap/Container";

const Map = () => (
  <div
    className="w-100  bg-no-repeat h-100 "
    style={{ backgroundImage: `url(${Background3})`,backgroundPosition:"50%50%",backgroundSize:"cover" }}
  >
    <Container className="pt-5 pb-5">
      <div className="google-map pt-5 pb-5" >
        <iframe
          title="Google Map"
          frameBorder="0"
          style={{
            border: 0,
            width: "100%",
            height: "500px",
            borderRadius: "30px",
            opacity: "0.8",
            backdropFilter: "blur(3.5px)",
          }}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCNveGQ9bfpKFwWzQLLftrR9hNiHwdqQG8&q=350+5th+Ave,New+York,NY+10118"
          allowFullScreen
        />
      </div>
    </Container>
  </div>
);

export default Map;
