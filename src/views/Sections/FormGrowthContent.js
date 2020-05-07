import React from 'react';

import { Row } from 'reactstrap'

import LeftGrowth from '../Sections/LeftGrowth';
import FormGrowth from '../Sections/FormGrowth'

export default function Starter() {
  return (
        <Row className="row-grid justify-content-between align-items-top mt-lg">
          <LeftGrowth />
          <FormGrowth />
        </Row>
  );
}