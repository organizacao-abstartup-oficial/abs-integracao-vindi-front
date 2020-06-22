import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import Iframe from 'react-iframe'

import { Modal,  ModalBody, Col, Button } from 'reactstrap';

export default function Terms(props)  {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const termsOfUse = (
    <div>
      <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
  )

  return (
    <div>
      <Col md="12">
        <center>       
              <Button 
                onClick={toggle}
                className="Submit-button--add"
                fullwidth="true"
                color="default"
                type="button">
                Seja um associado Impact
              </Button>
        </center>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalBody>
            { termsOfUse }
          </ModalBody>
        </Modal>
      </Col>
    </div>
  )
}
