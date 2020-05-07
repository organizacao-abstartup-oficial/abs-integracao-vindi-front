import React from 'react';

import { Row } from 'reactstrap'

import LeftImpact from '../Sections/LeftImpact';
import FormStarter from '../Sections/FormStarter'

export default function Starter() {
  return (
        <Row className="row-grid justify-content-between align-items-top mt-lg">
          <LeftImpact />
          <FormStarter />
        </Row>
  );
}