import React from "react";

import { Container } from 'reactstrap';


import Footer from 'components/Footers';

import Header from 'components/Header';

import FormGrowthContent from 'views/Sections/FormGrowthContent'

//import Modals from "./Sections/Modals.js";




export default function GrowthForm() {
  return (
    
      <>
        <Header/>
        <Container>
         <FormGrowthContent />
        </Container>
        <Footer />
        
      </>
  );
}


