
import React from "react";

import { Col } from "reactstrap";
import plainLogo from '../../assets/img/icons/common/growth.png'

export default function IndexSections() {
  return (
          <>
        <Col lg="4">
          <h3 className="h4 text-success font-weight-bold mb-4">
            NOVO CADASTRO
          </h3>
          <p>Informe seus dados pessoais para criar a sua conta. </p>
          <p>Você irá utilizar este login para todas as nossas atividades.</p>

          <img src={plainLogo} alt="growth" width="200px"/>
          <br/>
          <hr/>
          <p>Informações adicionais do Plano</p>
        </Col>
      </>
  );
}

