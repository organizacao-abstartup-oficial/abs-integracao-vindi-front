
import React from "react";

import { Col } from "reactstrap";
import Lottie from 'react-lottie';
import renewLottie from '../../components/Animation/28828-laboratorio.json';

export default function LeftRenovacao() {

  const renewAnimation = {
    loop: true,
    autoplay: true,
    animationData: renewLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
      }
  };

  return (
    <>
      <Col lg="4">
        <h3 className="h4 text-success font-weight-bold mb-4">
          Renovação de Plano
        </h3>
        
        <p><b>Para dar início a sua renovação e encontrarmos o seu cadastro, nos informe o CNPJ da sua startup.</b></p>
        <center>
          <Lottie options={renewAnimation}
            height={300}
            width={300}
          />
        </center>

        <br/>
        <center>
          <h5>10 anos de Abstartups</h5>
          <h5>Renovação ou upgrade para Growth</h5>
          <h4 style={{ color: 'red'}}><b>R$: 199</b></h4>
          <p>*Válido até 10/04 para novas associações, migração de plano ou renovação. Somente para pagamentos à vista no cartão de crédito</p>
        </center>
        <br/>
        <p><b>Estamos com tudo pronto para mais este ano de parceria, vamos lá.</b></p>
        <br/>
        <hr/>
      </Col>
    </>
  );
}

