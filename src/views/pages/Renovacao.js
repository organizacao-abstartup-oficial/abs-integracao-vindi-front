import React from "react";

import { Container } from 'reactstrap';

import Footer from '../../components/Footers';

import Header from '../../components/Headers';

import RenovacaoContent from 'views/Sections/RenovacaoContent'


export default function RenovacaoForm() {
  return (
    
      <>
        <Header/>
          <Container className="contain-body--form">
            <RenovacaoContent />
          </Container>
        <Footer/>
      </>
  );
}


