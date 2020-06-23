import React from "react";

import { Container } from 'reactstrap';
import Lottie from 'react-lottie';

import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import startLottie from '../components/Animation/17056-smartsharp-animations-volume-2.json';
import growthLottie from '../components/Animation/17054-smartsharp-animations-volume-1.json';
import impactLottie from '../components/Animation/17053-smartsharp-animations-volume-1.json';

import HeaderLandingPage from 'components/Header/headerLandingPage';
import Footer from "components/Footers/";
import ImpactSubscription from './Sections/ImpactSubscription'




import { Button, Col, Row } from 'reactstrap'
//import Modals from "./Sections/Modals.js";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import StarIcon from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';


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
        <HeaderLandingPage/>
        <div className="landingpage-benefits">
        <Container>
            <br/>
            <br/>
            
            <hr/>

            
            <ScrollAnimation animateIn='fadeIn'  animateOut='fadeOut'>
            <Row>

              <Col md="4">
                <Card>
                  <div>
                    <Lottie options={startAnimation}
                      height={200}
                      width={200}
                    />
                  </div>
                  <div className="star-icons">
                    <center>
                      <StarIcon/><StarIcon/>
                    </center>
                  </div>
                  <CardHeader
                    title='Start'
                    subheader= 'Você está começando ou precisando daquele “empurrãozinho” para a sua startup crescer? O plano Start trás os benefícios certos para você.'
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                  />

                  <CardContent>

                  <center>
                      <Link to="/start">
                        <Button 
                          onClick={ () => { window.scrollTo({ top: 0, behavior: 'smooth' }) } }
                          className="Submit-button--add"
                          fullwidth="true"
                          color="default"
                          type="button">
                          Seja um associado Start
                        </Button>
                      </Link>
                  </center>  

                        <hr/>

                        <div >
                          <Typography variant="h6" color="textPrimary" align="center">
                            <b>
                            GRÁTIS <br/>
                            Renovação anual</b>
                          </Typography>
                        </div>                    
                  </CardContent>
                </Card>
                <br/>
                <br/>
                <div className="list-if--benefits">
                <h6>
                    Newsletter exclusiva com diversas novidades sobre o mundo das startups
                </h6>

                <hr/>

                <h6 >
                   Participação nos Comites Abstartups
                </h6>

                <hr/>

                <h6 >
                   Acesso a eventos online exclusivos para associados
                </h6>

                <hr/>

                <h6 >
                   Acesso ao Slack da nossa Comunidade de Associados
                </h6>
                </div>
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
                    <StarIcon/><StarIcon/><StarIcon/>
                  </center>

                  <CardHeader
                    title='Growth'
                    subheader= 'Quer acelerar seu negócio com benefícios exclusivos que vão fazer a diferença no seu dia a dia? Seja agora um Growth e amplie as suas oportunidades.'
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                  />
                  <CardContent>
                        <center>
                          <Link to="/growth">
                              <Button 
                                onClick={ () => { window.scrollTo({ top: 0, behavior: 'smooth' }) } }
                                className="Submit-button--add"
                                fullwidth="true"
                                color="default"
                                type="button">
                                Seja um associado Growth
                              </Button>
                            </Link>
                        </center>

                        <hr/>
                        <div >
                          <Typography variant="h6" color="textPrimary" align="center">
                            <b>12x de R$: 41,58 <br/>
                            ou R$: 399,00 /ano</b>
                          </Typography>
                        </div>
                  </CardContent>
                </Card>
                <br/>
                <br/>
                <div className="list-if--benefits">
                <h6 >
                   Newsletter exclusiva com diversas novidades sobre o mundo das startups
                </h6>

                <hr/>

                <h6 >
                    Participação nos Comites Abstartups
                </h6>

                <hr/>

                <h6 >
                    Acesso a eventos online exclusivos para associados
                </h6>

                <hr/>

                <h6 >
                    Acesso ao Slack da nossa Comunidade de Associados
                </h6>

                <hr/>
                
                <h6 >
                  <b>Participação nas mentorias de Pitch Training</b>
                </h6>

                <hr/>

                <h6 >
                    <b>
                      Participação nas mentorias de Papo com Investidor
                    </b>
                </h6>

                <hr/>

                <h6 >
                    <b>
                      Participação em mentorias com Especialistas de diversas áreas (Jurídico, Vendas, Marketing, e entre outras)
                    </b>
                </h6>

                <hr/>

                <h6 >
                    <b>
                      1 Ingresso VIP para o evento CASE
                    </b>
                </h6>

                <hr/>
                </div>
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
                    subheader= 'Se você quer exclusividade e ampliar a sua rede de networking para desenvolver sua startup, o plano Impact é o ideal para você.'
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                  />
                  <br/>
                    <CardContent>
                    <center>
                    <ImpactSubscription/>
                          {/* <Button 
                            onClick={ () => window.open('https://abstartups.com.br/associados-impact/', '_blank') }
                            className="Submit-button--add"
                            fullwidth="true"
                            color="default"
                            type="button">
                            Seja um associado Impact
                          </Button> */}
                    </center>
                        <hr/>

                          <div >
                          <Typography variant="h6" color="textPrimary" align="center">
                            <b>12x de R$: 149,92 <br/>
                            ou R$: 1499,00 /ano</b>
                          </Typography>
                        </div>

                        
                    </CardContent>
                </Card>
                <br/>
                <br/>
                <div className="list-if--benefits">
                  <h6 >
                       Newsletter exclusiva com diversas novidades sobre o mundo das startups
                  </h6>

                  <hr/>

                  <h6 >
                      Participação nos Comites Abstartups
                  </h6>

                  <hr/>

                  <h6 >
                      Acesso a eventos online exclusivos para associados
                  </h6>

                  <hr/>

                  <h6 >
                      Acesso ao Slack da nossa Comunidade de Associados
                  </h6>

                  <hr/>
                  
                  <h6 >
                      Participação nas mentorias de Pitch Training
                  </h6>

                  <hr/>

                  <h6 >
                      Participação nas mentorias de Papo com Investidor
                  </h6>

                  <hr/>

                  <h6 >
                      Participação em mentorias com Especialistas de diversas áreas (Jurídico, Vendas, Marketing, e entre outras)
                  </h6>

                  <hr/>

                  <h6 >
                      1 Ingresso VIP para o evento CASE
                  </h6>

                  <hr/>

                  <h6 >
                      <b>
                        Grupo exclusivo de founders no whatsapp
                      </b>
                  </h6>

                  <hr/>

                  <h6 >
                      <b>
                        Jantar exclusivo pré-evento do CASE
                      </b>
                  </h6>

                  <hr/>

                  <h6 >
                      <b>
                        Participação nos eventos exclusivos de nettworking como o Jantar Impact e Happy Hour
                      </b>
                  </h6>
                </div>

              </Col>



            </Row>
            </ScrollAnimation>
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
                        <li> Newsletter exclusiva com diversas novidades sobre o mundo das startups</li><br/>
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
        </div>
        
        <ScrollAnimation animateIn='fadeIn'>
        <Footer />
        </ScrollAnimation>
        
      </>
  );
}


