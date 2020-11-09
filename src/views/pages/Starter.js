import React from "react";

import { Container } from 'reactstrap';

import Footer from '../../components/Footers';

import Header from '../../components/Headers';

import FormStarterContent from 'views/Sections/FormStarterContent'


export default function StarterForm() {
  return (
    
      <>
        <Header/>
          <Container className="contain-body--form">
            <FormStarterContent />
          </Container>
        <Footer />
        
      </>
  );
}


