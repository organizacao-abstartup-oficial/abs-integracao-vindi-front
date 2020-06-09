import React, { Component } from "react";

import {
  Button,
  Card,
  Modal,
  Row,
  Col
} from "reactstrap";

import CreditCardIcon from '@material-ui/icons/CreditCard';

import CreditCard from '../../components/CreditCard';

class CardModal extends Component {
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
          </Col>
        </Row>
      </>
    );
  }
}

export default CardModal;