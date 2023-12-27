import Background1 from "./images/background1.jpg";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import './Css/Section6.css';
function Section6()
{
    return(
<div
          className="Section6"
          style={{ backgroundImage: `url(${Background1})` }}
        >
          <Container fluid>
            <Card className="Section6-card">
              <Card.Body className="Section6card-body ">
                <p className="Section6-p">PROGRESS</p>
                <Card.Title>
                  <h1>
                    <strong>Our Competence </strong>
                  </h1>
                </Card.Title>
                <Card.Text className="Section6card-title">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris ultrices risus eget nunc ullamcorper, ut consectetur
                    eros mattis. Praesent lobortis in est sit amet pretium.
                    Fusce ante libero, ultrices sed ullamcorper quis, volutpat
                    in metus. Mauris pulvinar, neque in porttitor faucibus.
                  </p>
                </Card.Text>
                <div className="mb-5 pb-5">
                <div class="progress1 pt-4">
                  <div class="Section6title-wrap">
                    <div class="progressbar-title mbr-fonts-style display-4">
                      <p>Interior Photography</p>
                    </div>
                    <span>92%</span>
                  </div>
                  <ProgressBar
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                    animated
                    now={92}
                  />
                </div>
                <div class="progress2 pt-4">
                  <div class="Section6title-wrap">
                    <div class="progressbar-title mbr-fonts-style display-4">
                      <p>Portrait Photo</p>
                    </div>
                    <span>71%</span>
                  </div>
                  <ProgressBar
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                    animated
                    now={71}
                  />
                </div>
                <div class="progress3 pt-4">
                  <div class="Section6title-wrap ">
                    <div class="progressbar-title mbr-fonts-style display-4">
                      <p>Art Photo</p>
                    </div>
                    <span>53%</span>
                  </div>
                  <ProgressBar 
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                    animated
                    now={53}
                  />
                </div>
                </div>
              </Card.Body>
            </Card>
          </Container>
        </div>

    );
}
export default Section6;