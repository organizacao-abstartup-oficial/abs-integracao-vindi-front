
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

          <Lottie options={renewAnimation}
            height={300}
            width={300}
          />

        <br/>
        <p><b>Estamos com tudo pronto para mais este ano de parceria, vamos lá.</b></p>
        <br/>
        <hr/>
      </Col>
    </>
  );
}

