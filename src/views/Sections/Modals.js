
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
              onClick={() => this.toggleModal("formModal")}
            >
             <CreditCardIcon/> PAGAR COM CARTÃO DE CRÉDITO
            </Button>
            <Button
              block
              color="success"
              type="button"
              onClick={() => this.toggleModal("formModal")}
            >
             <CropFreeIcon/> PAGAR COM BOLETO
            </Button>
            </center>
            <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={this.state.formModal}
              toggle={() => this.toggleModal("formModal")}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">

                <h1>Formulário de Pagamento com Cartão de crédito</h1>
                
                </Card>
              </div>
            </Modal>
          </Col>
        </Row>
      </>
    );
  }
}

export default Modals;
