import React from "react";

import { Container } from 'reactstrap';


import Footer from 'components/Footers';

import Header from 'components/Header';

import FormImpactContent from 'views/Sections/FormImpactContent'

//import Modals from "./Sections/Modals.js";




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


