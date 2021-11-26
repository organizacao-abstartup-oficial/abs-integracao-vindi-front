import React, { useState, useEffect } from 'react';

import { Row } from 'reactstrap'

import LeftRenovacao from './LeftRenovacao';
import FormRenovacao from '../Sections/FormRenovacao'

export default function Renovacao() {
  const [ hasCoupon, setHasCoupon ] = useState(false);
  
  const changeCouponState = (params) => {
    setHasCoupon(params);
    localStorage.setItem('has_coupon', params);
  };

  useEffect(() => { localStorage.removeItem('has_coupon') }, [])

  return (
        <Row className="row-grid justify-content-between align-items-top mt-lg">
          <LeftRenovacao hasCoupon={hasCoupon} />
          <FormRenovacao couponCallback={changeCouponState} />
        </Row>
  );
}