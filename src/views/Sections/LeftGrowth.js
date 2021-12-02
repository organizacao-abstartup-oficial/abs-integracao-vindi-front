
import React from 'react';

import { Col } from "reactstrap";
import plainLogo from '../../assets/img/icons/common/growth.png'
import blackFridayLogo from '../../assets/img/icons/common/growth-black-friday.png'

export default function LeftGrowth({ hasCoupon }) {

  return (
    <>
      <Col lg="4">
        <h3 className="h4 text-success font-weight-bold mb-4">
          NOVO CADASTRO
        </h3>
        <p>Informe seus dados pessoais para criar a sua conta. Você irá utilizar este login para todas as nossas atividades.</p>
        <center>
          <img src={blackFridayLogo} alt="growth" width="200px"/>
          <br/>
          <br/>
          { hasCoupon ? 
              <h5><b>De R$ 399/ano <br/> por apenas R$ 319/ano</b></h5> 
            : 
              <h5><b>12x de R$ 41,58 <br/>ou R$ 399/ano</b></h5>
          }
        </center>
        <hr/>
        <p>Com o plano Growth você possui muito mais benefícios para que a sua startup chegue longe.</p>
        
      </Col>
    </>
  );
}

