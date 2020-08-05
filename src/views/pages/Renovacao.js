import React from "react";

import { Container } from 'reactstrap';


import Footer from 'components/Footers';

import Header from 'components/Header';

import RenovacaoContent from 'views/Sections/RenovacaoContent'

//import Modals from "./Sections/Modals.js";




export default function RenovacaoForm() {
  return (
    
      <>
        <Header/>
        <Container className="contain-body--form">
         <RenovacaoContent />
        </Container>
        <Footer />
        
      </>
  );
}


