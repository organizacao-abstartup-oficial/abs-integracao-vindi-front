import React from "react";

import { Container } from 'reactstrap';

import Footer from '../../components/Footers';

import Header from '../../components/Headers';

import FormGrowthContent from 'views/Sections/FormGrowthContent';


export default function GrowthForm() {
  return (
    
      <>
        <Header/>
          <Container className="contain-body--form">
            <FormGrowthContent />
          </Container>
        <Footer />
      </>
  );
}


