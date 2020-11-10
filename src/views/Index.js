import React from 'react';

import { Col, Row, Spinner } from 'reactstrap';

export default function StarterForm() {

  const RedirectParam = '/';
  const URLContent = window.location.pathname;

  if ( RedirectParam === URLContent ){
    window.open('https://abstartups.com.br/planos/', '_self')
  }

  return (
    <div className="redirect-page" >
        <Row>
          <Col className="text-center content-redirect" >
            <h1><b>Aguarde...</b></h1>
            <h2><b>Você está sendo redirecionado!</b></h2>
            <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
          </Col>
        </Row>
    </div>
  );
}