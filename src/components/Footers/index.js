
import React from "react";

import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Footers() {
  return (

      <>
        <footer className="footer has-cards">
          <Container className="container-lg">

          </Container>
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                  Acompanhe a gente nas redes sociais.
                </h3>
                
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com/abstartups"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Siga-nos
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com/ABStartups"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Curta nossa página
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.linkedin.com/company/2280154/"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-linkedin" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Oficial
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="instagram"
                  href="https://www.instagram.com/abstartups/"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Oficial
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="youtube"
                  href="https://www.youtube.com/channel/UCwj0JWfpPyx4X8ZUOQ_XsJA"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-youtube" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Acesse o nosso Canal
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © Copyright {new Date().getFullYear()}{" "}
                    ABStartups
                  | Todos os direitos reservados | Nós ❤️ Startups A Abstartups é uma organização sem fins lucrativos 
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="https://abstartups.com.br/"
                      target="_blank"
                    >
                      ABStartups
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://startupbase.com.br/home"
                      target="_blank"
                    >
                      StartupBase
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://case.abstartups.com.br/"
                      target="_blank"
                    >
                      CaseStudio
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://jobs.abstartups.com.br/"
                      target="_blank"
                    >
                      Jobs!
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>

  );
}
