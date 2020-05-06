import React from "react";

import { Container } from 'reactstrap';


import Footer from 'components/Footers';

import Header from 'components/Header';

import FormStarterContent from 'views/Sections/FormStarterContent'

//import Modals from "./Sections/Modals.js";




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


