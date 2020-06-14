
import React from "react";

import { Col } from "reactstrap";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import plainLogo from '../../assets/img/icons/common/starter.png'

export default function IndexSections() {
  return (
          <>
        <Col lg="4">
          <h3 className="h4 text-success font-weight-bold mb-4">
            NOVO CADASTRO
          </h3>
          <p>Informe os dados de sua startup para criar a sua conta. Você irá utilizar este login para todas as nossas atividades.</p>

          <img src={plainLogo} alt="starter" width="200px"/>
          <br/>
          <br/>
          <b>Plano Start - Grátis</b>
          <p>Você selecionou o plano Start, que tal assinar o plano Growth?</p>
          <p>Com o Growth, sua startup tem mais benefícios e conta com mais visibilidade.</p>
          <p>Para se associar é simples, clique no botão a baixo e seja um <b>Associado Growth</b></p>

          <Link to="/growth"><Button variant="contained" fullWidth color="primary"> Seja um Growth </Button></Link>

          
          
        </Col>
      </>
  );
}

