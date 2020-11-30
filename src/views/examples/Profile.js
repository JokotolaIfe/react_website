
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-border"
                            src={require("assets/logo512.png")}
                          />
                        </a>
                      </div> 
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        {/* <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button> */}
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Send Us A Message
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Team of Developer</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Mobile Apps</span>
                        </div>
                        <div>
                          <span className="heading">89+</span>
                          <span className="description">Website Designed</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                        We are a group of highly experienced DevOps consultant with over 15 years of extensive IT Architecture and Management experience in a variety of market sectors, he has an in depth understanding of Cloud Architecture and Technology in conjunction with their related markets and strategies, marking himself as accomplished professional in designing, implementing and configuring a wide variety of Technologies such as Microservices, Cloud Architecture Integration, Application Development and Systems Solutions methodologies. Obi is currently focused on helping clients embrace Cloud Technologies showing them how it works and why it matters.
                        Having worked across a number of industries, including government, energy, gambling and finance, Hardish is a very adaptable engineer with a breadth of knowledge. Starting his career as a data engineer, he quickly found a passion for DevOps. We have worked with an array of companies to build cloud landscapes and introduce containerisation solutions. He is AWS certified and a certified kubernetes administrator.
                        </p>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Show more
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
                
              </Card>
            </Container>
          </section>  
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
