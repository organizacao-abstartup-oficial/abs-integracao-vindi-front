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
          <p> Fala <b>{ FirstName[0] }</b>, como vai? </p>
          <p>já encontramos o cadastro de sua startup aqui em nossa base, agora falta pouco.</p>
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
        <p> Este acesso é para renovação de Associados já cadastrados na <b>ABStartups</b>, mas não se preocupe caso ainda não tenha o cadastro ativo nós vamos redirecionaremos para o formulário de cadastro.</p>
        <Button variant="contained"  onClick={ () => setModal(false)} color="primary" > Tudo pronto, vamos lá! </Button>
      </center>
    </div>
  )

  return (
    <div>
      <Col md="12">
      <h2>{ExistingCNPJ}</h2>
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
