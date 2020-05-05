import React from "react";

import { Container } from 'reactstrap';


import Footer from "components/Footers/";

import Header from 'components/Header';

import FormStarterContent from 'views/IndexSections/FormStarterContent'

//import Modals from "./IndexSections/Modals.js";




export default function StarterForm() {
  return (
    
      <>
        <Header/>
        <Container>
         <FormStarterContent />
        </Container>
        <Footer />
        
      </>
  );
}


