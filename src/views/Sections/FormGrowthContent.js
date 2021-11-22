import React, { useState, useEffect } from 'react';

import { Row } from 'reactstrap'

import LeftGrowth from '../Sections/LeftGrowth';
import FormGrowth from '../Sections/FormGrowth'

export default function Starter() {
  const [ hasCoupon, setHasCoupon ] = useState(false);
  
  const changeCouponState = (params) => {
    setHasCoupon(params);
    localStorage.setItem('has_coupon', params);
  };

  useEffect(() => {
    window.onload = () => {
      localStorage.removeItem('has_coupon')
    }
  })

  return (
    <Row className="row-grid justify-content-between align-items-top mt-lg">
      <LeftGrowth hasCoupon={hasCoupon}/>
      <FormGrowth couponCallback={changeCouponState} />
    </Row>
  );
}