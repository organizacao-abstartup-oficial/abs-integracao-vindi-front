import React from 'react';

import { Row } from 'reactstrap'

import LeftRenovacao from './LeftRenovacao';
import FormRenovacao from '../Sections/FormRenovacao'

export default function Renovacao() {
  return (
        <Row className="row-grid justify-content-between align-items-top mt-lg">
          <LeftRenovacao />
          <FormRenovacao />
        </Row>
  );
}