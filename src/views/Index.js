import React from "react";

import { Container } from 'reactstrap';
import Lottie from 'react-lottie';

import { Link } from 'react-router-dom'

import startLottie from '../components/Animation/17056-smartsharp-animations-volume-2.json';
import growthLottie from '../components/Animation/17054-smartsharp-animations-volume-1.json';
import impactLottie from '../components/Animation/17053-smartsharp-animations-volume-1.json';

import logoAWS from '../assets/img/brand/aws.png';
import logoContaAzul from '../assets/img/brand/Logo_ContaAzul_Azul.png';
import logoPipedrive from '../assets/img/brand/pipedrive.png';
import logoHubSpot from '../assets/img/brand/hubspot.png';
import logoGCloud from '../assets/img/brand/google-cloud.png';

import Footer from "components/Footers/";

import Header from 'components/Header';



import { Button, Col, Row } from 'reactstrap'
//import Modals from "./Sections/Modals.js";


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import StarIcon from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function StarterForm() {

    const startAnimation = {
    loop: true,
    autoplay: true,
    animationData: startLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const growthAnimation = {
    loop: true,
    autoplay: true,
    animationData: growthLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const impactAnimation = {
    loop: true,
    autoplay: true,
    animationData: impactLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
      }
    };


  return (
    
      <>
        <Header/>
        <Container>
          <br/>
          
            <center>
              <h2 className="display-3">Acelere seu negócio com diversos benefícios para a sua startup crescer ainda mais. Cadastre-se já!</h2>
              <p>Se você tem um startup, não se preocupe, com a Abstartups você tem produtos e benefícios exclusivos para ajudar o seu negócio nas diferentes fases que ele se encontra. Veja abaixo os planos que oferecemos para te levar ainda mais longe ;)</p>
              <br/>
            </center>
            <br/>

            <Row>
                <Col md="12">
                  <center>
                    <h2><b>São mais de R$ 500 mil em benefícios para associados</b></h2>
                  </center>
                </Col>
                <Col md="2" className="m-3">
                  <center>
                    <img src={logoGCloud} alt="Google Cloud Plataform" width="150px" height="auto"/>
                  </center>
                </Col>
                <Col md="2" className="m-3">
                  <center>
                    <img src={logoHubSpot} alt="HubSpot" width="150px" height="auto"/>
                  </center>
                </Col>
                <Col md="2" className="m-3">
                  <center>
                    <img src={logoContaAzul} alt="Conta Azul" width="150px" height="auto"/>
                  </center>
                </Col>
                <Col md="2" className="m-3">
                  <center>
                    <img src={logoPipedrive} alt="Pipedrive" width="150px" height="auto"/>
                  </center>
                </Col>
                <Col md="2" className="m-3">
                  <center>
                    <img src={logoAWS} alt="Amazon AWS" width="150px" height="auto"/>
                  </center>
                </Col>
                <Col md="12">
                  <center>
                   <p><b>Networking produtos e mentorias em um só lugar. Veja tudo que a ABStartups pode te oferecer aqui!</b></p>
                  </center>
                </Col>
            </Row>
            <br/>

            <center>
            <h5><b>Cadastre-se</b></h5>
            <br/>
            
              <Button color="default" className="float-subscription--buttom" onClick={ () => { window.scrollTo({ top: 790, behavior: 'smooth' }) } }><KeyboardArrowDownIcon size="small"/></Button>
            </center>
            <br/>
            <br/>

            <hr/>

            <Row>

              <Col md="4">
                <Card>
                  <div>
                    <Lottie options={startAnimation}
                      height={200}
                      width={200}
                    />
                  </div>
                    <center>
                      <StarIcon/><StarIcon/>
                    </center>
                  <CardHeader
                    title='Start'
                    subheader= 'Para quem está começando e precisa daquele “empurrãozinho”, com diversos benefícios e auxílios, para fazer a sua startup acontecer.'
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                  />
                  <CardContent>

                        <hr/>

                        <div >
                          <Typography variant="h6" color="textPrimary" align="center">
                            GRÁTIS <br/>
                            Renovação anual
                          </Typography>
                        </div>

                        <hr/>
                        
                        <Typography variant="subtitle1" color="textPrimary" align="center" >
                          <CheckCircleOutlineIcon/> Acesso a todos os benefícios do Portal de Benefícios START
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Acesso ao Slack da nossa Comunidade de Associados
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Participação nos Comitês ABStartups
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Newsletter exclusiva
                        </Typography>

                        
                  </CardContent>

                  <center>
                    <Link to="/start">
                        <Button 
                          onClick={ () => { window.scrollTo({ top: 0, behavior: 'smooth' }) } }
                          fullwidth="true"
                          color="default"
                          type="button">
                          Seja um associado Start
                        </Button>
                      </Link>
                  </center>

                  <CardActions>
                  </CardActions>
                </Card>
              </Col>

              <Col md="4">
                <Card>
                  <div>
                    <Lottie options={growthAnimation}
                      height={200}
                      width={200}
                    />
                  </div>

                  <center>
                    <StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                  </center>

                  <CardHeader
                    title='Growth'
                    subheader= 'Para quem quer acelerar e fazer com que a sua startup supere os desafios do dia a dia, crescendo cada vez mais.'
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                  />
                  <br/>
                  <CardContent>
                        <hr/>
                        <div >
                          <Typography variant="h6" color="textPrimary" align="center">
                            12x de R$: 41,58 <br/>
                            ou R$: 399,00 /ano
                          </Typography>
                        </div>

                        <hr/>
                        
                        <Typography variant="subtitle1" align="center" >
                         <CheckCircleOutlineIcon/> Acesso a todos os benefícios do Portal de Benefícios START
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Acesso a todos os benefícios exclusivos do Portal de Benefícios GROWTH
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Acesso ao Slack da nossa Comunidade de Associados e ao grupo exclusivo de Founders no whatsapp
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Participação nos Comitês ABStartups
                        </Typography>

                        <br/>
                        
                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Newsletter exclusiva
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Participação nas mentorias de Pitch Training
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Participação nas mentorias de Papo com Investidor
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Participação em mentorias com Especialistas de diversas áreas (Jurídico, Vendas, Marketing, e entre outras)
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> 1 Ingresso VIP para o evento CASE.
                        </Typography>
                  </CardContent>

                  <center>
                    <Link to="/growth">
                        <Button 
                          onClick={ () => { window.scrollTo({ top: 0, behavior: 'smooth' }) } }
                          fullwidth="true"
                          color="default"
                          type="button">
                          Seja um associado Growth
                        </Button>
                      </Link>
                  </center>

                  <CardActions>
                    
                  </CardActions>
                </Card>
              </Col>

              <Col md="4">
                <Card>
                  <div>
                    <Lottie options={impactAnimation}
                      height={200}
                      width={200}
                    />
                  </div>
                    <center>
                      <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                    </center>
                  <CardHeader
                    title='Impact'
                    subheader= 'Para quem quer desenvolver seus conhecimentos, fomentar seu networking e melhorar ainda mais os seus números.'
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                  />
                    <CardContent>
                        <hr/>

                          <div >
                          <Typography variant="h6" color="textPrimary" align="center">
                            12x de R$: 149,92 <br/>
                            ou R$: 1499,00 /ano
                          </Typography>
                        </div>

                        <hr/>
                        
                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Acesso a todos os benefícios do Portal de Benefícios START
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Acesso a todos os benefícios exclusivos do Portal de Benefícios GROWTH
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Acesso ao Slack da nossa Comunidade de Associados e ao grupo exclusivo de Founders no whatsapp
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Participação nos Comitês ABStartups
                        </Typography>

                        <br/>
                        
                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Newsletter exclusiva
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Participação nas mentorias de Pitch Training
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Participação nas mentorias de Papo com Investidor
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Participação em mentorias com Especialistas de diversas áreas (Jurídico, Vendas, Marketing, e entre outras)
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> 1 Ingresso VIP para o evento CASE + Jantar Pré-evento
                        </Typography>

                        <br/>

                        <Typography variant="subtitle1" align="center" >
                          <CheckCircleOutlineIcon/> Participação nos eventos exclusivos de nettworking  como o Jantar Impact e Happy Hour
                        </Typography>

                    </CardContent>

                    <center>
                      <Link to="/impact">
                          <Button 
                            fullwidth="true"
                            color="default"
                            type="button">
                            Seja um associado Impact
                          </Button>
                        </Link>
                    </center>

                  <CardActions>        
                  </CardActions>
                </Card>
              </Col>



            </Row>
          
          <hr/>
         
          {/* <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/start">
                    <CardImg
                      alt="start"
                      src={require("assets/img/icons/common/starter.png")}
                    />
                  </Link>
                </Card>
                <Button color="primary" id="toggler" style={{ marginBottom: '1rem', marginTop:  '1rem', width: '100%' }}>
                  Ver benefícios
                </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card>
                      <CardBody>
                      <h4>START</h4>
                        <hr/>
                        <li>Descontos em eventos da ABStartups e de parceiros</li><br/>
                        <li>Acesso em alguns benefícios do Portal de Benefícios</li><br/>
                        <li>Acesso ao slack</li><br/>
                        <li>Newsletter exclusiva</li><br/>
                        <hr/>
                        <center>
                          <h5>GRÁTIS</h5>
                        </center>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
              </Col>
              <Col className="mb-5 mb-lg-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/growth">
                    <CardImg
                      alt=""
                      src={require("assets/img/icons/common/growth.png")}
                    />
                  </Link>
                </Card>
                <Button color="primary" id="toggler" style={{ marginBottom: '1rem', marginTop:  '1rem', width: '100%' }}>
                  Ver benefícios
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                  <Card>
                    <CardBody>
                    <section id="plain"></section>
                    <h4>GROWTH</h4>
                        <hr/>
                        <li>Acesso a todos os benefícios do Portal de Benefícios START</li><br/>
                        <li>Acesso a todos os benefícios exclusivos do Portal de Benefícios GROWTH</li><br/>
                        <li>Partipação nos Comitês ABStartups</li><br/>
                        <li>Participação nas mentorias de Pitch Training</li><br/>
                        <li>Participação nas mentorias de Papo com Investidor</li><br/>
                        <li>Participação em mentorias  com Especialistas de diversas áreas (Jurídico, Vendas, Marketing, e entre outras)</li><br/>
                        <li>Um ingresso para o evento CASE (incluir aqui o link do site do CASE)</li><br/>
                        <hr/>
                      <center>
                        <h5>10x de R$ 49,90</h5>
                        <p>ou Anuidade de R$399,00</p>
                      </center>

                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
              </Col>
              <Col className="mb-5 mb-lg-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/impact">
                    <CardImg
                      alt="impact"
                      src={require("assets/img/icons/common/impact.png")}
                      width="20px"
                      height="auto"
                    />
                  </Link>
                </Card>
                <Button color="primary" id="toggler" style={{ marginBottom: '1rem', marginTop:  '1rem', width: '100%' }} >
                  Ver benefícios
                </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card>
                      <CardBody>
                      <h4>IMPACT</h4>
                          <hr/>
                          <li>Start +</li><br/>
                          <li>Growth +</li><br/>
                          <li>Ingresso VIP no CASE (acesso a sala VIP do evento)</li><br/>
                          <li>Jantar VIP do CASE</li><br/>
                          <li>Encontros Exclusivos (Jantar, Happy Hour)</li><br/>
                          <hr/>
                        <center>
                          <h5>10x de R$ 179,90</h5>
                          <p>ou Anuidade de R$1.499,00</p>
                        </center>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
              </Col>
            </Row>
          </Container> */}
        </Container>
        <Footer />
        
      </>
  );
}


