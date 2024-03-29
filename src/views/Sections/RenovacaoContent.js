import React, { useState, useEffect } from 'react';

import { Row } from 'reactstrap'

import LeftRenovacao from './LeftRenovacao';
import FormRenovacao from '../Sections/FormRenovacao'

export default function Renovacao() {
  const [ couponData, setCouponData ] = useState(false);

  const changeCouponState = (params) => {
    setCouponData(params);
    localStorage.setItem('coupon_data', JSON.stringify(params));
  };

  useEffect(() => { localStorage.removeItem('coupon_data') }, [])

  return (
        <Row className="row-grid justify-content-between align-items-top mt-lg">
          <LeftRenovacao couponData={couponData} />
          <FormRenovacao couponCallback={changeCouponState} />
        </Row>
  );
}