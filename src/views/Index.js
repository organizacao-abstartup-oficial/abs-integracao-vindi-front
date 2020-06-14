import React from "react";

import { Container } from 'reactstrap';
import Lottie from 'react-lottie';

import { Link } from 'react-router-dom'

import startLottie from '../components/Animation/17056-smartsharp-animations-volume-2.json';
import growthLottie from '../components/Animation/17054-smartsharp-animations-volume-1.json';



import Footer from "components/Footers/";

import Header from 'components/Header';

import { Button, Col, Row } from 'reactstrap'
//import Modals from "./Sections/Modals.js";




export default function StarterForm() {

    const startAnimation = {
    loop: true,
    autoplay: true,
    animationData: startLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const growthAnimation = {
    loop: true,
    autoplay: true,
    animationData: growthLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
      }
    };


  return (
    
      <>
        <Header/>
        <Container>
          <br/>
          
            <center>
              <h2 className="display-3">Espaço exclusivo para cadastro de novos assinantes.</h2>
              <p>Estamos ansiosos para compartilhar os benefícios exclusivos reservados com muito empenho para os nossos associados, mas primeiro, precisamos conhecê-lo melhor, faça o seu cadastro ;)</p>
              <br/>
            </center>
            <br/>

            <Row>
              <Col md="6">
                <center>

                    <div>
                    <Lottie options={startAnimation}
                        height={200}
                        width={200}
                      />
                    </div>
                    <br/>
                    <p>Para quem está iniciando sua startup, mas tem grandes ambições e precisa da quele "empurrãozinho".</p>
                    <Link to="/start">
                    <Button 
                      fullwidth
                      color="default"
                      type="button">
                      Assinar plano Start
                    </Button>
                  </Link>
                </center>
              </Col>

              <Col>
                <center>
                    <div>
                      <Lottie options={growthAnimation}
                        height={200}
                        width={200}
                      />
                    </div>
                    <br/>
                    <p>Para quem quer voar baixo e avançar para o próximo nível no empreendedorismo.</p>
                  <Link to="/growth">
                    <Button 
                      fullwidth
                      color="default"
                      type="button">
                      Assinar plano Growth
                    </Button>
                  </Link>
                </center>
              </Col>
            </Row>
          
          <hr/>
         
          {/* <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/start">
                    <CardImg
                      alt="start"
                      src={require("assets/img/icons/common/starter.png")}
                    />
                  </Link>
                </Card>
                <Button color="primary" id="toggler" style={{ marginBottom: '1rem', marginTop:  '1rem', width: '100%' }}>
                  Ver benefícios
                </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card>
                      <CardBody>
                      <h4>START</h4>
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
                      alt=""
                      src={require("assets/img/icons/common/growth.png")}
                    />
                  </Link>
                </Card>
                <Button color="primary" id="toggler" style={{ marginBottom: '1rem', marginTop:  '1rem', width: '100%' }}>
                  Ver benefícios
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                  <Card>
                    <CardBody>
                    <section id="plain"></section>
                    <h4>GROWTH</h4>
                        <hr/>
                        <li>Acesso a todos os benefícios do Portal de Benefícios START</li><br/>
                        <li>Acesso a todos os benefícios exclusivos do Portal de Benefícios GROWTH</li><br/>
                        <li>Partipação nos Comitês ABStartups</li><br/>
                        <li>Participação nas mentorias de Pitch Training</li><br/>
                        <li>Participação nas mentorias de Papo com Investidor</li><br/>
                        <li>Participação em mentorias  com Especialistas de diversas áreas (Jurídico, Vendas, Marketing, e entre outras)</li><br/>
                        <li>Um ingresso para o evento CASE (incluir aqui o link do site do CASE)</li><br/>
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
                      alt="impact"
                      src={require("assets/img/icons/common/impact.png")}
                      width="20px"
                      height="auto"
                    />
                  </Link>
                </Card>
                <Button color="primary" id="toggler" style={{ marginBottom: '1rem', marginTop:  '1rem', width: '100%' }} >
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
          </Container> */}
        </Container>
        <Footer />
        
      </>
  );
}


