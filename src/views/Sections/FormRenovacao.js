import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Lottie from 'react-lottie';
import axios from 'axios';
import * as Yup from 'yup';
import CreditCardIcon from '@material-ui/icons/CreditCard';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
// import Button from '@material-ui/core/Button';
import { Button, Col } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import InputMask from "react-input-mask";
import { Row } from 'reactstrap';

import animationData from '../../components/Animation/lf30_editor_TBeJvw.json';

import WellComeModal from './WelcomeModal';
import CardModal from './CardModal';
import BoletoModal from './BoletoModal';

import CardsAccept from '../../assets/img/brand/bandeiras-final.png';
import LogoMaster from '../../assets/img/brand/master.png';
import LogoVisa from '../../assets/img/brand/visa.png';
import LogoElo from '../../assets/img/brand/elo.png';
import LogoHiper from '../../assets/img/brand/hiper.png';



const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


const cnpjStorage = localStorage.getItem('cnpj');



export default function FormRenovacao() {

  const classes = useStyles();

  const [ hasError, setHasError ] = useState({
    cnpj: false,
  });

  const [ activeStep, setActiveStep ] = useState(0);
  const [ validaCnpj, setValidaCnpj ] = useState(false);
  const [ completed, setCompleted ] = useState({});
  const [ name, setName ] = useState('');
  const [ business, setBusiness ] = useState('');
  const [ cnpj, setCnpj ] = useState('');
  const [ idConsumer, setIdConsumer ] = useState('');
  const [ isLastStepCompleted, setIsLastStepCompleted ] = useState(localStorage.setItem('isLastStep', "false"));
  const [ loading, setLoading ] = useState(false)
  const [ subscription, setSubscription ] = useState('');
  const [ consumer, setConsumer ] = useState('')
  const [ wallet, setWallet ] = useState('')

  const [ price, setPrice ] = useState('');
  const [ planName, setPlanName ] = useState('');
  const [ startPlain, setStartPlain ] = useState('');
  const [ endPlain, setEndPlain ] = useState('');
  const [ subsCriptionID, setSubscriptionID ] = useState('')
  const [ subScriptionStatus, setSubScriptionStatus ] = useState('')

  const history = useHistory()

  const steps = getSteps();

  // const cnpjStorage = localStorage.getItem('cnpj')


  setInterval(() => {
    setIsLastStepCompleted(localStorage.getItem('isLastStep'))
    if(isLastStepCompleted === "true") {
      handleNext();
    }
  }, 1000);

  useEffect(() => {
    let cnpjValidate = {
      cnpj: cnpj.replace(/\D/g, '')
    }

    try {
      if(cnpjValidate.cnpj.length === 14){
        setLoading(true)
        handleSubscription(cnpjValidate.cnpj);
      }

    } catch (err) {
      toast.error('Problemas ao conectar-se com o servidor.')
    }
  }, [cnpj])



  async function handleSubscription(cnpj){
    await axios.get(`https://api-planos.abstartups.com.br/subscription/subs/${cnpj.replace(/\D/g, '')}`).then(response => {

      if (response.data.status === 401){
        history.push('/growth')
      } else {
        setValidaCnpj(true);
        setHasError({cnpj: false});
        setLoading(false);
        setBusiness(response.data.customers[0].name);
        setName(response.data.customers[0].metadata.nome_pessoa_fisica);
        setConsumer(response.data.customers[0]);
        setIdConsumer(response.data.customers[0].id)
        localStorage.setItem('consumer_id', response.data.customers[0].id)

        // chamada secundária
        

        

      }
    })
  }

  async function getSubscriptions() {
          await axios.get(`https://api-planos.abstartups.com.br/subscription/subs/customers/${idConsumer}`).then(
            res => {
              setPrice(res.data.subscriptions[0].product_items[0].pricing_schema.short_format)
              setSubscriptionID(res.data.subscriptions[0].id)
              setPlanName(res.data.subscriptions[0].product_items[0].product.name)
              setStartPlain(res.data.subscriptions[0].current_period.start_at)
              setEndPlain(res.data.subscriptions[0].current_period.end_at)
              setWallet(res.data.subscriptions[0].payment_profile);
              setSubscription(res.data.subscriptions[0].product_items[0].product);
              setSubScriptionStatus(res.data.subscriptions[0].product_items[0].status)

            }
          )
          
  };

  async function postReniewSubscription(){
    // await axios.post(`https://api-planos.abstartups.com.br/subscription/subs/customers/reniew/${subsCriptionID}`).then( res => {
    //   console.log('Funcionando')
    // } )
    console.log(subsCriptionID)
  }

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  function getSteps() {
   return ['Identificação', 'Informações', 'Renovação', 'Confirmação'];
  }

  function getStepContent(step) {

    switch (step) {
      case 0:
        return ( <form autoComplete="on" ><Row lg="8">
          <WellComeModal/>
          <div className="double-input--form" >
            <InputMask
                value={ cnpj }
                onChange={e => setCnpj( e.target.value )}
                mask="99.999.999/9999-99"
              >
                {() => 
                <TextField
                  label={ 'CNPJ' }
                  required={true}
                  id="cnpj"
                  type='text'
                  helperText={loading ? "Carregando..." : "CNPJ Válido"  && hasError.cnpj ? "CNPJ Inválido e/ou existente" : "Apenas números"}
                  vmargin="normal"
                  variant="outlined"
                  style={{ margin: 8 }}
                  fullWidth
                  error={hasError.cnpj}
                  />}
            </InputMask>
          </div>
        </Row></form>);

        case 1: 
        return ( 
          <Row lg="8" xs="12">
          <div>
            <h3>Seus dados:</h3>
              <p>Passo ativo: <b>{ subScriptionStatus === 'active' ? 'Ativo' : 'Inativo ou não encontrado' }</b></p>
              <p>Nome: <b>{business ? business : 'não informado' }</b></p>
              <p>CNPJ: <b>{cnpj ? cnpj : 'não informado'} </b></p>
              <p>Responsável: <b>{ name ? name : 'não informado' }</b></p>
              <p>Plano Contratado: <b>{ planName ? planName : 'não informado' }</b></p>
              <p>Valor <b>{ price ? price : 'não informado' }</b></p>
              <p>Data de início: <b>{ startPlain ? startPlain : 'não informado' }</b></p>
              <p>Data de termino: <b>{ endPlain ? endPlain : 'não informado' }</b></p>

              { wallet ? (
                <>
                  <hr/>
                  <div className="cards-information">
                    <div className="card-line">
                      <p>Pago com: <b>{ wallet ? wallet.payment_company.name : 'não informado' }</b></p> 
                        { wallet.payment_company.name === 'MasterCard' ? 
                          (<> <img src={LogoMaster} alt="MasterLogo" width="40px" height="auto"/> </>) : 
                          wallet.payment_company.name === 'Visa' ? 
                          (<> <img src={LogoVisa} alt="VisaLogo" width="40px" height="auto"/> </>) : 
                          wallet.payment_company.name === 'Elo' ? 
                          (<> <img src={LogoElo} alt="EloLogo" width="40px" height="auto"/> </>) :
                          wallet.payment_company.name === 'HiperCard' ? 
                          (<> <img src={LogoHiper} alt="HiperLogo" width="40px" height="auto"/> </>) : 'Não informado.'}
                    </div>
                    <p>Nome: <b>{ wallet ? wallet.holder_name : 'não informado' }</b></p>
                    <p>Cartão: <b>{ wallet ? '**** **** **** ' + wallet.card_number_last_four : 'não informado' }</b></p>
                  </div>
                  <br/>
                </>
              ) : ''}

          </div>
          </Row>
          
      );

      case 2:
        return  (

            <>
              { isLastStepCompleted === "true" ? Thanks : FormPayment }
            </>
        
        );
 
      default:
        return <h2>Ooops, parece que algo deu errado!</h2>;
    }
  }

  const Thanks = (
    <div>
      <center>

      <Lottie options={defaultOptions}
        height={100}
        width={100}
      />

        <h2 className={classes.instructions}>{name}, seu cadastro foi realizado com sucesso!</h2>
        <hr/>
        <h5 className={classes.instructions}>Oba {business}, parabéns! ;) Agora você faz parte da maior rede de startups do Brasil!</h5>
        <h5 className={classes.instructions}>Acesse nosso portal de benefícios e aproveite!</h5>

        <p>O Plano renovado é o: <b>Impact</b></p>

        <Button  variant="contained" onClilck={ () => window.open('https://app.uppo.com.br/abstartups/', '_blank') } color="primary">Acesse seus benefícios</Button>

      </center>
    </div>
  )

  const FormPayment = (
    <div>
      <center>
        <h5 className={classes.instructions}>{name}, estamos muito felizes por mais este ano com a {business}, estamos trabalhando duro para oferecer o melhor conteúdo para sua startup crescer ainda mais :)</h5>

        <p>O Plano renovado é o: <b>{planName}</b></p>
        <p>Valor anual: <b>{price}</b></p>
        <center>
          
          { wallet ? ( <><h5>Renovar assinatura com cartão cadastrado</h5> <Button  onClick={ postReniewSubscription } block color="danger" type="button"> <CreditCardIcon/> RENOVAR AGORA MESMO </Button></> ) : ''}
          
          <hr/>

          <div className="payment-description">
            <p><b>Pague com:</b></p> <img src={CardsAccept} alt="cartões" width="30%" height="auto"/>
          </div>
          <br/>
          
        </center>
        
        <CardModal />
        <br/>
        <BoletoModal/>
        <br/>
      </center>
    </div>
  );

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps();
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };



  

  const handleNext = async () => {

    //Inputar validações aqui
    const newActiveStep = isLastStep() && !allStepsCompleted()
    
      ? steps.findIndex((step, i) => !(i in completed))
      : activeStep + 1;

      
    if (newActiveStep === 1 ){
      window.scrollTo({top: 100, behavior: 'smooth'});
      // localStorage.removeItem('consumer_id');
      getSubscriptions();
      console.log('passo 1', newActiveStep)
      

      try {
        const schema = Yup.object().shape({
          cnpj: Yup.string().required().min(14),
        });
        
        const data = {
          cnpj,
        }

        await schema.validate(data, {
          abortEarly: false
        })

        

        if(!validaCnpj) {
          toast.error('Ooops, houve um erro.');
          setHasError(
            {
              ...hasError, 
              cnpj: true,
            });
            return;
        }

        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        setActiveStep(newActiveStep);
        
      } catch (err) {
        toast.error('Por favor, preencha todos os campos obrigatórios.')
        if (err instanceof Yup.ValidationError) {
          const errorMessages = {};
          err.inner.forEach(error => {
            errorMessages[error.path] = true;
          });
          const { 
            cnpj,
          } = errorMessages;
          setHasError(
            {
              cnpj,
            })
          
        }
      }
    }
    if (newActiveStep === 2){
      try {
        console.log('passo 2')

        window.scrollTo({top: 100, behavior: 'smooth'});

        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        setActiveStep(newActiveStep);

      } catch (err) {
        toast.error('Por favor, preencha todos os campos obrigatórios.')
      }
      
    } 
    if (newActiveStep === 3) {

      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      setActiveStep(newActiveStep);

    }

    if (newActiveStep === 4) {
      try {

        if(isLastStepCompleted === "false") {
          toast.error("Selecione o método de pagamento para finalizar o cadastro");
          return;
        }

        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        setActiveStep(newActiveStep);

        

      } catch (err) {
      }
    }
  };

  function handleComplete (e) {
    e.preventDefault();
    handleNext();
  };


  return (
    <Col lg="8">
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
          <StepButton completed={completed[index] }>
              {label}
            </StepButton>
            {/* <StepButton onClick={ handleStep(index)} completed={completed[index] }>
              {label}
            </StepButton> */}
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <center>

            <Lottie options={defaultOptions}
              height={100}
              width={100}
            />
              <h5 className={classes.instructions}>{name}, estamos muito felizes por mais este ano com a {business}, estamos trabalhando duro para oferecer o melhor conteúdo para sua startup crescer ainda mais :)</h5>
              <h3 className={classes.instructions}>Acesse nosso portal de benefícios e aproveite!</h3>
              <p>O Plano renovado é o: <b>{planName}</b></p>
              
              <Button  variant="contained" onClick={ () => { window.open('https://app.uppo.com.br/abstartups/', '_blank') } } color="primary">Acessar painel de benefícios</Button>
            </center>
          </div>

        ) : (
          <div>
            <p className={classes.instructions}></p>
            {getStepContent(activeStep)}
            <div>
              {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button} variant="contained">
                <NavigateBeforeIcon/> Voltar
              </Button> */}
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    
                    <Button variant="contained" color="primary" type="submit" onClick={handleComplete}>
                      { completedSteps() === totalSteps() - 1 ? 'Finalizar' : 'Próximo' } <NavigateNextIcon/>
                    </Button> {' '} O passo {activeStep + 1} está completo. 
                  </Typography>
                ) : (
                  
                  <Button variant="contained" color="primary" type="submit" onClick={handleComplete}>
                    { completedSteps() === totalSteps() - 1 ? 'Finalizar' : 'Próximo' && loading ? 'Carregando aguarde...' : 'Próximo'  } <NavigateNextIcon/>
                  </Button>
                  
                ))}
            </div>
          </div>
        )}
      </div>
    </Col>
  );
}