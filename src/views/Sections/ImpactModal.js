import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import Iframe from 'react-iframe'

import { Modal,  ModalBody, ModalHeader, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import InfoIcon from '@material-ui/icons/Info';

export default function StartModal(props)  {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const iframeImpact = (
    <div>
      <Iframe class="airtable-embed"
              url="https://abstartups.uppo.com.br"
              frameborder="0"
              onmousewheel=""
              width="100%"
              height="750"/>
    </div>
  )

  return (
    <div>
      <Col md="12">
        <center>       
              <Link onClick={toggle}><InfoIcon/> Benefícios Impact </Link>
        </center>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Benefícios Impact</ModalHeader>
          <ModalBody>
            { iframeImpact }
          </ModalBody>
        </Modal>
      </Col>
    </div>
  )
}
