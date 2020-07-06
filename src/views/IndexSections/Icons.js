
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
// import { DiAngularSimple } from "react-icons/di";

class Icons extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg section-nucleo-icons pb-250">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">Proficiencies</h2>
                <p className="lead">
                  Over the years, we flow with the trend and we move with the tide in the world of programming. We are a team of developers proficient in various programming languages which includes
                </p>
                <div className="btn-wrapper">
                  <Button
                    color="primary"
                    href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/icons?ref=adsr-landing-page"
                  >
                    Contact Us
                  </Button>
                  <Button
                    className="mt-3 mt-md-0"
                    color="default"
                    href="https://nucleoapp.com/?ref=1712"
                    target="_blank"
                  >
                    View Portfolio
                  </Button>
                </div>
              </Col>
            </Row>
            {/* <div className="blur--hover">
              <a href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/icons?ref=adsr-landing-page">
                <div className="icons-container blur-item mt-5 on-screen">
                  <i className="icon ni ni-html5" />
                  <i className="icon icon-sm ni ni-album-2" />
                  <i className="icon icon-sm ni ni-app" />
                  <i className="icon icon-sm ni ni-atom" />
                  <i className="icon ni ni-bag-17" />
                  <i className="icon ni ni-bell-55" />
                  <i className="icon ni ni-credit-card" />
                  <i className="icon icon-sm ni ni-briefcase-24" />
                  <i className="icon icon-sm ni ni-building" />
                  <i className="icon icon-sm ni ni-button-play" />
                  <i className="icon ni ni-calendar-grid-58" />
                  <i className="icon ni ni-camera-compact" />
                  <i className="icon ni ni-chart-bar-32" />
                  <DiAngularSimple className="icon ife_icon icon-sm ni"/>
                </div>
                <span className="blur-hidden h5 text-dark">
                  We have Experts in over 100+ programming languages
                </span>
              </a>
            </div> */}
          </Container>
        </section>
      </>
    );
  }
}

export default Icons;
