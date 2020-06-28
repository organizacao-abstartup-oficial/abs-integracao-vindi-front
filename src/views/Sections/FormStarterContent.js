import React from 'react';

import { Row } from 'reactstrap'

import LeftStarter from '../Sections/LeftStarter';
import FormStarter from '../Sections/FormStart'

export default function Starter() {
  return (
        <Row className="row-grid justify-content-between align-items-top mt-lg">
          <LeftStarter />
          <FormStarter />
        </Row>
  );
}