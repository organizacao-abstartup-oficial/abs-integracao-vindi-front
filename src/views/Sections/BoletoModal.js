import React, { useState } from 'react';
import axios from 'axios';
import { uuid } from 'uuidv4';

import { Button, Modal, ModalHeader, ModalBody, Col } from 'reactstrap';
import PrintIcon from '@material-ui/icons/Print';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import { CopyToClipboard } from "react-copy-to-clipboard"; 

export default function BoletoModal(props)  {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [bankSlipCode, setBankSlipCode] = useState('');
  const [bankSlipLink, setBankSlipLink] = useState('');

  const toggle = () => setModal(!modal);

  const planDefault = 151756;
  const idCustomer = localStorage.getItem('consumer_id')

  const BankSlipData = {
    plan_id: planDefault,
    customer_id: parseInt(idCustomer),
    payment_method_code: 'bank_slip',
    metadata: uuid(),
    invoice_split: false
  }

  async function SetPaymentBankSlip(){
    
    console.log(BankSlipData)
    alert(BankSlipData)

      try {
      await axios.post( 'https://apiv1-abstartups.herokuapp.com/subscription/bankslip', BankSlipData)
      .then( response => {
        setBankSlipCode(response.data.bill.charges[0].last_transaction.gateway_response_fields.typeable_barcode);
        setBankSlipLink(response.data.bill.charges[0].print_url);
      })
        
      } catch (error) {
        alert('Houve um erro ao gerar seu boleto.')
        
      }
    }

  const BankSlipGenerate = (
    <>
      <Col md="12">
        <center>
          <p>Falta pouco para você fazer parte do nosso <b>time de associados!</b> ;)</p>
          <hr/>
          <Button
            block 
            onClick={SetPaymentBankSlip}
          >
          Clique aqui para gerar Boleto
          </Button>
        </center>
      </Col>
    </>

    )

  const GenerateBankSlip = (
    <>
      <Col md="12">
      <center>
        <CopyToClipboard text={bankSlipCode}>
            <Button
            block
            color="default"
            type="button"
            >
              <FileCopyIcon/> Copiar código de barras
            </Button>
          </CopyToClipboard>

          <hr/>

          <Button
              block
              color="default"
              type="button"
              onClick={() => window.open(bankSlipLink, '_blank')}
            >
            <PrintIcon/> Clique aqui para imprimir
          </Button>
        </center>
      </Col>
    </>

    )

  return (
    <div>
      <Col md="12">
        <Button  block color="danger" onClick={toggle}> <PrintIcon/> PAGAR COM BOLETO</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Pagamento com Boleto</ModalHeader>
          <ModalBody>
            { bankSlipCode ? GenerateBankSlip : BankSlipGenerate }
          </ModalBody>
        </Modal>
      </Col>
    </div>
  )
}
