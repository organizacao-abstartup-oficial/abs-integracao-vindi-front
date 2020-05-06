import React from "react";

import { Container, Card, Row, Col, CardImg, CardBody, Button, UncontrolledCollapse } from 'reactstrap';

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
                <Button color="primary" id="toggler" full style={{ marginBottom: '1rem', marginTop:  '1rem', width: '100%' }}>
                  Ver benefícios
                </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card>
                      <CardBody>
                      <h4>BASIC</h4>
                        <hr/>
                        <li>Descontos em eventos da ABStartups e de parceiros</li><br/>
                        <li>Acesso em alguns benefícios do Portal de Benefícios</li><br/>
                        <li>Acesso ao slack</li><br/>
                        <li>Newsletter exclusiva</li><br/>
                        <hr/>
                        <center>
                          <h5>GRÁTIS</h5>
                        </center>
                        
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
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
                <Button color="primary" id="toggler" full style={{ marginBottom: '1rem', marginTop:  '1rem', width: '100%' }}>
                  Ver benefícios
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                  <Card>
                    <CardBody>
                    <h4>GROWTH</h4>
                        <hr/>
                        <li>Start +</li><br/>
                        <li>Acesso total dos benefícios do Portal de Benefícios</li><br/>
                        <li>Comitês ABStartups</li><br/>
                        <li>Pitch Training</li><br/>
                        <li>Papo com Investidor</li><br/>
                        <li>1 Ingresso para o CASE</li><br/>
                        <li>Mentorias</li><br/>
                        <hr/>
                      <center>
                        <h5>10x de R$ 49,90</h5>
                        <p>ou Anuidade de R$399,00</p>
                      </center>

                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
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
                <Button color="primary" id="toggler" full style={{ marginBottom: '1rem', marginTop:  '1rem', width: '100%' }}>
                  Ver benefícios
                </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card>
                      <CardBody>
                      <h4>IMPACT</h4>
                          <hr/>
                          <li>Start +</li><br/>
                          <li>Growth +</li><br/>
                          <li>Ingresso VIP no CASE (acesso a sala VIP do evento)</li><br/>
                          <li>Jantar VIP do CASE</li><br/>
                          <li>Encontros Exclusivos (Jantar, Happy Hour)</li><br/>
                          <hr/>
                        <center>
                          <h5>10x de R$ 179,90</h5>
                          <p>ou Anuidade de R$1.499,00</p>
                        </center>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer />
        
      </>
  );
}


