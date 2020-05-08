
import React from "react";

import { Col } from "reactstrap";
import { Link } from 'react-router-dom';
import plainLogo from '../../assets/img/icons/common/starter.png'

export default function IndexSections() {
  return (
          <>
        <Col lg="4">
          <h3 className="h4 text-success font-weight-bold mb-4">
            NOVO CADASTRO
          </h3>
          <p>Informe seus dados pessoais para criar a sua conta. Você irá utilizar este login para todas as nossas atividades.</p>

          <img src={plainLogo} alt="starter" width="200px"/>
          <br/>
          <br/>

          <Link to="/">Clique aqui para mudar plano.</Link>
          
        </Col>
      </>
  );
}

