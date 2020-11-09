import React from "react";

import { Container } from 'reactstrap';

import Footer from '../../components/Footers';

import Header from '../../components/Headers';

import FormImpactContent from 'views/Sections/FormImpactContent'

export default function ImpactForm() {
  return (
    
      <>
        <Header/>
          <Container className="contain-body--form">
            <FormImpactContent />
          </Container>
        <Footer />
      </>
  );
}


