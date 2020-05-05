import React from 'react';

import { Row } from 'reactstrap'

import LeftGrowth from '../Sections/LeftGrowth';
import FormStarter from '../Sections/FormStarter'

export default function Starter() {
  return (
        <Row className="row-grid justify-content-between align-items-center mt-lg">
          <LeftGrowth />
          <FormStarter />
        </Row>
  );
}