
import React from "react";

import { Col } from "reactstrap";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import plainLogo from '../../assets/img/icons/common/start.png'

export default function LeftRenovacao() {
  return (
    <>
      <Col lg="4">
        <h3 className="h4 text-success font-weight-bold mb-4">
          Renovação
        </h3>
        
        <p>Informe seu CNPJ e faça o procedimento de renovação do seu plano.</p>

        <img src={plainLogo} alt="growth" width="200px"/>
        <br/>
        <br/>
        <h5><b>12x de R$ 41,58 ou R$ 399/ano</b></h5>
        <hr/>
        <p>Com o plano Growth você possui muito mais benefícios para que a sua startup chegue longe.</p>
      </Col>
    </>
  );
}

