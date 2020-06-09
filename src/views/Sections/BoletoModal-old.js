import React, { useState } from 'react';
import axios from 'axios';
import { uuid } from 'uuidv4';

import { CopyToClipboard } from "react-copy-to-clipboard"; 

import {
  Button,
  Modal,
  Row,
  Col
} from "reactstrap";

import CropFreeIcon from '@material-ui/icons/CropFree';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PrintIcon from '@material-ui/icons/Print';





const BankSlipData = {
  plan_id: 151756,
  customer_id: 14702348,
  payment_method_code: 'bank_slip',
  metadata: uuid(),
  invoice_split: false
}



export default function BoletoModal() {

  const [StatusCall, setStatusCall] = useState();
  const [Banksliplink, setBanksliplink] = useState();
  const [Bankslipcode, setBankslipcode] = useState();
  const [ModalState, setModalState] = useState();

  async function SetPaymentBankSlip(){
    await axios.post( 'https://apiv1-abstartups.herokuapp.com/subscription/bankslip', BankSlipData)
    .then( response => {
      setBankslipcode(response.data.subscription.code);
      setBanksliplink(response.data.bill.url);
      setStatusCall(response.status);
    })
  }

    return (
      <>
        <Row>
        
          <Col md="12">
          <center>
            <Button
              block
              // color="success"
              type="button"
              onClick={() => this.toggleModal(true)}
            >
             <CropFreeIcon/> PAGAR COM BOLETO
            </Button>
            </center>

            <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={ModalState}
              toggle={() => this.toggleModal("formModalBol") ||  SetPaymentBankSlip() }
            >

            
              <div className="modal-body p-4">
              <center>
                <h2>BOLETO GERADO COM SUCESSO!</h2>
                <hr/>
                
                <div>
                  <h5>{ Bankslipcode ? Bankslipcode : 'Faio este caraleo' }</h5>
                </div>
                <div>

                <CopyToClipboard text={Bankslipcode}>
                    <Button
                    fullwidth
                    color="default"
                    type="button"
                    >
                     <FileCopyIcon/> Copiar código de barras
                    </Button>
                  </CopyToClipboard>
                  
                  <hr/>

                <Button
                    fullwidth
                    color="default"
                    type="button"
                    onClick={() => window.open(Banksliplink, '_blank')}
                  >
                  <PrintIcon/> Clique aqui para imprimir
                </Button>

                </div>
              </center>
              <br/>
              </div>
            </Modal>
          </Col>
        </Row>
      </>
    );
  }

