import React, { Component } from "react";

import {
  Button,
  Card,
  Modal,
  Row,
  Col
} from "reactstrap";

import CreditCardIcon from '@material-ui/icons/CreditCard';
import CropFreeIcon from '@material-ui/icons/CropFree';

import CreditCard from '../../components/CreditCard';


  const BoletoNumber = '34191.09040 12197.380442 54967.890002 8 82680000001000';
  const URLBoleto = 'https://api.aceitafacil.com/boleto/e2d0e88f-35d4-4224-93b4-0d4456279ac5/';


class Modals extends Component {
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
              color="default"
              type="button"
              onClick={() => this.toggleModal("formModalCredit")}
            >
             <CreditCardIcon/> PAGAR COM CARTÃO DE CRÉDITO
            </Button>
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
              size="fluid"
              isOpen={this.state.formModalCredit}
              toggle={() => this.toggleModal("formModalCredit")}
            >
              <div className="modal-body p-0">
                <Card className="border-0 center">
                
                  <CreditCard/>
                
                </Card>
              </div>
            </Modal>


            <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={this.state.formModalBol}
              toggle={() => this.toggleModal("formModalBol")}
            >
              <div className="modal-body p-0">
              <center>
                <h1>Pagamento com boleto</h1>
                <p>{BoletoNumber}</p>
                <button>Copiar código de Barras</button>
                <button href={URLBoleto}>Clique aqui para imprimir</button>
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

export default Modals;