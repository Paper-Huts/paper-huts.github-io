/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import LandingPageNavbar from "components/Navbars/LandingPageNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import LandingPageFooter from "components/Footers/LandingPageFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <LandingPageNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk product!</h2>
                <h5 className="description">
                  Have an idea or a an exisiting product in mind? <br />
                  We are passionate about ideation, design and execution. 
                  Our team of experienced creatives are dedicated to bringing 
                  the best out of your ideas to create aesthetically pleasing and engaging 
                  digital products.
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Meet the team</h2>
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          "https://media-exp3.licdn.com/dms/image/D5635AQFS6kOImQXqGA/profile-framedphoto-shrink_200_200/0/1622813401528?e=1624849200&v=beta&t=jQ_vPxqhN59OIXuNUCZnTl_3ERCrFELYh5_aAl60K1A"
                        }
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Edwin</CardTitle>
                        <h6 className="card-category">Co-Founder | Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      With a passion for coding that rivals his love for 
                      playing the piano. Edwin strives to execute product specifications 
                      with sturdy precision.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://github.com/eddybanks"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.linkedin.com/in/eddybanks03/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/faces/clem-onojeghuo-3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Carl</CardTitle>
                        <h6 className="card-category">Co-founder | Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://github.com/aycarl"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="https://behance.net/aycarl"
                      target="_blank"
                    >
                      <i className="fa fa-behance" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://linkedin.com/in/aycarl"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Have a request?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <LandingPageFooter />
    </>
  );
}

export default LandingPage;
