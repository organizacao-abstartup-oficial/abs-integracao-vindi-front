import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Lottie from 'react-lottie';
import axios from 'axios';
import * as Yup from 'yup';
// import { cnpj } from 'cpf-cnpj-validator';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputMask from "react-input-mask";
import { Col, Row } from 'reactstrap';

import { segmentos, negociosShort, fasesShort, papeis, investimentos, time, ondenosconheceu } from '../../Data';
import animationData from '../../components/Animation/lf30_editor_TBeJvw.json';
import CardModal from './CardModal';
import BoletoModal from './BoletoModal';
import TermsModal from './TermsModal';

import CardsAccept from '../../assets/img/brand/bandeiras-final.png'


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
  const [checked, setChecked] = useState(false);

  const [ hasError, setHasError ] = useState({
    name: false,
    business: false,
    cnpj: false,
    phone: false,
    mail: false,
    password: false,
    confirmpassword: false,
    getcargo: false,
    getsocios: false,
    getsegmento: false,
    getmodelo: false,
    getfase: false,
    getinvestimentos: false,
    gettime: false,
    getajuda: false,
    cep: false,
    numeroLogradouro: false,
    checkedTerm: checked
  });
  const [ activeStep, setActiveStep ] = useState(0);
  const [validaCnpj, setValidaCnpj] = useState(false);
  const[ completed, setCompleted ] = useState({});
  const [ name, setName ] = useState('');
  const [ cep, setCep ] = useState('');
  const [ uf, setUf ] = useState('UF');
  const [ country, setCountry ] = useState('UF');
  const [ municipio, setMunicipio ] = useState('Cidade');
  const [ logradouro, setLogradouro ] = useState('Nome da Rua');
  const [ numeroLogradouro, setNumeroLogradouro ] = useState('');
  const [ complemento, setComplemento ] = useState('');
  const [ bairro, setBairro ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ mail, setMail ] = useState('');
  const [ business, setBusiness ] = useState('');
  const [ cnpj, setCnpj ] = useState('');
  const [ razaoSocial, setRazaoSocial ] = useState('');
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
  const [ idConsumer, setIdConsumer ] = useState('');
  const [isLastStepCompleted, setIsLastStepCompleted] = useState(localStorage.setItem('isLastStep', "false"));

  const steps = getSteps();


  setInterval(() => {
    setIsLastStepCompleted(localStorage.getItem('isLastStep'))
    if(isLastStepCompleted === "true") {
      handleNext();
    }
  }, 1000);


  async function  getAddress(){
    await axios.get(`https://viacep.com.br/ws/${cep.replace(/-\s/g,"")}/json/`)
    .then( response => {
      setUf(response.data.uf)
      setMunicipio(response.data.localidade)
      setLogradouro(response.data.logradouro)
      setBairro(response.data.bairro)
      setCountry('BR')
      localStorage.clear();
    })
  }

  useEffect(() => {
    let cnpjValidate = {
      cnpj: cnpj.replace(/\D/g, '')
    }

      try {
        if(cnpjValidate.cnpj.length === 14){
          axios.post('https://apiv1-abstartups.herokuapp.com/cnpj/', cnpjValidate).then(response => {
            if(response.data.status !== 400) {
              setRazaoSocial(response.data.nome)
              setValidaCnpj(true);
              setHasError({cnpj: false})
              return;
            }
            setHasError({cnpj:true})
          })
        }
      } catch (err) {
        toast.error('Problemas ao conectar-se com o servidor.')
        
      }
  }, [cnpj])

  async function PostRegister(){
    let consumerData = {
      name: business,
      email: mail,
      registry_code: cnpj.replace(/\D/g, ''),
      metadata: {
        razao_social: razaoSocial,
        nome_pessoa_fisica: name,
        cargo_empresa: getcargo,
        nro_socios: getsocios,
        segmento: getsegmento,
        modelo_negocio: getmodelo,
        fase_startup: getfase,
        recebeu_investimento: getinvestimentos,
        tamanho_time: gettime,
        end_site: site,
        linkedin,
        facebook,
        instagram,
        youtube,
        password
      },
      address: {
        street: logradouro,
        number: numeroLogradouro,
        additional_details: complemento,
        zipcode: cep,
        neighborhood: bairro,
        city: municipio,
        state: uf,
        country: country
      },
      phones: {
        phone_type: 'mobile',
        number: phone,
      }
    }

     try {
      console.log(consumerData)
      await axios.post( 'https://apiv1-abstartups.herokuapp.com/consumer', consumerData)
      .then( response => {
        localStorage.removeItem('id_consumer');
        setIdConsumer(response.data.customer.id);
        localStorage.setItem('consumer_id', JSON.stringify(response.data.customer.id));
      })
       
     } catch (error) {
       toast.error('Ooops, houve um problema em seu cadastro, por favor tente novamente.')
       
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
  return ['Informações', 'Contato', 'Modelo de negócio', 'Pagamento'];
  }

  function getStepContent(step) {

    switch (step) {
      case 0:
        return ( <form autoComplete="on" ><Row lg="8">

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
            error={hasError.name}
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
            error={hasError.business}
          />
              <div className="double-input--form" >
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
                      helperText="Apenas números"
                      vmargin="normal"
                      variant="outlined"
                      style={{ margin: 8 }}
                      fullWidth
                      error={hasError.cnpj}
                      />}
                </InputMask>

                <InputMask
                  mask={ phone.length === 10 ? "55 (99) 9999.9999" : "55 (99) 99999.9999"}
                  value={phone}
                  onChange={ e => setPhone( e.target.value )}
                >
                  {() => 
                    <TextField
                      label="Telefone"
                      required={true}
                      id="phone"
                      type='text'
                      style={{ margin: 8 }}
                      placeholder="Telefone para contato"
                      fullWidth
                      helperText="Telefone com DDD"
                      margin="normal"
                      variant="outlined"
                      error={hasError.phone}
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
                error={hasError.mail}
              />
              <div className="double-input--form">
              <TextField
                label="Senha"
                required={true}
                id="password"
                type="password"
                fullWidth
                value={password}
                onChange={ e => setPassword(e.target.value) }
                style={{ margin: 8 }}
                placeholder="Cadastre sua senha"
                helperText="Com esta senha você irá realizar o seu login no Portal de Benefícios"
                margin="normal"
                variant="outlined"
                error={hasError.password}
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
                error={hasError.confirmpassword}
              />
              </div>
            </Row></form>);

        case 1: 
        return ( <form><Row lg="8">

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
                  error={hasError.cep}
                />}
          </InputMask>
        <Button 
          variant="contained"
          fullWidth
          color="primary"
          style={{ margin: 8, marginBottom: 30}}
          onClick={getAddress}>
          AUTO COMPLETAR ENDEREÇO
        </Button>

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
          helperText="Cidade"
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
          error={hasError.numeroLogradouro}
        />
        <TextField
          label="Complemento"
          id="complemento"
          fullWidth
          type='text'
          style={{ margin: 8 }}
          value={complemento}
          onChange={ e => setComplemento(e.target.value)}
          helperText="Ex: Casa, Apartamento ..."
          vmargin="normal"
          variant="outlined"
          error={hasError.complemento}
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

        <div className="double-input--form">
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

        <div className="double-input--form">
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
      </form>);

      case 2:
        return  (<form><Row lg="8" xs="12">
        
        <div className="double-input--form">
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
            helperText="Informe o seu cargo"
            variant="outlined"
            error={hasError.getcargo}
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
            error={hasError.getsocios}
          >
            {time.map( time => (
              <option key={time.id} value={time.text}>{time.text}</option>
            ))}

          </TextField>
          
          </div>
          <div className="double-input--form">

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
              error={hasError.getsegmento}
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
              error={hasError.getmodelo}
            >
              {negociosShort.map( negocios => (
                <option key={negocios.id} value={negocios.text}>{negocios.text}</option>
              ))}

            </TextField>

          </div>

          <div className="double-input--form">

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
              error={hasError.getfase}
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
              error={hasError.getinvestimentos}
            >
              {investimentos.map( investimento => (
                <option key={investimento.id} value={investimento.text}>{investimento.text}</option>
              ))}
            </TextField>

          
          </div>


          <div className="double-input--form">
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
            error={hasError.gettime}
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
            label="Onde nos conheceu?"
            style={{ margin: 8 }}
            SelectProps={{
              native: true,
            }}
            helperText="Selecione uma das opções"
            variant="outlined"
            error={hasError.getajuda}
          >
          { ondenosconheceu.map(ondenosconheceu => (
            <option key={ondenosconheceu.id} value={ondenosconheceu.text}>{ondenosconheceu.text}</option>
          ))}

          </TextField>
          
          </div>
        </Row>
            
        <RadioGroup aria-label="termos" name="termos" className="accept-term">
          <FormControlLabel value="acceptTerm" control={<Radio onChange={() => setChecked(true)}/>} label="Eu aceito os termos de uso." />{' '}<TermsModal/> 
        </RadioGroup>
      
        <hr/>
        </form>);
        case 3:
          return (
            <>
              { isLastStepCompleted === "true" ? Thanks : FormPayment }
            </>
          )
      default:
        return <h1>Ooops, parece que algo deu errado!</h1>;
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

        <p>O Plano Contratado é o: <b>Growth</b></p>

        <Button  variant="contained" onClilck={ () => window.open('https://app.uppo.com.br/abstartups/', '_blank') } color="primary">Acesse seus benefícios</Button>

      </center>
    </div>
  )

  const FormPayment = (
    <div>
      <center>
        <h5 className={classes.instructions}>Falta pouco para a {business} aproveitar todos os benefícios de ser um associado da ABStartups :)</h5>

        <p>O Plano Contratado é o: <b>Growth</b></p>
        <center>
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
      
    if (newActiveStep === 1){
      window.scrollTo({top: 100, behavior: 'smooth'});
      localStorage.removeItem('consumer_id');

      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          business: Yup.string().required(),
          cnpj: Yup.string().required().min(14),
          phone: Yup.string().required().min(11),
          mail: Yup.string().email().required(),
          password: Yup.string().required(),
          confirmpassword: Yup.string().oneOf([Yup.ref('password'), null])
        });
        
        const data = {
          name,
          business,
          cnpj,
          phone,
          mail,
          password,
          confirmpassword
        }

        await schema.validate(data, {
          abortEarly: false
        })

        

        if(!validaCnpj) {
          toast.error('Digite um CNPJ válido.');
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
            name,
            business,
            cnpj,
            phone,
            mail,
            password,
            confirmpassword 
          } = errorMessages;
          setHasError(
            {
              ...hasError, 
              name,
              business,
              cnpj,
              phone,
              mail,
              password,
              confirmpassword
            })
          
        }
      }
    }
    if (newActiveStep === 2){
      try {

        const schema = Yup.object().shape({
          cep: Yup.string().required(),
          numeroLogradouro: Yup.string().required(),
          complemento: Yup.string().required()
        });

        const data = {
          cep,
          numeroLogradouro,
          complemento
        };
        await schema.validate(data, {
          abortEarly: false
        });

        window.scrollTo({top: 100, behavior: 'smooth'});

        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        setActiveStep(newActiveStep);

      } catch (err) {
        toast.error('Por favor, preencha todos os campos obrigatórios.')
        if(err instanceof Yup.ValidationError){
          const errorMessages = {};
          err.inner.forEach(error => {
            errorMessages[error.path] = true;
          });
          const { cep, numeroLogradouro, complemento } = errorMessages;
          setHasError({
            ...hasError, cep, numeroLogradouro, complemento
          })
        }
      }
      
    } 
    if (newActiveStep === 3) {
      console.log(`Validar passo 2`)
      window.scrollTo({top: 100, behavior: 'smooth'});

      try {
        const schema = Yup.object().shape({
          getcargo: Yup.string().ensure().required(),
          getsocios: Yup.string().ensure().required(),
          getsegmento: Yup.string().ensure().required(),
          getmodelo: Yup.string().ensure().required(),
          getfase: Yup.string().ensure().required(),
          getinvestimentos: Yup.string().ensure().required(),
          gettime: Yup.string().ensure().required(),
          getajuda: Yup.string().ensure().required(),
        });

        const data = {
          getcargo,
          getsocios,
          getsegmento,
          getmodelo,
          getfase,
          getinvestimentos,
          gettime,
          getajuda
        };

        await schema.validate(data, {
          abortEarly: false
        });

        if(!checked) {
          toast.error('Por favor aceite os termos de uso para continuar.');
          setHasError(
            {
              ...hasError, 
              checkedTerm: true,
            });
            return;
        }

        PostRegister();
        // handleRegisterVindi()
        // handleRegisterUppo()

        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        setActiveStep(newActiveStep);

      } catch(err) {
        toast.error('Por favor, preencha todos os campos obrigatórios.')
        if(err instanceof Yup.ValidationError){
          const errorMessages = {};
          err.inner.forEach(error => {
            errorMessages[error.path] = true;
          });
          const { 
            getcargo,
            getsocios,
            getsegmento,
            getmodelo,
            getfase,
            getinvestimentos,
            gettime,
            getajuda,
            checkedTerm
          } = errorMessages;
          setHasError(
            { ...hasError, 
              getcargo,
              getsocios,
              getsegmento,
              getmodelo,
              getfase,
              getinvestimentos,
              gettime,
              getajuda,
              checkedTerm
            }
          );
        }
      }

      
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

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
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
            <StepButton onClick={ handleStep(index)} completed={completed[index] }>
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
              <h5 className={classes.instructions}>Oba {name}, parabéns! ;) Agora você faz parte da maior rede de startups do Brasil!</h5>
              <h3 className={classes.instructions}>Acesse nosso portal de benefícios e aproveite!</h3>
              <p>O Plano Contratado é o: <b>Growth</b>{ idConsumer ? '' : '' }</p>
              
              <Button  variant="contained" onClick={ () => { window.open('https://app.uppo.com.br/abstartups/', '_blank') } } color="primary">Acessar painel de benefícios</Button>
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
                    <Button variant="contained" color="primary" type="submit" onClick={handleComplete}>
                      { completedSteps() === totalSteps() - 1 ? 'Finalizar' : 'Próximo' } <NavigateNextIcon/>
                    </Button> {' '} O passo {activeStep + 1} está completo. 
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" type="submit" onClick={handleComplete}>
                    { completedSteps() === totalSteps() - 1 ? 'Finalizar' : 'Próximo' } <NavigateNextIcon/>
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </Col>
  );
}