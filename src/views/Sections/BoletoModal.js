import React, { Component } from "react";
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



const URLBoleto = sessionStorage.getItem('banksliplink');
const BoletoNumber = sessionStorage.getItem('bankslipcode');

const BankSlipData = {
  plan_id: sessionStorage.getItem('plan_id'),
  customer_id: sessionStorage.getItem('customer_id'),
  payment_method_code: 'bank_slip',
  metadata: uuid(),
  invoice_split: false


}

async function SetPaymentBankSlip(){
  await axios.post( 'https://apiv1-abstartups.herokuapp.com/subscription/bankslip', BankSlipData)
  .then( response => {
    sessionStorage.setItem('bankslipcode', response.data.subscription.code);
    sessionStorage.setItem('banksliplink', response.data.bill.url);
  })
}


class BoletoModal extends Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };






  render() {
    return (
      <>
        <Row>
        
          <Col md="12">
          <center>
            <Button
              block
              // color="success"
              type="button"
              onClick={() => this.toggleModal("formModalBol")}
            >
             <CropFreeIcon/> PAGAR COM BOLETO
            </Button>
            </center>

            <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={this.state.formModalBol}
              toggle={() => this.toggleModal("formModalBol") ||  SetPaymentBankSlip() }
            >
              <div className="modal-body p-4">
              <center>
                <h2>BOLETO GERADO COM SUCESSO!</h2>
                <hr/>
                <div>
                  <h5>{BoletoNumber}</h5>
                </div>
                <div>

                <CopyToClipboard text={BoletoNumber}>
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
                    onClick={() => window.open(URLBoleto, '_blank')}
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
}

export default BoletoModal;