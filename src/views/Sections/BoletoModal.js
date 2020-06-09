import React, { useState } from 'react';
// import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

export default function BoletoModal(props)  {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [statusBoleto, setStatusBoleto] = useState('');

  const toggle = () => setModal(!modal);

  const BankSlipData = {
    plan_id: 151756,
    customer_id: 14702348,
    payment_method_code: 'bank_slip',
    metadata: 'nome da informação extra',
    invoice_split: false
  }

  async function SetPaymentBankSlip(){
    console.log(BankSlipData)
    setStatusBoleto('Chama disparada')

    // await axios.post( 'https://apiv1-abstartups.herokuapp.com/subscription/bankslip', BankSlipData)
    // .then( response => {
    //   setBankslipcode(response.data.subscription.code);
    //   setBanksliplink(response.data.bill.url);
    //   setStatusCall(response.status);
    // })
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}>PAGAR COM BOLETO</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Pagamento com Boleto</ModalHeader>
        <ModalBody>
        INFORMAÇÕES ADICIONAIS

        <Button onClick={SetPaymentBankSlip}>Gerar Boleto</Button>
        <h1>{statusBoleto? 'Chamada disparada' : 'Erro na solicitação'}</h1>
        </ModalBody>
      </Modal>
    </div>
  )
}
