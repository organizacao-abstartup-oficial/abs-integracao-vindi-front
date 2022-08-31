import React, { useState } from 'react';

import { Modal,  ModalBody, ModalHeader, Col, Button } from 'reactstrap';
import Lottie from 'react-lottie';
import animationData from '../../components/Animation/7996-rocket-fast.json';

export default function Terms(props)  {
  const {
    className
  } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  const ExistingCNPJ = localStorage.getItem('cnpj');
  const ExistingName = localStorage.getItem('personal_name');
  let FirstName = '';

  if ( ExistingName ) {
    FirstName = ExistingName.split(" ")
  }


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const redirectUser = (

    <div>
      <center>
        <Lottie 
            options={defaultOptions}
            height={200}
            width={200}
        />
        <br/>
          <p> Fala<b>{ FirstName[0] === 'Não' ? '' : ' ' + FirstName[0] }</b>, tudo bem? </p>
          <p>Já encontramos o cadastro de sua <b>Startup</b>. Agora falta pouco.</p>
        <br/>
        <Button variant="contained"  onClick={ () => setModal(false)} color="primary" > Tudo pronto, vamos lá! </Button>
      </center>
    </div>
  )

    const directAcess = (
    <div>
      <center>
        <Lottie 
            options={defaultOptions}
            height={200}
            width={200}
        />
        <br/>
        <p> Este é o ambiente onde você realizará a renovação da assinatura com a <b>Abstartups</b>. Caso você não seja ainda um associado, iremos te direcionar para que possa criar o seu cadastro.</p>
        <Button variant="contained"  onClick={ () => setModal(false)} color="primary" > Tudo pronto, vamos lá! </Button>
      </center>
    </div>
  )

  return (
    <div>
      <Col md="12">
      <h4>Insira o CNPJ mais uma vez para que possamos validar seus dados.</h4>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Seja bem vindo!</ModalHeader>
          <ModalBody>
            { ExistingCNPJ ? redirectUser : directAcess }
          </ModalBody>
        </Modal>
      </Col>
    </div>
  )
}
