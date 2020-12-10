
import React from "react";

import { Col } from "reactstrap";

import logoImpact from '../../assets/img/icons/common/impact.png'

export default function IndexSections() {
  
  return (
    
    <>
    <Col lg="4">
      <h3 className="h4 text-success font-weight-bold mb-4">
        Plano Impact
      </h3>
      
      <p><b>Parabéns por ser aprovado no <strong>Batch de Impacts</strong> estamos muito felizes! Para continuarmos esse grande momento, siga os passos a seguir.</b></p>

      <center>
        <img src={logoImpact} alt="Impact" />
      
        <br/>
        <p><b>Estamos com tudo pronto para continuar esse momento especial, vamos lá!</b></p>
        <br/>
      </center>
      <hr/>
    </Col>
  </>
  );
}

