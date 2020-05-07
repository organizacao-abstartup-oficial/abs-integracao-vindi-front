
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

import CreditCard from '../../components/CreditCard'
import Boleto from '../../components/Boleto'



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
              size="sm"
              isOpen={this.state.formModalCredit}
              toggle={() => this.toggleModal("formModalCredit")}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">

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
                <Card className="bg-secondary shadow border-0">

                <Boleto/>
                
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
