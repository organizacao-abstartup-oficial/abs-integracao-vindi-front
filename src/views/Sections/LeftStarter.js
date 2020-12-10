
import React from "react";

import { Col } from "reactstrap";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import plainLogo from '../../assets/img/icons/common/start.png'

export default function IndexSections() {
  return (
          <>
        <Col lg="4">
          <h3 className="h4 text-success font-weight-bold mb-4">
            NOVO CADASTRO
          </h3>
          <p>Informe os dados de sua startup para criar a sua conta. Você irá utilizar este login para todas as nossas atividades.</p>
          
          <center>
            <img src={plainLogo} alt="starter" width="200px"/>
            <br/>
            <br/>
            <h5><b>Plano Start - Grátis</b></h5>
          </center>
          <hr/>
          <p>Tenha acesso a benefícios e descontos exclusivos da Abstartups:</p>
          <p>Quer acelerar ainda mais sua startup com muito mais benefícios e vantagens? Conheça o nosso plano <b>Growth</b> clicando no botão abaixo.</p>

          <Link to="/growth"><Button variant="contained" fullWidth color="primary"> Seja Growth </Button></Link>

          
          
        </Col>
      </>
  );
}

