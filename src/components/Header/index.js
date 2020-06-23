import React from "react";

import { Row, Container } from "reactstrap";
import { Link } from 'react-router-dom'

import logoABS from '../../assets/img/brand/logo_abs.png';

export default function Nav() {

  return (
      <>

        <div className="top-color">

          <div className="top-color-yellow"></div>
          <div className="top-color-green"></div>
          <div className="top-color-green-white"></div>

        </div>
        <Container>
        <Row className="justify-content-center">
          <div>
            <Link to="/">
              <img src={logoABS} alt="logo" className="justify-content-center logo-top"/>
            </Link>
          </div>
        </Row>
        </Container>
        
      </>
  );
}

