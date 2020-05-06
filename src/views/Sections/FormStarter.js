import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

import Modal from './Modals';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
  },
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

function getSteps() {
  return ['Dados do Contato', 'Redes sociais', 'Modelo de negócio'];
}

function getStepContent(step) {
  const selects = [ 'Info 1', 'Info 2', 'Info 3', 'Info 4', 'Info 5',];

  switch (step) {
    case 0:
      return <div>
      <div>
        <TextField
          id="name"
          label="Nome"
          style={{ margin: 8 }}
          placeholder="Insira seu nome"
          helperText="Nome completo."
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Nome da Startup"
          id="phone"
          style={{ margin: 8 }}
          placeholder="Telefone para contato"
          defaultValue=""
          helperText="Nome fantasia"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="CNPJ"
          id="cnpj"
          style={{ marginLeft: 4, marginTop: 16, width: '49%'}}
          defaultValue=""
          helperText="Insira apenas números"
          vmargin="normal"
          variant="outlined"
        />
        <TextField
          label="Telefone"
          id="phone"
          style={{ marginLeft: 8, width: '49%'}}
          placeholder="Telefone para contato"
          defaultValue=""
          helperText="Telefone com DDD"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          id="outlined-margin-none"
          style={{ margin: 8 }}
          placeholder="Cadastre seu melhor email"
          defaultValue=""
          fullWidth
          helperText="Este email vai servir tanto para login quanto para receber novidades"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Senha"
          id="password"
          style={{ marginLeft: 8, width: '49%'}}
          placeholder="Telefone para contato"
          defaultValue=""
          helperText="Senha com no mínimo 6 dígitos"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Confirmar senha"
          id="re-password"
          style={{ marginLeft: 4, marginTop: 16, width: '49%'}}
          defaultValue=""
          helperText="Confirmar senha"
          vmargin="normal"
          variant="outlined"
        />
      </div>
    </div>;
    case 1:
      return <div>
      <div>
        <TextField
          id="website"
          label="Site"
          style={{ margin: 8 }}
          placeholder="Qual o site?"
          helperText="Insira a URL do sue site."
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Linkedin"
          id="linkedin"
          style={{ marginLeft: 8, width: '49%'}}
          defaultValue=""
          helperText="URL do Linkedin"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Facebook"
          id="facebook"
          style={{ marginLeft: 4, marginTop: 16, width: '49%'}}
          defaultValue=""
          helperText="URL do Facebook"
          vmargin="normal"
          variant="outlined"
        />
        <TextField
          label="Instagram"
          id="instagram"
          style={{ marginLeft: 8, width: '49%'}}
          defaultValue=""
          helperText="URL do Instagram"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="YouTube"
          id="outlined-margin-none"
          style={{ marginLeft: 4, marginTop: 16, width: '49%'}}
          defaultValue=""
          helperText="URL do Youtube"
          vmargin="normal"
          variant="outlined"
        />
        
      </div>
    </div>;
    case 2:
      return <div>
      <div>
        <TextField
          id="whats"
          select
          label="Como nos conheceu?"
          style={{ marginTop: 18,marginLeft: 8, width: '48%'}}
          value={selects}
          SelectProps={{
            native: true,
          }}
          helperText="Como conheceu a ABS?"
          variant="outlined"
        />
        <TextField
          id="socios"
          select
          label="Numero de sócios?"
          style={{ marginTop: 18,marginLeft: 8, width: '48%'}}
          value={selects}
          SelectProps={{
            native: true,
          }}
          helperText="Quantos sócios possui?"
          variant="outlined"
        />
        <TextField
          id="receita"
          select
          label="Receita"
          style={{ marginTop: 18,marginLeft: 8, width: '48%'}}
          value={selects}
          SelectProps={{
            native: true,
          }}
          helperText="Modelo de receita"
          variant="outlined"
        />
        <TextField
          id="socios"
          select
          label="Qual fase atual?"
          style={{ marginTop: 18,marginLeft: 8, width: '48%'}}
          value={selects}
          SelectProps={{
            native: true,
          }}
          helperText="Fase da startup"
          variant="outlined"
        />
        <TextField
          id="whats"
          select
          label="Investimento?"
          style={{ marginTop: 18,marginLeft: 8, width: '48%'}}
          value={selects}
          SelectProps={{
            native: true,
          }}
          helperText="Já recebeu investimento?"
          variant="outlined"
        />
        <TextField
          id="socios"
          select
          label="Momento"
          style={{ marginTop: 18,marginLeft: 8, width: '48%'}}
          value={selects}
          SelectProps={{
            native: true,
          }}
          helperText="O que você busca?"
          variant="outlined"
        />
        
      </div>
    </div>;
    default:
      return <h1>Ooops, parece que algo deu errado!</h1>;
  }
}

export default function FormStarter() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

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
    <div className={classes.root}>
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
            <Typography className={classes.instructions}>
              Cadastro finalizado com sucesso!
              clique aqui para finalizar o pagamento
            </Typography>
            <Modal />
          </div>
        ) : (
          <div>
            <p className={classes.instructions}>{getStepContent(activeStep)}</p>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Voltar
              </Button>

              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    O passo {activeStep + 1} está completo.
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finalizar' : 'Próximo'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
