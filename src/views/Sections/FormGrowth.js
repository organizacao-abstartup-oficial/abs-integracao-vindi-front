import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import InputMask from "react-input-mask";

import { Col, Row } from 'reactstrap';

import { segmentos, negociosShort, fasesShort, papeis, investimentos, time, oquebusca } from '../../Data';

import Modal from './Modals';

import Lottie from 'react-lottie'
import animationData from '../../components/Animation/lf30_editor_TBeJvw.json'

import axios from 'axios';


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



export default function FormStarter() {

  const classes = useStyles();
  const [ activeStep, setActiveStep ] = useState(0);
  const [ completed, setCompleted ] = useState({});
  const [ cep, setCep ] = useState('');
  const [ uf, setUf ] = useState('UF');
  const [ municipio, setMunicipio ] = useState('Cidade');
  const [ logradouro, setLogradouro ] = useState('Nome da Rua');
  const [ numeroLogradouro, setNumeroLogradouro ] = useState('');
  const [ complemento, setComplemento ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ name, setName ] = useState('');
  const [ mail, setMail ] = useState('');
  const [ business, setBusiness ] = useState('');
  const [ cnpj, setCnpj ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmpassword, setConfirmpassword ] = useState('');
  const [ getcargo, setGetCargo ] = useState('');
  const [ getsocios, setGetSocios ] = useState('');
  const [ getsegmento, setGetSegmento ] = useState('');
  const [ getmodelo, setGetModelo ] = useState('');
  const [ getfase, setGetFase ] = useState('');
  const [ getinvestimentos, setGetInvestimento ] = useState('');
  const [ gettime, setGetTime ] = useState('');
  const [ getajuda, setGetAjuda ] = useState('');
  const [ site, setSite ] = useState('');
  const [ linkedin, setLinkedin ] = useState('');
  const [ facebook, setFacebook ] = useState('');
  const [ instagram, setInstagram ] = useState('');
  const [ youtube, setYoutube ] = useState('');
  const [ plain, setPlain ] = useState({ id: 1, name:'Growth'})

  const steps = getSteps();

  async function  getAddress(){
    await axios.get(`https://viacep.com.br/ws/${cep.replace(/-\s/g,"")}/json/`)
    .then( response => {
      setUf(response.data.uf)
      setMunicipio(response.data.localidade)
      setLogradouro(response.data.logradouro)
      console.log(municipio)
      setPlain({ id: 2, name:'Growth'})
    })
  }


  async function handleRegisterUppo(e){
    e.preventDefault();

    const data = {
      mail,
      password,
      cnpj,
      name
    }

    console.log(data)

    try {
      const response = await axios.post('https://api.uppo.com.br/abstartups/integration/register', data)
      
      alert(`Olá, ${response.data.name}. Seja bem vindo!`)
    } catch (err) {
      alert('Erro, por favor tente novamente.')
    }
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
  return ['Dados do Contato', 'Modelo de negócio', 'Contato'];
  }

  function getStepContent(step) {

    const formStep1 = <form onSubmit={handleRegisterUppo} ><Row lg="8">
          <TextField
            label="Nome"
            required={true}
            id="name"
            value={name}
            onChange={ e => setName(e.target.value) }
            style={{ margin: 8 }}
            placeholder="Insira seu nome"
            helperText="Nome completo (pessoa física)"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Nome da Startup"
            required={true}
            id="company"
            type='text'
            value={business}
            onChange={ e => setBusiness(e.target.value) }
            style={{ margin: 8 }}
            placeholder="Insira o nome de sua startup"
            helperText="Nome fantasia (nome fantasia)"
            fullWidth
            margin="normal"
            variant="outlined"
          />
              <div style={{ display: 'flex', width: '100%' }}>
                <InputMask
                    value={cnpj}
                    onChange={e => setCnpj( e.target.value )}
                    mask="99.999.999/9999-99"
                  >
                    {() => 
                    <TextField
                      label="CNPJ"
                      required={true}
                      id="cnpj"
                      type='text'
                      style={{ margin: 8, width: '50%' }}
                      helperText="Apenas números"
                      vmargin="normal"
                      variant="outlined"
                      />}
                </InputMask>

                <InputMask
                  mask={ phone.length === 10 ? "(99) 9999.9999" : "(99) 99999.9999"}
                  value={phone}
                  onChange={ e => setPhone(e.target.value)}
                >
                  {() => 
                    <TextField
                      label="Telefone"
                      required={true}
                      id="phone"
                      type='text'
                      style={{ margin: 8, width: '50%' }}
                      placeholder="Telefone para contato"
                      helperText="Telefone com DDD"
                      margin="normal"
                      variant="outlined"
                      />}
                </InputMask>

              </div>
              <TextField
                label="Email"
                required={true}
                id="email"
                type="email"
                value={mail}
                onChange={ e => setMail(e.target.value) }
                style={{ margin: 8 }}
                placeholder="Cadastre seu melhor email"
                fullWidth
                helperText="Com este email você realizará o seu login e também receberá todos os comunicados oficiais da Abstartups"
                margin="normal"
                variant="outlined"
              />
              <div style={{ display: 'flex', width: '100%' }}>
              <TextField
                label="Senha"
                required={true}
                id="password"
                type="password"
                fullWidth
                value={password}
                onChange={ e => setPassword(e.target.value) }
                style={{ margin: 8 }}
                placeholder="Telefone para contato"
                helperText="Com esta senha você irá realizar o seu login no Portal de Benefícios"
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Confirmar senha"
                required={true}
                id="re-password"
                type="password"
                fullWidth
                value={confirmpassword}
                onChange={ e => setConfirmpassword(e.target.value) }
                style={{ margin: 8 }}
                helperText="Confirmar senha"
                vmargin="normal"
                variant="outlined"
              />
              </div>
            </Row>
          </form>;
    
    const formStep2 = <FormControl onSubmit={handleComplete} ><Row lg="8">
        
        <div style={{ display: 'flex', width: '100%' }}>
          <TextField
            id="qual-seu-cargo"
            select
            fullWidth
            required={true}
            value={getcargo}
            onChange={ e => setGetCargo(e.target.value)}
            label="Qual seu cargo?"
            style={{ margin: 8 }}
            SelectProps={{
              native: true,
            }}
            helperText="Como conheceu a ABS?"
            variant="outlined"
          >
            {papeis.map( cargo => (
              <option key={cargo.id} value={cargo.text}>{cargo.text}</option>
            ))}
          </TextField>
          
          <TextField
            id="socios"
            select
            fullWidth
            required={true}
            value={getsocios}
            onChange={ e => setGetSocios(e.target.value)}
            label="Numero de sócios?"
            style={{ margin: 8 }}
            SelectProps={{
              native: true,
            }}
            helperText="Quantos sócios possui?"
            variant="outlined"
          >
            {time.map( time => (
              <option key={time.id} value={time.text}>{time.text}</option>
            ))}

          </TextField>
          
          </div>
          <div style={{ display: 'flex', width: '100%' }}>

            <TextField
              id="segmentos"
              select
              fullWidth
              required={true}
              value={getsegmento}
              onChange={ e => setGetSegmento(e.target.value)}
              label="Segmento"
              style={{ margin: 8 }}
              SelectProps={{
                native: true,
              }}
              helperText="Selecione um dos modelos listados"
              variant="outlined"
            >

              {segmentos.map( segmentos => (
                <option key={segmentos.id} value={segmentos.text}>{segmentos.text}</option>
              ))}
          
            </TextField>

            <TextField
              id="modelo"
              select
              fullWidth
              required={true}
              value={getmodelo}
              onChange={ e => setGetModelo(e.target.value)}
              label="Modelo de negócio?"
              style={{ margin: 8 }}
              SelectProps={{
                native: true,
              }}
              helperText="Selecione uma das opções."
              variant="outlined"
            >
              {negociosShort.map( negocios => (
                <option key={negocios.id} value={negocios.text}>{negocios.text}</option>
              ))}

            </TextField>

          </div>

          <div style={{ display: 'flex', width: '100%' }}>

            <TextField
              id="fase"
              select
              fullWidth
              required={true}
              value={getfase}
              onChange={ e => setGetFase(e.target.value)}
              label="Qual fase atual?"
              style={{ margin: 8 }}
              SelectProps={{
                native: true,
              }}
              helperText="Fase da startup"
              variant="outlined"
            >
              {fasesShort.map( fase => (
                <option key={fase.id} value={fase.text}>{fase.text}</option>
              ))}
            </TextField>

            <TextField
              id="whats"
              select
              fullWidth
              required={true}
              value={getinvestimentos}
              onChange={ e => setGetInvestimento(e.target.value)}
              label="Já recebeu investimento?"
              style={{ margin: 8 }}
              SelectProps={{
                native: true,
              }}
              helperText="Já recebeu investimento?"
              variant="outlined"
            >
              {investimentos.map( investimento => (
                <option key={investimento.id} value={investimento.text}>{investimento.text}</option>
              ))}
            </TextField>

          
          </div>


          <div style={{ display: 'flex', width: '100%' }}>
          <TextField
            id="tamanho-da-equipe"
            select
            fullWidth
            required={true}
            value={gettime}
            onChange={ e => setGetTime(e.target.value)}
            label="Qual o tamanho do seu time"
            style={{ margin: 8 }}
            SelectProps={{
              native: true,
            }}
            helperText="Quantos colaboradores possui"
            variant="outlined"
          >
            {time.map( time => (
              <option key={time.id} value={time.text}>{time.text}</option>
            ))}
          </TextField>
          <TextField
            id="ajuda"
            select
            fullWidth
            required={true}
            value={getajuda}
            onChange={ e => setGetAjuda(e.target.value)}
            label="Em que ABS pode te ajudar?"
            style={{ margin: 8 }}
            SelectProps={{
              native: true,
            }}
            helperText="Selecione uma das opções"
            variant="outlined"
          >
          { oquebusca.map(oquebusca => (
            <option key={oquebusca.id} value={oquebusca.text}>{oquebusca.text}</option>
          ))}
            <option value="0">Mentorias</option>

          </TextField>
          </div>
        </Row>
      </FormControl>;

    const formStep3 = <FormControl>
      <Row lg="8">

          <div style={{ display: 'flex', width: '100%' }}>
            <InputMask
              mask="99999-999"
              value={cep}
              onChange={ e => { setCep( e.target.value ) } }

            >
              {() => 
                <TextField
                    label="CEP"
                    id="cep"
                    required={true}
                    style={{ margin: 8}}
                    helperText="Insira o CEP"
                    margin="normal"
                    variant="outlined"
                  />}
            </InputMask>
          <Button variant="contained" fullWidth color="primary" style={{ margin: 8, marginBottom: 30}} onClick={getAddress}>AUTO COMPLETAR ENDEREÇO</Button>
          </div>
          <div style={{ display: 'flex', width: '100%' }}>
          <TextField
            disabled
            label="Municício"
            id="municipio"
            required={true}
            style={{ margin: 8, width: 200  }}
            placeholder={municipio}
            value={municipio}
            helperText="UF"
            vmargin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            label="UF"
            id="uf"
            required={true}
            style={{ margin: 8, width: 100 }}
            placeholder={uf}
            value={uf}
            helperText="UF"
            vmargin="normal"
            variant="outlined"
          />
          </div>

          <TextField
            disabled
            id="logradouro"
            label="Endereço"
            style={{ margin: 8 }}
            InputProps={{ readOnly: true, }}
            value={logradouro}
            placeholder={logradouro}
            helperText="Logradouro ex: Rua... Avenida"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <div style={{ display: 'flex', width: '100%' }}>
          <TextField
            label="Número"
            id="number"
            type='text'
            required={true}
            style={{ margin: 8 }}
            value={numeroLogradouro}
            onChange={ e => setNumeroLogradouro(e.target.value)}
            placeholder="Número"
            helperText="Número"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Complemento"
            id="complemento"
            fullWidth
            type='text'
            required={true}
            style={{ margin: 8 }}
            value={complemento}
            onChange={ e => setComplemento(e.target.value)}
            helperText="UF"
            vmargin="normal"
            variant="outlined"
          />
          </div>

          <hr/>

          <TextField
            id="website"
            label="Site"
            type='text'
            style={{ margin: 8 }}
            value={site}
            onChange={ e => setSite(e.target.value)}
            placeholder="Qual o site?"
            helperText="Insira o endereço do seu site. (opcional)"
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <div style={{ display: 'flex', width: '100%' }}>
          <TextField
            label="Linkedin"
            id="linkedin"
            fullWidth
            type='text'
            style={{ margin: 8 }}
            value={linkedin}
            onChange={ e => setLinkedin(e.target.value)}
            helperText="URL do Linkedin (opcional)"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Facebook"
            id="facebook"
            fullWidth
            type='text'
            style={{ margin: 8 }}
            value={facebook}
            onChange={ e => setFacebook(e.target.value)}
            helperText="URL do Facebook (opcional)"
            vmargin="normal"
            variant="outlined"
          />
          </div>

          <div style={{ display: 'flex', width: '100%' }}>
          <TextField
            label="Instagram"
            id="instagram"
            fullWidth
            type='text'
            style={{ margin: 8 }}
            value={instagram}
            onChange={ e => setInstagram(e.target.value)}
            helperText="URL do Instagram (opcional)"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="YouTube"
            id="YouTube"
            fullWidth
            type='text'
            style={{ margin: 8 }}
            value={youtube}
            onChange={ e => setYoutube(e.target.value)}
            helperText="URL do Youtube (opcional)"
            vmargin="normal"
            variant="outlined"
          />
          </div>
        </Row>

        </FormControl>;

    switch (step) {
      case 0:
        return formStep1;
      case 1:
        return  formStep2;
      case 2:
        return formStep3;
      default:
        return <h1>Ooops, parece que algo deu errado!</h1>;
    }
  }

  

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    console.log(`Passo ativo ${newActiveStep}`)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  function handleComplete (e) {
    e.preventDefault();
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  return (
    <Col lg="8">
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}> este é para teste
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
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

              <h2 className={classes.instructions}>{name}, seu cadastro foi realizado com sucesso!</h2>
              <hr/>
              <h5 className={classes.instructions}>Falta pouco para a {business} aproveitar todos os benefícios de ser um associado da ABStartups :)</h5>
              
              <p>O Plano Contratado é o: <b>{ plain.name }</b></p>
              <h2>Obrigado!</h2>
              <Modal />
            </center>
          </div>
        ) : (
          <div>
            <p className={classes.instructions}></p>
            {getStepContent(activeStep)}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button} variant="contained">
                <NavigateBeforeIcon/> Voltar
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    O passo {activeStep + 1} está completo.
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" type="submit" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finalizar' : 'Próximo'} <NavigateNextIcon/>
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </Col>
  );
}
