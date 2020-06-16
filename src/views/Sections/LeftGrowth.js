
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
          
          <p>Informe seus dados pessoais para criar a sua conta. <br/>
          Você irá utilizar este login para todas as nossas atividades.</p>

          <img src={plainLogo} alt="growth" width="200px"/>
          <br/>
          <br/>
          <h5><b>10x de R$ 41,58 ou R$ 399/ano</b></h5>
          <hr/>
          <p>Com o plano Growth você possui muito mais benefícios para que a sua startup chegue longe:</p>
          <ul>
            <li>Acesso a todos os benefícios do Portal de Benefícios START</li>
            <li>Acesso a todos os benefícios exclusivos do Portal de Benefícios GROWTH</li>
            <li>Acesso ao Slack da nossa Comunidade de Associados</li>
            <li>Participação nos Comitês ABStartups</li>
            <li>Newsletter exclusiva</li>
            <li>Participação nas mentorias de Pitch Training</li>
            <li>Participação nas mentorias de Papo com Investidor</li>
            <li>Participação em mentorias com Especialistas de diversas áreas (Jurídico, Vendas, Marketing, e entre outras)</li>
            <li>Um ingresso para o evento CASE </li>
          </ul>
        </Col>
      </>
  );
}

