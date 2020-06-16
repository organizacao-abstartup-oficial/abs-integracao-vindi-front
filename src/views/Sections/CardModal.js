import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import Lottie from 'react-lottie';

import { Button, Modal, ModalHeader, ModalBody, Col } from 'reactstrap';
import CreditCardIcon from '@material-ui/icons/CreditCard';

import CreditCard from '../../components/CreditCard';
import animationData from '../../components/Animation/9917-success.json';

export default function BoletoModal(props)  {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [TransactionState, setTransactionState] = useState(localStorage.getItem('paymentSubmited'));

  const toggle = () => setModal(!modal);

  const PaymentStatus = TransactionState

    const animationSuccess = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  setInterval(() => {
    setTransactionState(localStorage.getItem('paymentSubmited'))
  }, 1000);

  useEffect(() => {
    if(PaymentStatus === "true") {
      setTimeout(() => {
        setModal(false);
      }, 5000);
    }
  }, [PaymentStatus])

  const CreditCardForm = (
    <>
      <Col md="12">
        <CreditCard/>
      </Col>
    </>

    )

  const CreditCardAdded = (
    <>
      <Col md="12">
        <center>

          <Lottie options={animationSuccess}
            height={100}
            width={100}
          />
          <br/>
          <p><b>Seu cartão foi adicionado com sucesso!</b></p>
          <p>Em alguns minutos você recebrá um email de confirmação, não esqueça de conferir sua caixa de Spam.</p>
        </center>
      </Col>
    </>
  )

  return (
    <div>
      <Col md="12">
        <Button  block color="default" type="button" onClick={toggle}> <CreditCardIcon/> PAGAR COM CARTÃO </Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Pagamento com Cartão de Crédito</ModalHeader>
          <ModalBody>
            { PaymentStatus === 'true' ? CreditCardAdded : CreditCardForm }
          </ModalBody>
        </Modal>
      </Col>
    </div>
  )
}
