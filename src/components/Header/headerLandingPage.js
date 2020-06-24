import React from "react";

import { Button, Col, Row, Container } from "reactstrap";

import ScrollAnimation from 'react-animate-on-scroll';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import logoABS from '../../assets/img/brand/white.png';
import logoAWS from '../../assets/img/brand/aws.png';
import logoContaAzul from '../../assets/img/brand/Logo_ContaAzul_Azul.png';
import logoPipedrive from '../../assets/img/brand/pipedrive.png';
import logoHubSpot from '../../assets/img/brand/hubspot.png';
import logoGCloud from '../../assets/img/brand/google-cloud.png';

export default function Nav() {

  return (
      <>

        <div className="top-color">

          <div className="top-color-yellow"></div>
          <div className="top-color-green"></div>
          <div className="top-color-green-white"></div>

        </div>
        <div className="header-ladingpage">
        <Container>
        <Row className="justify-content-center">
          <div>
            <img src={logoABS} alt="logo" className="justify-content-center logo-top"/>
          </div>
        </Row>
        <div className="top-banner--movie">
          <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
        
            <center>
              <h2 className="display-3">Quer dar aquele up na sua startup? <br/>Venha ser um associado ;)</h2>
              <p>Junte-se a maior rede de startups do Brasil. Com a Abstartups você tem produtos e benefícios exclusivos para te ajudar a ir ainda mais longe. Conheça nossos planos e acelere seu negócio com a gente!</p> 
            </center>
            <Row>
                <Col md="12" className="last-title">
                  <center>
                    <h2><b>São mais de R$ 500 mil em benefícios para associados</b></h2>
                  </center>
                </Col>
                <div className="sponsors">
                <Col md="2" className="m-3">
                  <center>
                    <img className="brand-sponsors" src={logoGCloud} alt="Google Cloud Plataform" width="150px" height="auto"/>
                  </center>
                </Col>
                <Col md="2" className="m-3">
                  <center>
                    <img className="brand-sponsors" src={logoHubSpot} alt="HubSpot" width="150px" height="auto"/>
                  </center>
                </Col>
                <Col md="2" className="m-3">
                  <center>
                    <img className="brand-sponsors" src={logoContaAzul} alt="Conta Azul" width="150px" height="auto"/>
                  </center>
                </Col>
                <Col md="2" className="m-3">
                  <center>
                    <img className="brand-sponsors" src={logoPipedrive} alt="Pipedrive" width="150px" height="auto"/>
                  </center>
                </Col>
                <Col md="2" className="m-3">
                  <center>
                    <img className="brand-sponsors" src={logoAWS} alt="Amazon AWS" width="150px" height="auto"/>
                  </center>
                </Col>
                </div>
                <Col md="12">
                  <center>
                   <p><b>Networking, produtos, mentorias e muito mais em um só lugar. Veja tudo que a Abstartups pode fazer por você! {'<3'}</b></p>
                  </center>
                </Col>
            </Row>

            <center>
            <h5><b>CADASTRE-SE</b></h5>
            <br/>
            
              <Button color="default" className="float-subscription--buttom" onClick={ () => { window.screen.width > 768 ? window.scrollTo({ top: 900, behavior: 'smooth' }) : window.scrollTo({ top: 2050, behavior: 'smooth' }) } }><KeyboardArrowDownIcon size="small"/></Button>

            </center>
            </ScrollAnimation>
            </div>
            <br/>
            <br/>
        </Container>
        </div>
        
      </>
  );
}

