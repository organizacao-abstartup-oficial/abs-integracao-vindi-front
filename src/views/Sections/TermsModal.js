import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';
import { Modal,  ModalBody, ModalHeader, Col } from 'reactstrap';

export default function Terms(props)  {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const termsOfUse = (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h5>TERMO DE ASSOCIAÇÃO</h5>
        <button onClick={toggle} style={{ border: 'none', background: 'none', fontSize: '1.5rem'}}>X</button>
      </div>
      <p>Para que sua empresa (“Startup”) se torne um membro associado da <strong>ASSOCIAÇÃO BRASILEIRA DE STARTUPS</strong>, associação civil sem fins lucrativos, CNPJ nº 19.939.915/0001-95, com sede na Rua Casa do Ator, nº 919 – 2º andar, Vila Olímpia, CEP 04.546-003, São Paulo/SP, (“Abstartups”), é imprescindível a leitura, aceitação e observância deste Termo de Associação (“Termo”).</p>
      <p><strong>1. Declarações e garantias</strong></p>
      <p>Como condição necessária para o ingresso no quadro social da Abstartups, a Startup declara e garante que:</p>
      <ol type="I">
        <li>Reconhece e concorda com a integralidade dos termos do Estatuto Social (“Estatuto”) da Abstartups;</li>
        <li>Reconhece e concorda que, no momento que precede à efetivação da associação à Abstartups e quando da efetivação de seu cadastro no site da Abstartups, observará os seguintes deveres e requisitos:
          <ol type="a">
            <li>Reconhecer a sua responsabilidade exclusiva pelas informações fornecidas no momento do cadastro no site da Abstartups, não cabendo responsabilização da Abstartups pelo fornecimento incorreto, inverossímil e/ou incompleto dos dados da Startup;</li>
            <li>Comunicar à Abstartups sobre qualquer alteração dos dados da Startup, como, mas sem limitação à, nome e/ou encerramento das atividades da empresa. </li>
            <li>Zelar pelo sigilo do seu login e senha de acesso do site da Abstartups, reconhecendo a sua integral responsabilidade pelas atividades associadas à sua conta no site da Abstartups;</li>
          </ol>
        </li>
        <li>Sem prejuízo de outros deveres e obrigações estabelecidos por lei ou pelo Estatuto Social da Abstartups, reconhece e concorda que, na condição de associada da Abstartups, a Startup, por si e por seus representantes indicados, cumprirá os seguintes deveres:
          <ol type="a">
            <li>Concorrer para a realização dos objetivos sociais da Abstartups, cumprindo e observando as disposições de seu Estatuto Social, disponível em [inserir link];</li>
            <li>Estar rigorosamente em dia com o pagamento de sua anuidade, conforme este Termo;</li>
            <li>Comunicar qualquer mudança de endereço, bem como de atividade e/ou administração da Startup;</li>
            <li>Zelar pela boa reputação e pela salvaguarda do patrimônio da Abstartups;</li>
            <li>Respeitar e cumprir as decisões da Assembleia Geral da Abstartups;</li>
            <li>Cumprir e aceitar as determinações e decisões da Diretoria da Abstartups, desde que estejam em conformidade com a lei, com o Estatuto Social e com as Assembleias realizadas;</li>
            <li>Comparecer às reuniões para as quais tenha sido convocado, às Assembleias e demais eventos patrocinados pela Abstartups;</li>
            <li>Cooperar para o desenvolvimento e prestígio da Abstartups e difundir seus objetivos e ações;</li>
            <li>Apresentar aos órgãos da administração da Abstartups qualquer irregularidade verificada;</li>
            <li>Não incorrer em infrações de caráter disciplinar, portando-se condizentemente com a sua condição de associada.</li>
          </ol>
        </li>
        <li>Salvo em caso de expressa autorização por escrito da Abstartups, a Startup reconhece que a associação não lhe concede:
          <ol type="a">
            <li>Qualquer direito de representação da Abstartups, de forma que a Startup não está autorizada a falar publicamente, divulgar escritos ou assumir qualquer tipo de obrigação em nome da Abstartups;</li>
            <li>Qualquer direito de uso pela Startup de qualquer marca, sinal distintivo, logo, material institucional ou qualquer propriedade intelectual de titularidade da Abstartups, salvo o uso do logotipo da Abstartups no site institucional da Startup, unicamente para fins de referência e de acordo com as orientações de marca da Abstartups.</li>
          </ol>
        </li>
        <li>Reconhece e concorda que com a associação a Startup não assume nenhum tipo de cargo na Abstartups com poderes de decisão, coordenação e/ou administração de quaisquer assuntos relacionados à Abstartups, salvo os casos previstos pelo Estatuto Social;</li>
        <li>Reconhece e concorda que a Abstartups não distribuirá entre seus associados ou doadores quaisquer bônus, lucros, dividendos, bonificações, participações ou parcelas do seu patrimônio, auferidos mediante o exercício de suas atividades;</li>
        <li>Reconhece e concorda que a qualidade de associado é intransmissível.</li>
      </ol>

      <p><strong>2. Planos de associação</strong></p>
      <p>A Abstartups fornece 3 (três) planos de associação, sendo eles o <i>Plano Start</i>, o <i>Plano Growth</i> e o <i>Plano Impact</i>, com produtos e benefícios variados, de acordo com o plano escolhido.</p>

      <p><strong>2.1. Plano Start</strong></p>
      <p>A Startup que opta pelo Plano Start (“Associado Start”) é inserido dentro das redes de conexão e conteúdo da Abstartups. Ao Associado Start são conferidos os seguintes benefícios:</p>
      <ol type="a">
        <li>Descontos em eventos realizados pela Abstartups e/ou por empresas ou prestadores de serviços parceiros (“Parceiros);</li>
        <li>Acesso a parte dos benefícios do Portal de Benefícios;</li>
        <li>Acesso à plataforma “Slack”;</li>
        <li>Recebimento de newsletter exclusiva da Abstartups;</li>
      </ol>
      <p>A associação ao Plano Start é gratuita, ficando o Associado Start isento do pagamento de anuidade à Abstartups. </p>
      <p><strong>2.2. Plano Growth</strong></p>
      <p>A Startup que opta pelo Plano Growth (“Associado Growth”) é inserido em um programa de crescimento para startups da Abstartups. Ao Associado Growth são conferidos os seguintes benefícios:</p>
      <ol type="a">
        <li>Acesso aos benefícios do Plano Start;</li>
        <li>Acesso integral às vantagens do Portal de Benefícios;</li>
        <li>Possibilidade de participação nos comitês da Abstartups;</li>
        <li>Pitch <i>Training</i>, conforme condições da cláusula 2.5;</li>
        <li>Participação de conversas com experientes investidores, Parceiros da Abstartups, conforme condições da cláusula 2.5;</li>
        <li>Fornecimento de 1 (um) ingresso para o evento CASE, realizado anualmente;</li>
        <li>Participação em mentorias,com profissionais Parceiros da Abstartups, conforme condições da cláusula 2.5.</li>
      </ol>
      <p>Em contrapartida à associação ao Plano Growth, o Associado Growth pagará à Abstartups o valor total de R$ 399,00 (trezentos e noventa e nove reais) à vista ou em 5 (cinco) parcelas de R$89,79 (oitenta e nove reais e setenta e nove centavos) ou em 10 (dez) parcelas de R$49,90 (quarenta e nove reais e noventa centavos) referente à anuidade da Abstartups, mediante emissão de boleto ou pagamento via cartão de crédito pelo site da Abstartups. Após o vencimento, não sendo constatado o pagamento, a Abstartups solicitará que a regularização seja efetivada até o último dia útil do mês vigente e aplicará multa de 10% do valor do boleto.A Abstartup não enviará ao Associado Impact a Nota Fiscal referente à operação de associação, todavia poderá o Associado Impact solicitar à Abstartups o envio da mesma, por meio de canal de comunicação [inserir].</p>
      <p>A Abstartups reserva-se o direito de atualizar, a qualquer tempo, os valores referentes à anuidade dos planos e compromete-se a enviar comunicação neste sentido em prazo razoável às Startups. Caso a Startup não concorde com o novo valor, terá o direito de se desassociar, nos termos estipulados pela cláusula 3 a seguir.</p>

      <p><strong>2.3. Plano Impact</strong></p>
      <p>Para se associar ao Plano Impact, a Startup deverá se inscrever em lista prévia de seleção e, caso tenha sua inscrição aprovada pela Abstartups, poderá se associar ao plano. As Startups selecionadas (“Associados Impact”) serão inseridas em uma rede de desenvolvimento com empreendedores de alto crescimento e ao Associado Impact são conferidos os seguintes benefícios:</p>    
      <ol type="a">
        <li>Acesso aos benefícios dos Planos Start e Growth;</li>
        <li>Ingresso VIP para o evento CASE, realizado anualmente, com acesso à áreas exclusiva do evento;</li>
        <li>Acesso ao jantar VIP, promovido no âmbito do evento CASE, que é realizado anualmente;</li>
        <li>Pitch <i>Training</i>, conforme condições da cláusula 2.5;</li>
        <li>Acesso a eventos exclusivos da Abstartups, como jantares e realização de <i>Happy Hour</i>;</li>
      </ol>
      <p>Em contrapartida à associação ao Plano Impact,o Associado Impact pagará à Abstartups o valor total de R$ 1.499,00,00 (mil quatrocentos e noventa e nove reais) à vista ou em 5 (cinco) parcelas de R$329,79 (trezentos e vinte e nove reais e setenta e nove centavos) ou em 10 (dez) parcelas de R$179,90 (cento e setenta e nove reais e noventa centavos) referente à anuidade da Abstartups, mediante emissão de boleto ou pagamento via cartão de crédito pelo site da Abstartups. Após o vencimento, não sendo constatado o pagamento, a Abstartups solicitará que a regularização seja efetivada até o último dia útil do mês vigente e aplicará multa de 10% do valor do boleto. A Abstartups não enviará ao Associado Impact a Nota Fiscal referente à operação de associação, todavia poderá o Associado Impact solicitar à Abstartups o envio da mesma, por meio do canal de comunicação [inserir].</p>
      <p>A Abstartups reserva-se o direito de atualizar, a qualquer tempo, os valores referentes à anuidade dos planos e compromete-se a enviar comunicação neste sentido em prazo razoável às Startups. Caso a Startup não concorde com o novo valor, terá o direito de se desassociar, nos termos estipulados pela cláusula 3 a seguir.</p>

      <p><strong>2.4. Migração entre planos</strong></p>
      <p>É permitida a migração entre planos durante o vigor da anuidade ou após o encerramento desta. Para tanto:</p>
      <ol type="a">
        <li>O Associado Start que optar pela migração para o Plano Growth deverá realizar requerimento para o e-mail contato@abstartups.com.br. Para migração de plano anterior ao encerramento do período de anuidade, deverá ser pago pelo Associado Start o valor referente à anuidade do Plano Growth.</li>
        <li>O Associado Growth que opte migrar para o Plano Impact deverá se inscrever em lista de seleção, conforme estipulado pela cláusula 2.3  e ter a sua inscrição aprovada pela Abstartups. Caso aprovado, bastará ao Associado Growth efetuar o pagamento da anuidade do Plano Impact para ter a migração concluída. Para migração de plano antes do encerramento do período de anuidade, deverá ser pago pelo Associado Growth, o valor total da anuidade do Plano Growth, mais a diferença entre a anuidade dos Planos Growth e Impact.</li>
        <li>O requerimento de migração de Plano mais sofisticado para outro menos sofisticado (“Downgrade”) poderá ser realizado, a qualquer tempo, por meio de envio de e-mail nesse sentido para contato@abstartups.com.br. Para migração de plano antes do encerramento do período de anuidade, caberá aplicação de multa de 10% do valor total da anuidade do Plano com taxa de anuidade de valor mais elevado.</li>
      </ol>

      <p><strong>2.5. Benefícios</strong></p>
      <p>A concessão dos benefícios previstos em cada plano estará condicionada à disponibilidade do respectivo serviço, podendo esta ser influenciada por questões técnicas ou de limitação de número de participantes. A impossibilidade de fruição temporária de qualquer benefício por parte da Startup associada não configura hipótese de restituição motivada do pagamento da anuidade.</p>
      <p>A Startup entende que os benefícios são oferecidos por Parceiros da Abstartups, que possuem termos, condições e políticas próprias para o oferecimento de seus serviços. A Abstartups, ao viabilizar o contato entre Startup e Parceiro, não será responsabilizada por garantir a disponibilidade e qualidade dos serviços do Parceiro, bem como não será responsabilizada por quaisquer incidentes ou insatisfação proveniente do serviço oferecido pelo Parceiro.</p>

      <p><strong>3. Renovação e Desassociação</strong></p>
      <p>Não havendo manifestação em sentido contrário por parte da Startup associada, a sua inscrição ao quadro de associados da Abstartups será renovada automaticamente ao fim de cada anuidade.</p>
      <p>A Startup poderá solicitar o cancelamento de sua inscrição do quadro de associados da Abstartups mediante aviso encaminhado com 30 (trinta) dias de antecedência ao e-mail contato@abstartups.com.br e pagamento de multa correspondente a 50% (cinquenta por cento) do valor da anuidade proporcional aos meses de taxa de anuidade remanescentes, contados a partir do envio da desassociação.</p>
      <p>A Abstartups se reserva o direito de excluir a Startup do quadro social nos casos em que a Startup:</p>
      <ol type="a">
        <li>Não realizar o pagamento da contribuição por três meses consecutivos, nos casos em que não exista acordo para regularização;</li>
        <li>Vier a ser liquidada, extinta, ou tiver decretada a sua falência ou insolvência;</li>
        <li>Por decisão de maioria simples da Diretoria da Abstartups, em razão de justa causa, com amplo direito direito de defesa, conforme estipulado no artigo X do Estatuto;</li>
        <li>Descumprir com as disposições presentes neste Termo e no Estatuto.</li>
      </ol>
      <p>Caso esteja plenamente de acordo com estes termos e condições, clique em <strong>ACEITAR</strong> para ter acesso à Ficha de Associação.</p>
      <p>Caso necessite de mais informações, favor entrar em contato com o time de Associados, pelo telefone (11) 5506-0153 ou pelo e-mail contato@abstartups.com.br</p>
    </div>
  )

  return (
    <div>
      <Col md="12">
        <Link onClick={toggle} > Clique qui para ler o termo.</Link>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Termos e políticas</ModalHeader>
          <ModalBody>
            { termsOfUse }
          </ModalBody>
        </Modal>
      </Col>
    </div>
  )
}
