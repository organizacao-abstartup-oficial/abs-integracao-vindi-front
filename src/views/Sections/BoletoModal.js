import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import api from '../../Data/endPoints';
import { uuid } from 'uuidv4';

import { Button, Modal, ModalBody, Col } from 'reactstrap';
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
  const [ hasCoupon ] = useState(localStorage.getItem('has_coupon'));

  const toggle = () => setModal(!modal) ;

  const pathName = window.location.pathname;

  const planDefault = pathName === '/growth' ? (hasCoupon ? 258342 : 151756) : pathName === '/renovacao' ? (hasCoupon ? 258342 : 151756) : pathName === '/impact' ? 152208 : 0;
  const idCustomer = localStorage.getItem('consumer_id');
  const planRenew = parseInt(localStorage.getItem('plan_id'));

  const BankSlipData = {
    plan_id: planDefault === 0 ? planRenew : planDefault,
    customer_id: parseInt(idCustomer),
    payment_method_code: 'bank_slip',
    metadata: uuid(),
    invoice_split: false
  }
  

  function closeSession() {
    setModal(!modal) || localStorage.setItem('isLastStep', true)
  }

  async function SetPaymentBankSlip(){
      try {
        await api.post( 'vindi/payment/bankslip', BankSlipData)
        .then( response => {
          setBankSlipCode(response.data.body.bill.charges[0].last_transaction.gateway_response_fields.typeable_barcode);
          setBankSlipLink(response.data.body.bill.charges[0].print_url);
          localStorage.setItem('paymentSubmited', 'true');

          setTimeout(() => {
            localStorage.removeItem('paymentSubmited')
            localStorage.removeItem('isLastStep')
          }, 20000);
          
        })
        
      } catch (error) {
        toast.error('Houve um erro ao gerar seu boleto.')
        
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
      {bankSlipCode}
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
              onClick={() => { window.open(bankSlipLink, '_blank') ||  closeSession() } }
            >
            <PrintIcon/> Clique aqui para imprimir
          </Button>

          <p>Após copiar ou abrir o seu boleto, clique no botão a baixo para encerrar</p>

          <Button color="danger" onClick={ () => closeSession() }> Finalizar </Button>
        </center>
      </Col>
    </>

    )

  return (
    <div>
      <Col md="12">
        <div className="bankslip--act"><p><b>Você também pode fazer o pagamento via boleto</b> {' '}</p> <Button color="default" onClick={toggle}> <PrintIcon/> PAGAR COM BOLETO</Button></div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalBody>
            { bankSlipCode ? GenerateBankSlip : BankSlipGenerate }
          </ModalBody>
        </Modal>
      </Col>
    </div>
  )
}
