import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import { Col, Row } from 'reactstrap'

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
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [cep, setCep ] = useState('')
  const [uf, setUf ] = useState('UF')
  const [municipio, setMunicipio ] = useState('Cidade')
  const [logradouro, setLogradouro ] = useState('Nome da Rua')
  const steps = getSteps();

  async function  getAddress(){
    await axios.get(`https://viacep.com.br/ws/${cep.replace(/-\s/g,"")}/json/`)
    .then( response => {
      setUf(response.data.uf)
      setMunicipio(response.data.localidade)
      setLogradouro(response.data.logradouro)
      console.log(municipio)
    })
  }

  function getSteps() {
  return ['Dados do Contato', 'Modelo de negócio', 'Contato'];
  }

  function getStepContent(step) {
    const selects = [ 'Info 1', 'Info 2', 'Info 3', 'Info 4', 'Info 5',];


    const formStep1 = <form><Row lg="8">
          <TextField
            label="Nome"
            required={true}
            id="name"
            type="text"
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
            id="phone"
            type="text"
            style={{ margin: 8 }}
            placeholder="Insira o nome de sua startup"
            defaultValue=""
            helperText="Nome fantasia (nome fantasia)"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <div style={{ display: 'flex', width: '100%' }}>
          <TextField
            label="CNPJ"
            required={true}
            id="cnpj"
            type="number"
            pattern="/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/"
            style={{ margin: 8, width: '50%' }}
            defaultValue=""
            helperText="Apenas números"
            vmargin="normal"
            variant="outlined"
          />
          <TextField
            label="Telefone"
            required={true}
            id="phone"
            type="phone"
            style={{ margin: 8, width: '50%' }}
            placeholder="Telefone para contato"
            defaultValue=""
            helperText="Telefone com DDD"
            margin="normal"
            variant="outlined"
          />
          </div>
          <TextField
            label="Email"
            required={true}
            id="email"
            type= "email"
            style={{ margin: 8 }}
            placeholder="Cadastre seu melhor email"
            defaultValue=""
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
            style={{ margin: 8 }}
            placeholder="Telefone para contato"
            defaultValue=""
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
            style={{ margin: 8 }}
            defaultValue=""
            helperText="Confirmar senha"
            vmargin="normal"
            variant="outlined"
          />
          </div>
          </Row>
          </form>;
    
    const formStep2 = <form><div>
        
        <div style={{ display: 'flex', width: '100%' }}>
          <TextField
            id="whats"
            select
            fullWidth
            label="Como nos conheceu?"
            style={{ margin: 8 }}
            value={selects}
            SelectProps={{
              native: true,
            }}
            helperText="Como conheceu a ABS?"
            variant="outlined"
          >
            <option>Selecione uma opção</option>
            <option>Mentoria</option>
            <option>Investidor</option>
            <option>Desconto em Produtos</option>
            <option>Networking</option>
            <option>Visibilidade</option>
            <option>Ingressos do case</option>
            <option>Outros</option>
          </TextField>
          
          <TextField
            id="socios"
            select
            fullWidth
            label="Numero de sócios?"
            style={{ margin: 8 }}
            value={selects}
            SelectProps={{
              native: true,
            }}
            helperText="Quantos sócios possui?"
            variant="outlined"
          >
            <option>Selecione uma opção</option>
            <option>Mentoria</option>
            <option>Investidor</option>
            <option>Desconto em Produtos</option>
            <option>Networking</option>
            <option>Visibilidade</option>
            <option>Ingressos do case</option>
            <option>Outros</option>
          </TextField>
          </div>
          <div style={{ display: 'flex', width: '100%' }}>
          <TextField
            id="receita"
            select
            fullWidth
            label="Receita"
            style={{ margin: 8 }}
            value={selects}
            SelectProps={{
              native: true,
            }}
            helperText="Modelo de receita"
            variant="outlined"
          >
            <option>Selecione uma opção</option>
            <option>Mentoria</option>
            <option>Investidor</option>
            <option>Desconto em Produtos</option>
            <option>Networking</option>
            <option>Visibilidade</option>
            <option>Ingressos do case</option>
            <option>Outros</option>
          </TextField>
          <TextField
            id="socios"
            select
            fullWidth
            label="Qual fase atual?"
            style={{ margin: 8 }}
            value={selects}
            SelectProps={{
              native: true,
            }}
            helperText="Fase da startup"
            variant="outlined"
          >
            <option>Selecione uma opção</option>
            <option>Mentoria</option>
            <option>Investidor</option>
            <option>Desconto em Produtos</option>
            <option>Networking</option>
            <option>Visibilidade</option>
            <option>Ingressos do case</option>
            <option>Outros</option>
          </TextField>
          </div>
          <div style={{ display: 'flex', width: '100%' }}>
          <TextField
            id="whats"
            select
            fullWidth
            label="Investimento?"
            style={{ margin: 8 }}
            value={selects}
            SelectProps={{
              native: true,
            }}
            helperText="Já recebeu investimento?"
            variant="outlined"
          >
            <option>Selecione uma opção</option>
            <option>Mentoria</option>
            <option>Investidor</option>
            <option>Desconto em Produtos</option>
            <option>Networking</option>
            <option>Visibilidade</option>
            <option>Ingressos do case</option>
            <option>Outros</option>
          </TextField>
          <TextField
            id="socios"
            select
            fullWidth
            label="Momento"
            style={{ margin: 8 }}
            SelectProps={{
              native: true,
            }}
            helperText="O que você busca?"
            variant="outlined"
          >
            <option>Selecione uma opção</option>
            <option>Mentoria</option>
            <option>Investidor</option>
            <option>Desconto em Produtos</option>
            <option>Networking</option>
            <option>Visibilidade</option>
            <option>Ingressos do case</option>
            <option>Outros</option>
          </TextField>
          </div>
        </div>
      </form>;

    const formStep3 = <form>
      <div>

          <div style={{ display: 'flex', width: '100%' }}>
          <TextField
            label="CEP"
            id="cep"
            required={true}
            style={{ margin: 8}}
            defaultValue={cep}
            onChange={ e => { setCep( e.target.value ) } }
            helperText="Insira o CEP"
            margin="normal"
            variant="outlined"
          />
          <Button variant="contained" fullWidth color="primary" style={{ margin: 8, marginBottom: 30}} onClick={getAddress}>AUTO COMPLETAR ENDEREÇO</Button>
          </div>
          <div style={{ display: 'flex', width: '100%' }}>
          <TextField
            disabled
            label="Municício"
            id="municipio"
            required={true}
            style={{ margin: 8, width: 200  }}
            defaultValue={municipio}
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
            defaultValue={uf}
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
            placeholder="Endereço?"
            InputProps={{ readOnly: true, }}
            defaultValue={logradouro}
            value={logradouro}
            helperText="Insira o endereço do seu site. (opcional)"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <div style={{ display: 'flex', width: '100%' }}>
          <TextField
            label="Número"
            id="number"
            required={true}
            style={{ margin: 8 }}
            defaultValue=""
            placeholder="Número"
            helperText="Número"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Complemento"
            id="complemento"
            fullWidth
            required={true}
            style={{ margin: 8 }}
            defaultValue=""
            helperText="UF"
            vmargin="normal"
            variant="outlined"
          />
          </div>

          <hr/>

          <TextField
            id="website"
            label="Site"
            style={{ margin: 8 }}
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
            style={{ margin: 8 }}
            defaultValue=""
            helperText="URL do Linkedin (opcional)"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Facebook"
            id="facebook"
            fullWidth
            style={{ margin: 8 }}
            defaultValue=""
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
            style={{ margin: 8 }}
            defaultValue=""
            helperText="URL do Instagram (opcional)"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="YouTube"
            id="YouTube"
            fullWidth
            style={{ margin: 8 }}
            defaultValue=""
            helperText="URL do Youtube (opcional)"
            vmargin="normal"
            variant="outlined"
          />
          </div>
        </div>

        </form>;

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
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
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
              <Typography className={classes.instructions}>
                Cadastro finalizado com sucesso!
                Agora é só acessar seu portal de benefícios.
              </Typography>
          
              <Button  variant="contained" color="primary">Acessar painel de benefícios</Button>
            </center>
          </div>
        ) : (
          <div>
            <p className={classes.instructions}>{getStepContent(activeStep)}</p>
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
                  <Button variant="contained" color="primary" onClick={handleComplete}>
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
