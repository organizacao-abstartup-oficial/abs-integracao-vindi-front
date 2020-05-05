import React from 'react';

import { Row } from 'reactstrap'

import LeftStarter from '../IndexSections/LeftStarter';
import FormStarter from '../IndexSections/FormStarter'

export default function Starter() {
  return (
        <Row className="row-grid justify-content-between align-items-center mt-lg">
          <LeftStarter />
          <FormStarter />
        </Row>
  );
}