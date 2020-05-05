import React from "react";

import { Container } from 'reactstrap';

import { Link } from 'react-router-dom'


import Footer from "components/Footers/";

import Header from 'components/Header';

//import Modals from "./Sections/Modals.js";




export default function StarterForm() {
  return (
    
      <>
        <Header/>
        <Container>
         <h1>Selecione o plano desejado</h1>
          <Link to="/starter"> STARTER </Link><br/>
          <Link to="/growth"> GROWTH </Link><br/>
          <Link to="/impact"> IMPACT </Link><br/>
        </Container>
        <Footer />
        
      </>
  );
}


