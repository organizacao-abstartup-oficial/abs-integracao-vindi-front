import React from "react";

import { Container, Card, Row, Col, CardImg } from 'reactstrap';

import { Link } from 'react-router-dom'


import Footer from "components/Footers/";

import Header from 'components/Header';

//import Modals from "./Sections/Modals.js";




export default function StarterForm() {
  return (
    
      <>
        <Header/>
        <Container>
        <br/>
        <center>
          <h2 className="display-3">Selecione o Plano</h2>
        </center>
         
        <br/>
         
          <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/starter">
                    <CardImg
                      alt="..."
                      src={require("assets/img/icons/common/starter.png")}
                    />
                  </Link>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/growth">
                    <CardImg
                      alt="..."
                      src={require("assets/img/icons/common/growth.png")}
                    />
                  </Link>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/impact">
                    <CardImg
                      alt="..."
                      src={require("assets/img/icons/common/impact.png")}
                    />
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer />
        
      </>
  );
}


