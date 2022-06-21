import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Lottie from 'react-lottie';
import api from '../../Data/endPoints';
import { format } from 'date-fns';
import * as Yup from 'yup';
import axios from 'axios';

// material design components
import CreditCardIcon from '@material-ui/icons/CreditCard';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {
  makeStyles,
  FormControl,
  FormLabel,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  CircularProgress,
  Typography,
  TextField,
  Stepper,
  Step,
  StepButton
} from '@material-ui/core/';

import InputMask from "react-input-mask";
import { Button, Col, FormGroup, Label } from 'reactstrap';
import { Row } from 'reactstrap';

import animationData from '../../components/Animation/lf30_editor_TBeJvw.json';

import WellComeModal from './WelcomeModal';
import CardModal from './CardModal';
import BoletoModal from './BoletoModal';
import TermsModal from '../Sections/TermsModal'

import CardsAccept from '../../assets/img/brand/bandeiras-final.png';
import LogoMaster from '../../assets/img/brand/master.png';
import LogoVisa from '../../assets/img/brand/visa.png';
import LogoElo from '../../assets/img/brand/elo.png';
import LogoHiper from '../../assets/img/brand/hiper.png';
import ChipCard from '../../assets/img/brand/chip.png';
import WalletIcon from '../../assets/img/brand/wallet.png';
import BankSlipIcon from '../../assets/img/brand/boleto-icon.png';

import plainLogoGrowth from '../../assets/img/icons/common/growth.png'
import plainLogoStart from '../../assets/img/icons/common/start.png'

import { segmentos, negociosShort, fasesShort, papeis, investimentos, time, ondenosconheceu } from '../../Data';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    minWidth: 300,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }

}));



export default function FormRenovacao({ couponCallback }) {

  const classes = useStyles();

  const [hasError, setHasError] = useState({
    cnpj: false,
  });

  const [activeStep, setActiveStep] = useState(0);
  const [validaCnpj, setValidaCnpj] = useState(false);
  const [completed, setCompleted] = useState({});
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [idConsumer, setIdConsumer] = useState('');
  const [isLastStepCompleted, setIsLastStepCompleted] = useState(localStorage.setItem('isLastStep', "false"));
  const [loading, setLoading] = useState(false);
  const [loadingContent, setLoadingContent] = useState(false);

  const [wallet, setWallet] = useState('');

  const [price, setPrice] = useState('');
  const [planName, setPlanName] = useState('');
  const [startPlain, setStartPlain] = useState('');
  const [endPlain, setEndPlain] = useState('');
  const [subsCriptionID, setSubscriptionID] = useState('');
  const [subScriptionStatus, setSubScriptionStatus] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [isNotSubsCription, setIsNotSubsCription] = useState(false);
  const [selectNewPlan, SetSelectNewPlan] = useState('');
  const [planID, SetPlanID] = useState('');
  const [coupon, setCoupon] = useState('');

  const [country, setCountry] = useState('UF');
  const [municipio, setMunicipio] = useState('Cidade');
  const [logradouro, setLogradouro] = useState('Nome da Rua');
  const [numeroLogradouro, setNumeroLogradouro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [getcargo, setGetCargo] = useState('');
  const [getsocios, setGetSocios] = useState('');
  const [getsegmento, setGetSegmento] = useState('');
  const [getmodelo, setGetModelo] = useState('');
  const [getfase, setGetFase] = useState('');
  const [getinvestimentos, setGetInvestimento] = useState('');
  const [gettime, setGetTime] = useState('');
  const [getajuda, setGetAjuda] = useState('');
  const [site, setSite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [youtube, setYoutube] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('UF');

  const history = useHistory()

  const steps = getSteps();

  const UppCellAction = () => {
    setIsNotSubsCription(true)
  }

  const handleChangeNewPlan = (event) => {
    SetSelectNewPlan(event.target.value);
  };

  const plansLabel = (id) => {
    return id === '151756' ? 'Plano Growth' : 'Plano Start - Gratuito'
  }

  setInterval(() => {
    setIsLastStepCompleted(localStorage.getItem('isLastStep'))
    if (isLastStepCompleted === "true") {
      handleNext();
    }

  }, 1000);

  useEffect(() => {
    let cnpjValidate = {
      cnpj: cnpj.replace(/\D/g, '')
    }

    try {
      if (cnpjValidate.cnpj.length === 14) {
        setLoading(true)
        handleSubscription(cnpjValidate.cnpj);
      }

    } catch (err) {
      toast.error('Problemas ao conectar-se com o servidor.')
    }
  }, [cnpj]);

  useEffect(() => {
    validateCoupon(coupon);
  }, [coupon])

  useEffect(() => {
    if (isLastStepCompleted === "true")
      updateCustomer();
  }, [isLastStepCompleted])

  async function getAddress() {
    await axios.get(`https://viacep.com.br/ws/${cep.replace(/-\s/g, "")}/json/`)
      .then(response => {
        setUf(response.data.uf)
        setMunicipio(response.data.localidade)
        setLogradouro(response.data.logradouro)
        setBairro(response.data.bairro)
        setCountry('BR')
      })
  }

  async function handleSubscription(cnpj) {

    await api.get(`validate/${cnpj.replace(/\D/g, '')}`).then(response => {

      if (response.data.status === 400 || typeof response.data.body.customer === "string") {
        history.push('/growth')
      } else {
        setValidaCnpj(true);
        setHasError({ cnpj: false });
        setLoading(false);
        setBusiness(response.data.body.customer.name);
        setName(response.data.body.customer.nome_pessoa_fisica);
        setIdConsumer(response.data.body.customer.id)
        localStorage.setItem('consumer_id', response.data.body.customer.id)
        setLoadingContent(true)
        setFirstName(response.data.body.customer.nome_pessoa_fisica.split(' '))
      }
    })
    .catch((err) => {
      toast.error('Digite um CNPJ válido.');
    })
    .finally(() => {
      setLoadingContent(false)
    })
  }

  async function getSubscriptions() {
    await api.get(`vindi/customer/find/${idConsumer}`).then(
      res => {

        if (!res.data.body) {
          toast.error('Localizamos seu cadastro, porém você ainda não selecionou seu plano.');
          setIsNotSubsCription(true)

        } else {
          setPrice(res.data.body.subscriptions[res.data.body.subscriptions.length - 1].product_items[0].pricing_schema.short_format);
          setSubscriptionID(res.data.body.subscriptions[res.data.body.subscriptions.length - 1].id);
          setPlanName(res.data.body.subscriptions[res.data.body.subscriptions.length - 1].product_items[0].product.name);
          setStartPlain(res.data.body.subscriptions[[res.data.body.subscriptions.length - 1]].start_at);
          setEndPlain(res.data.body.subscriptions[[res.data.body.subscriptions.length - 1]].end_at);
          setWallet(res.data.body.subscriptions[[res.data.body.subscriptions.length - 1]].payment_profile);
          setSubScriptionStatus(res.data.body.subscriptions[[res.data.body.subscriptions.length - 1]].product_items[0].status);
          SetPlanID(res.data.body.subscriptions[[res.data.body.subscriptions.length - 1]].plan.id)
          localStorage.setItem('plan_id', res.data.body.subscriptions[[res.data.body.subscriptions.length - 1]].plan.id);
        }
      }
    )
    .finally(() => {
      setLoadingContent(false)
    })

    await api.get(`vindi/customer/find-by-cnpj/${cnpj.replace(/\D/g, '')}`).then(
      res => {
        const { customers } = res.data.body;

        setMail(customers.email);
        setPhone(customers.phones[0].number);
        setBusiness(customers.name);
        setCnpj(customers.registry_code)
        setName(customers.metadata.nome_pessoa_fisica);
        setCep(customers.address.zipcode);
        setNumeroLogradouro(customers.address.number);
        setComplemento(customers.address.additional_details);
        setSite(customers.metadata.end_site);
        setLinkedin(customers.metadata.linkedin);
        setFacebook(customers.metadata.facebook);
        setInstagram(customers.metadata.instagram);
        setYoutube(customers.metadata.youtube);
        setGetCargo(customers.metadata.cargo_empresa);
        setGetSocios(customers.metadata.nro_socios);
        setGetModelo(customers.metadata.modelo_negocio);
        setGetSegmento(customers.metadata.segmento);
        setGetFase(customers.metadata.fase_startup);
        setGetInvestimento(customers.metadata.recebeu_investimento);
        setGetTime(customers.metadata.tamanho_time);
        setGetAjuda(customers.metadata.onde_nos_conheceu);
      }
    )
    .catch((err) => {
      toast.error('Problemas ao conectar-se com o servidor.')
    })
  };

  async function updateCustomer() {
    try {
      await api.post(`/vindi/customer/${idConsumer}`, {
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
          onde_nos_conheceu: getajuda,
          linkedin,
          facebook,
          instagram,
          youtube,
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
        phones: [
          {
            phone_type: 'mobile',
            number: phone,
          }
        ]
      })
    } catch (err) {
      toast.error('Problemas ao conectar-se com o servidor.')
    }
  }

  const InfoDataSubscription = (<div className="content-subscription">

    <Card className={classes.root}>
      <CardContent>
        Identificação: <b>{subsCriptionID}</b>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Status do plano: {subScriptionStatus === 'active' ? 'Ativo' : 'Inativo ou não encontrado'}
        </Typography>

        {isNotSubsCription ? (
          <>
            <hr />
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              <b>Selecione um de nossos planos para se tornar um associado.</b>
            </Typography>
            <hr />
          </>
        ) : ''}

        <Typography variant="h5" component="h2">
          Startup: <b> {business ? business : 'Não informado.'} </b>
        </Typography>


        <Typography className={classes.pos} color="textSecondary">
          Responsável: {name ? name : 'Não informado.'}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Plano: {planName ? planName : 'Não informado.'}
        </Typography>

        {planName === 'Growth' || planName === 'Growth a vista' ? (<img src={plainLogoGrowth} className="plan-logo--card" alt="Growth" width="60px" height="auto" />) : planName === 'Start' ? (<img src={plainLogoStart} className="plan-logo--card" alt="Growth" width="60px" height="auto" />) : ''}

        <Typography className={classes.pos} color="textSecondary">
          Valor {price ? price : 'não informado'}
        </Typography>

        <hr />

        <Typography variant="body2" component="p">
          Data de início: {startPlain ? format(new Date(startPlain), 'dd/MM/yyyy') : 'não informado'}
        </Typography>

        <Typography variant="body2" component="p">
          Data de termino: {endPlain ? format(new Date(endPlain), 'dd/MM/yyyy') : 'não informado'}
        </Typography>
      </CardContent>
    </Card>

  </div>);

  const LoadContentProgress = (<>
    <div className="content-load--progress">
      <CircularProgress disableShrink />
    </div>
  </>);

  const SelectSubscription = (
    <>
      <div className="card-row--active">
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <b>Selecione uma assinatura: </b>
        </Typography>

        <FormControl component="fieldset">
          <FormLabel component="legend"></FormLabel>
          <RadioGroup value={selectNewPlan} onChange={handleChangeNewPlan} required={true} >

            {planID === 160505 ? (
              <>
                <FormControlLabel
                  value="151756"
                  control={<Radio color="primary" />}
                  label="Plano Growth"
                />
                <br />
              </>
            ) : (
              <>
                <FormControlLabel
                  value="151756"
                  control={<Radio color="primary" />}
                  label="Plano Growth"
                />

                <FormControlLabel
                  value="160505"
                  control={<Radio color="primary" />}
                  label="Plano Start - Gratuito"
                />
              </>
            )}



          </RadioGroup>
        </FormControl>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Plano selecionado: {plansLabel(selectNewPlan)}<br />
          Ao selecionar o plano, você automáticamente concorda com os termos e políticas de associados.
          <br />
          <br />
          {<TermsModal />}
          <hr />
          Agora basta escolher um dos planos acima<br />
          e concluir sua assinatura. <br />
          <hr />
          Precisa de ajuda? <br />
          Email: associados@abstartups.com.br
        </Typography>

      </div>

    </>
  );


  const PaymentWithBankSlip = (
    <>
      <div className="card-row--active">
        {planID === 160505 ? (

          <>
            <center>
              <Typography variant="h5" component="h2">
                <b>Obá! você tem um upgrade disponível </b><br />
              </Typography>
            </center>
            <br />
            <center>
              <Button
                variant="contained"
                onClick={UppCellAction}
                color="danger"
              >
                Quero ser um Growth
              </Button>
            </center>
          </>

        ) : (
          <>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Forma de pagamento: <b>Boleto</b>
            </Typography>
            <br />
            <center>
              <img src={BankSlipIcon} width="100px" height="auto" alt="" />
            </center>
          </>
        )}


        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <br />
          {!subScriptionStatus ? (<Button >Clique aqui para re-imprimir sua via.</Button>) : (
            <>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Aqui está tudo certo, agora é só acessar seu painel de benefícios e aproveitar. <br />

                <br />
                <center>
                  {parseInt(format(new Date(endPlain), `MM`)) - 1 > parseInt(format(new Date(), `MM`)) && parseInt(format(new Date(endPlain), `yyyy`)) >= parseInt(format(new Date(), `yyyy`)) ? (<>
                    {planID === 160505 ? (<>
                      <Button variant="contained" onClick={() => window.open('https://www.beneficiosabstartups.com.br/', '_blank')} color="primary">
                        Acesse seus benefícios
                      </Button>
                    </>) : (<>
                      <Button variant="contained" onClick={() => window.open('https://www.beneficiosabstartups.com.br/', '_blank')} color="primary">
                        Acesse seus benefícios
                      </Button>
                    </>)}
                  </>) : (
                    <Typography variant="h5" component="h2">
                      <b>Renovação disponível</b>
                    </Typography>
                  )}
                </center>
              </Typography>
            </>)}
        </Typography>

      </div>

    </>
  )

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  function getSteps() {
    return ['Identificação', 'Informações', 'Contato', 'Negócio', 'Renovação', 'Confirmação'];
  }

  function getStepContent(step) {

    switch (step) {
      case 0:
        return (<form autoComplete="on" ><Row lg="8">
          <WellComeModal />
          <div className="double-input--form" >
            <InputMask
              value={cnpj}
              onChange={e => setCnpj(e.target.value)}
              mask="99.999.999/9999-99"
            >
              {() =>
                <TextField
                  label={'CNPJ'}
                  required={true}
                  id="cnpj"
                  type='text'
                  helperText={loading ? "Carregando..." : "CNPJ Válido" && hasError.cnpj ? "CNPJ Inválido e/ou existente" : "Apenas números"}
                  vmargin="normal"
                  fullWidth
                  variant="outlined"
                  style={{ margin: 8 }}
                  error={hasError.cnpj}
                />}
            </InputMask>
          </div>
        </Row></form>);

      case 1:
        return (
          <form autoComplete="on" ><Row lg="8">
            <TextField
              label="Nome"
              required={true}
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
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
              onChange={e => setBusiness(e.target.value)}
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
                onChange={e => setCnpj(e.target.value)}
                mask="99.999.999/9999-99"
              >
                {() =>
                  <TextField
                    label="CNPJ"
                    required={true}
                    id="cnpj"
                    type='text'
                    helperText={loading ? "Carregando..." : "CNPJ Válido" && hasError.cnpj ? "CNPJ Inválido e/ou existente" : "Apenas números"}
                    vmargin="normal"
                    variant="outlined"
                    style={{ margin: 8 }}
                    fullWidth
                    error={hasError.cnpj}
                  />}
              </InputMask>

              <InputMask
                mask={phone.length === 10 ? "55 (99) 9999.9999" : "55 (99) 99999.9999"}
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
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
              onChange={e => setMail(e.target.value)}
              style={{ margin: 8 }}
              placeholder="Cadastre seu melhor email"
              fullWidth
              helperText="Com este email você realizará o seu login e também receberá todos os comunicados oficiais da Abstartups"
              margin="normal"
              variant="outlined"
              error={hasError.mail}
            />
          </Row></form>
        );

      case 2:
        return (
          <form><Row lg="8">

            <div style={{ display: 'flex', width: '100%' }}>
              <InputMask
                mask="99999-999"
                value={cep}
                onChange={e => { setCep(e.target.value) }}

              >
                {() =>
                  <TextField
                    label="CEP"
                    id="cep"
                    required={true}
                    style={{ margin: 8 }}
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
                style={{ margin: 8, marginBottom: 30 }}
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
                style={{ margin: 8, width: 200 }}
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
                onChange={e => setNumeroLogradouro(e.target.value)}
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
                onChange={e => setComplemento(e.target.value)}
                helperText="Ex: Casa, Apartamento ..."
                vmargin="normal"
                variant="outlined"
                error={hasError.complemento}
              />
            </div>

            <hr />

            <TextField
              id="website"
              label="Site"
              type='text'
              style={{ margin: 8 }}
              value={site}
              onChange={e => setSite(e.target.value)}
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
                onChange={e => setLinkedin(e.target.value)}
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
                onChange={e => setFacebook(e.target.value)}
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
                onChange={e => setInstagram(e.target.value)}
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
                onChange={e => setYoutube(e.target.value)}
                helperText="URL do Youtube (opcional)"
                vmargin="normal"
                variant="outlined"
              />
            </div>
          </Row></form>
        );

      case 3:
        return (
          <form>
            <Row lg="8" xs="12">
              <div className="double-input--form">
                <TextField
                  id="qual-seu-cargo"
                  select
                  fullWidth
                  required={true}
                  value={getcargo}
                  onChange={e => setGetCargo(e.target.value)}
                  label="Qual seu cargo?"
                  style={{ margin: 8 }}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Informe o seu cargo"
                  variant="outlined"
                  error={hasError.getcargo}
                >
                  {papeis.map(cargo => (
                    <option key={cargo.id} value={cargo.text}>{cargo.text}</option>
                  ))}
                </TextField>

                <TextField
                  id="socios"
                  select
                  fullWidth
                  required={true}
                  value={getsocios}
                  onChange={e => setGetSocios(e.target.value)}
                  label="Numero de sócios?"
                  style={{ margin: 8 }}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Quantos sócios possui?"
                  variant="outlined"
                  error={hasError.getsocios}
                >
                  {time.map(time => (
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
                  onChange={e => setGetSegmento(e.target.value)}
                  label="Segmento"
                  style={{ margin: 8 }}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Selecione um dos modelos listados"
                  variant="outlined"
                  error={hasError.getsegmento}
                >

                  {segmentos.map(segmentos => (
                    <option key={segmentos.id} value={segmentos.text}>{segmentos.text}</option>
                  ))}

                </TextField>

                <TextField
                  id="modelo"
                  select
                  fullWidth
                  required={true}
                  value={getmodelo}
                  onChange={e => setGetModelo(e.target.value)}
                  label="Modelo de negócio?"
                  style={{ margin: 8 }}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Selecione uma das opções."
                  variant="outlined"
                  error={hasError.getmodelo}
                >
                  {negociosShort.map(negocios => (
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
                  onChange={e => setGetFase(e.target.value)}
                  label="Qual fase atual?"
                  style={{ margin: 8 }}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Fase da startup"
                  variant="outlined"
                  error={hasError.getfase}
                >
                  {fasesShort.map(fase => (
                    <option key={fase.id} value={fase.text}>{fase.text}</option>
                  ))}
                </TextField>

                <TextField
                  id="whats"
                  select
                  fullWidth
                  required={true}
                  value={getinvestimentos}
                  onChange={e => setGetInvestimento(e.target.value)}
                  label="Já recebeu investimento?"
                  style={{ margin: 8 }}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Já recebeu investimento?"
                  variant="outlined"
                  error={hasError.getinvestimentos}
                >
                  {investimentos.map(investimento => (
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
                  onChange={e => setGetTime(e.target.value)}
                  label="Qual o tamanho do seu time"
                  style={{ margin: 8 }}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Quantos colaboradores possui"
                  variant="outlined"
                  error={hasError.gettime}
                >
                  {time.map(time => (
                    <option key={time.id} value={time.text}>{time.text}</option>
                  ))}
                </TextField>
                <TextField
                  id="ajuda"
                  select
                  fullWidth
                  required={true}
                  value={getajuda}
                  onChange={e => setGetAjuda(e.target.value)}
                  label="Onde nos conheceu?"
                  style={{ margin: 8 }}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Selecione uma das opções"
                  variant="outlined"
                  error={hasError.getajuda}
                >
                  {ondenosconheceu.map(ondenosconheceu => (
                    <option key={ondenosconheceu.id} value={ondenosconheceu.text}>{ondenosconheceu.text}</option>
                  ))}

                </TextField>
              </div>
            </Row>
          </form>
        )

      case 4:
        return (
          <Row lg="8" xs="12">
            <div>

              <h3>Seus dados:</h3>

              <div className='content-stage--infos'>
                {loadingContent ? LoadContentProgress : InfoDataSubscription}

                {wallet ? (
                  <>
                    <div className="card-row--active">
                      <p>Pago com: <b>{wallet ? wallet.payment_company.name : 'não informado'}</b></p>
                      <div className="cards-information">
                        <div className="card-line">
                          <img src={ChipCard} alt="leftchip" width="30px" height="auto" />
                          {wallet.payment_company.name === 'MasterCard' ?
                            (<> <img src={LogoMaster} alt="MasterLogo" width="40px" height="auto" /> </>) :
                            wallet.payment_company.name === 'Visa' ?
                              (<> <img src={LogoVisa} alt="VisaLogo" width="40px" height="auto" /> </>) :
                              wallet.payment_company.name === 'Elo' ?
                                (<> <img src={LogoElo} alt="EloLogo" width="40px" height="auto" /> </>) :
                                wallet.payment_company.name === 'HiperCard' ?
                                  (<> <img src={LogoHiper} alt="HiperLogo" width="40px" height="auto" /> </>) : 'Não informado.'}
                        </div>
                        <p className="card-label-min"><b>{wallet ? '**** **** **** ' + wallet.card_number_last_four : 'não informado'}</b></p>
                        {loadingContent ? LoadContentProgress : wallet || !loadingContent ? (<><p><b>{wallet.holder_name}</b></p></>) : (<><p><b>não informado</b></p></>)}
                      </div>
                      <div className="wallet-line">
                        <p><b>Wallet ativa</b></p>
                        <img src={WalletIcon} alt="" width="30px" height="auto" />
                      </div>
                    </div>
                    <br />
                  </>
                ) : isNotSubsCription ? SelectSubscription : PaymentWithBankSlip}

              </div>
            </div>
          </Row>

        );

      case 5:
        return (

          <>
            {isLastStepCompleted === "true" ? Thanks : FormPayment}
          </>

        );

      default:
        return (
          <>
            <h2>Tudo certo!</h2>
            <p>Aguarde a confirmação em seu email </p>
          </>
        );
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
        <hr />
        <h5 className={classes.instructions}>Oba {business}, parabéns! ;) Agora você faz parte da maior rede de startups do Brasil!</h5>
        <h5 className={classes.instructions}>Acesse nosso portal de benefícios e aproveite!</h5>

        <p>O Plano {selectNewPlan ? 'selecionado' : 'renovado'} é o: <b>{'Nome do plano'}</b></p>

        <Button variant="contained" onClick={() => window.open('https://www.beneficiosabstartups.com.br/', '_blank')} color="primary">Acesse seus benefícios</Button>

      </center>
    </div>
  )

  const NowDate = Date.now();
  const DateNowCondition = NowDate;

  // const isPlanStart = () => {
  //   return planName === 'Plano Start' && planID === 160505;
  // }

  const FormCoupon = (
    <FormGroup row>
      <Label
        for="coupon"
        className={classes.instructions}
        sm={3}
      >
        <b>Tem cupom?</b>
      </Label>
      <Col sm={6} style={{ paddingLeft: '0px' }} >
        <TextField
          id="coupon"
          label="Seu cupom aqui!"
          type='text'
          style={{ margin: 8 }}
          value={coupon}
          onChange={e => setCoupon(e.target.value) && validateCoupon(e.target.value)}
          placeholder="ABSCUPOM123"
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </Col>
    </FormGroup>
  )

  const FormPayment = (
    <div>

      {DateNowCondition >= endPlain ? (
        <>
          <center>
            <h5 className={classes.instructions}><b>{FirstName[0]}</b>, estamos muito felizes por mais este ano com a <b>{business}</b>, estamos trabalhando duro para oferecer o melhor conteúdo para sua startup crescer ainda mais :)</h5>

            {wallet ? (<><h5>Renovar assinatura com cartão cadastrado</h5> <Button block color="danger" type="button"> <CreditCardIcon /> RENOVAR AGORA MESMO </Button></>) : ''}

            <hr />

            {selectNewPlan === '160505' ? (
              <>
                <h5>Tudo certo aqui, não há nada para pagar!</h5>
                <h5>Agora é só acessar seu painel de benefícios e aproveitar.</h5>
                <Button variant="contained" onClick={() => { window.open('https://www.beneficiosabstartups.com.br', '_blank') }} color="primary">Acessar painel de benefícios</Button>


                <hr />

              </>) : (
              <>
                <div className="payment-description">
                  <p><b>Pague com:</b></p> <img src={CardsAccept} alt="cartões" width="30%" height="auto" />
                </div>
                <center>
                  {FormCoupon}

                </center>
                <br />
                <CardModal />
                <br />
                <BoletoModal />
                <br />
              </>)}


          </center>
        </>) : (
        <>
          {parseInt(format(new Date(endPlain), `MM`)) - 1 > parseInt(format(new Date(), `MM`)) && parseInt(format(new Date(endPlain), `yyyy`)) >= parseInt(format(new Date(), `yyyy`)) ? (<center>
            <div>
              <h5 className={classes.instructions}><b>{business}</b>, seu plano está ativo, continue aproveitando seus benefícios:) </h5>

              <Button variant="contained" onClick={() => { window.open('https://www.beneficiosabstartups.com.br', '_blank') }} color="primary">Acessar painel de benefícios</Button>
            </div>
            <hr />
            <br /><br />
          </center>
          ) : (
            <center>
              <div>
                <h5 className={classes.instructions}><b>{business}</b>, Está na hora de Renovar seu benefício.</h5>
                <h5 className={classes.instructions}><b>Selecione o método de pagamento desejado, e pronto.</b></h5>

                <div className="payment-description">
                  <p><b>Pague com:</b></p> <img src={CardsAccept} alt="cartões" width="30%" height="auto" />
                </div>
                <br />
                <CardModal />
                <br />
                <BoletoModal />
                <br />
              </div>
              <hr />
              <br /><br />
            </center>
          )}
        </>
      )}
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

    if (newActiveStep === 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // localStorage.removeItem('consumer_id');
      getSubscriptions();


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

        if (!validaCnpj) {
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

    if (newActiveStep === 2) {
      window.scrollTo({ top: 100, behavior: 'smooth' });

      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          business: Yup.string().required(),
          cnpj: Yup.string().required().min(14),
          phone: Yup.string().required().min(12).max(13),
          mail: Yup.string().email().required(),
        });

        const data = {
          name,
          business,
          cnpj,
          phone,
          mail
        }

        await schema.validate(data, {
          abortEarly: false
        })

        if (!validaCnpj) {
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
    if (newActiveStep === 3) {
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

        window.scrollTo({ top: 100, behavior: 'smooth' });

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
          const { cep, numeroLogradouro, complemento } = errorMessages;
          setHasError({
            ...hasError, cep, numeroLogradouro, complemento
          })
        }
      }

    }
    if (newActiveStep === 4) {
      window.scrollTo({ top: 100, behavior: 'smooth' });

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
            {
              ...hasError,
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

    if (newActiveStep === 5) {
      try {

        if (selectNewPlan) {

          const schema = Yup.object().shape({
            selectNewPlan: Yup.string().required()
          });

          const data = {
            selectNewPlan,
          }

          await schema.validate(data, {
            abortEarly: false
          })
          localStorage.setItem('plan_id', selectNewPlan)
        }

        window.scrollTo({ top: 100, behavior: 'smooth' });

        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        setActiveStep(newActiveStep);
        toast.success('Tudo pronto, agora é só selecionar o método de pagamento.')

      } catch (err) {
        toast.error('Por favor, selecione uma assinatura.')
      }

    }

    if (newActiveStep === 6) {
      try {

        if (isLastStepCompleted === "false") {
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

  const validateCoupon = (coupon) => {
    if (coupon.length < 5) {
      return;
    }
    setLoading(true);
    api.get(`coupon/validate/${coupon}`).then(response => {
      if (response.data.status_code >= 400 && response.data.status_code <= 500) {
        setLoading(false);
        setHasError({ cupom: true });
        toast.error(`Cupom inválido`);
      } else {
        if (response.data.body != null) {
          setLoading(false);
          toast.success(`Cupom aplicado`);
          localStorage.setItem('plan_id', response.data.body.id)
          couponCallback(response.data.body);
        } else {
          setLoading(false);
          setHasError({ cupom: true });
          toast.error(`Cupom inválido`);
        }
      }
    }).catch(error => {
      setLoading(false);
      setHasError({ cupom: true });
      toast.error(`Cupom inválido`);
    })
  }

  function handleComplete(e) {
    e.preventDefault();
    handleNext();
  };


  const StepsButtonAct = (
    <Typography variant="caption" className={classes.completed}>

      {DateNowCondition >= endPlain || subScriptionStatus === 'inative' ? '' : (
        <> {completedSteps() === totalSteps() - 1 ? 'Cadastro realizado com sucesso!' : (
          <Button variant="contained" color="primary" type="submit" onClick={handleComplete}>
            Próximo <NavigateNextIcon />
          </Button>
        )}
          {' '} O passo {activeStep + 1} está completo.
        </>)}
    </Typography>
  );

  const FinishStepsAct = (<>
    {completedSteps() === totalSteps() - 1 ? '' : (<Button variant="contained" color="primary" type="submit" onClick={handleComplete}>
      {loading ? 'Carregando aguarde...' : 'Próximo'} <NavigateNextIcon />
    </Button>)}
  </>
  );

  const AllStepsCompleted = allStepsCompleted() ? (
    <div>
      <center>

        <Lottie options={defaultOptions}
          height={100}
          width={100}
        />
        <h5 className={classes.instructions}><b>{FirstName[0]}</b>{FirstName[0] ? ', estamos ' : 'Estamos '} muito felizes por mais este ano com a {business}, estamos trabalhando duro para oferecer o melhor conteúdo para sua startup crescer ainda mais :)</h5>
        <h3 className={classes.instructions}>Acesse nosso portal de benefícios e aproveite!</h3>
        <p>O Plano {selectNewPlan ? 'selecionado' : 'renovado'} é o: <b>{planName}</b></p>

        <Button variant="contained" onClick={() => { window.open('https://www.beneficiosabstartups.com.br/', '_blank') }} color="primary">Acessar painel de benefícios</Button>
      </center>
    </div>

  ) : (
    <div>
      <p className={classes.instructions}></p>
      {getStepContent(activeStep)}
      <div>
        {activeStep !== steps.length &&
          (completed[activeStep] ? StepsButtonAct : FinishStepsAct)}
      </div>
    </div>
  )


  return (
    <Col lg="8">
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {AllStepsCompleted}
      </div>
    </Col>
  );
}