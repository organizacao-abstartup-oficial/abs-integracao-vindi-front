import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import api from '../../../../../../Data/endPoints'
import { Button } from 'reactstrap';
import { toast } from 'react-toastify';



const currentYear = new Date().getFullYear();
const monthsArr = Array.from({ length: 12 }, (x, i) => {
  const month = i + 1;
  return month <= 9 ? '0' + month : month;
});
const yearsArr = Array.from({ length: 9 }, (_x, i) => currentYear + i);

export default function CForm({
  cardMonth,
  cardYear,
  onUpdateState,
  cardNumberRef,
  cardHolderRef,
  cardDateRef,
  onCardInputFocus,
  onCardInputBlur,
  cardCvv,
  children
}) {
  const [cardNumber, setCardNumber] = useState('');
  const [planIdState, setplanIdState] = useState(parseInt(localStorage.getItem('plan_id')))

  const hasCoupon = useState(JSON.parse(localStorage.getItem('coupon_data')))[0];

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    onUpdateState(name, value);
  };

  const pathName = window.location.pathname;

  const PlanObjectGrowth = [
    { id: 151756, value: 1, pricing: 399, label: 399 },
    { id: 150698, value: 12, pricing: 499, label: 499 / 12 }];

  const PlanObjectImpact = [
    { id: 152208, value: 1, pricing: 1499, label: 1499 },
    { id: 152186, value: 12, pricing: 1799, label: 1799 / 12 }];

  const PlanObjectGrowthWithCoupon30 = [
    { id: 270635, value: 1, pricing: 279, label: 279 }];

  const PlanObjectGrowthWithCoupon50 = [
    { id: 270637, value: 1, pricing: 199, label: 199 }];

  const PlanObjectGrowthWithCoupon60 = [
    { id: 270638, value: 1, pricing: 159, label: 159 }];

  const PlanObjectGrowthWithCoupon80 = [
    { id: 270639, value: 1, pricing: 79, label: 79 }];

  const formatPlanText = (plan) => {
    if (plan.value === 1) {
      return `${plan.value} parcela de ` + Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(plan.label)
    } else {
      return `${plan.value} parcelas de ` + Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(plan.label)
    }
  }

  const identifyPlanCoupon = () => {
    switch (hasCoupon.discount) {
      case 30:
        return PlanObjectGrowthWithCoupon30;
      case 50:
        return PlanObjectGrowthWithCoupon50;
      case 60:
        return PlanObjectGrowthWithCoupon60;
      case 80:
        return PlanObjectGrowthWithCoupon80;
      default:
        return PlanObjectGrowth;
    }
  }

  const planGrowth = (<>{

    hasCoupon ?
      identifyPlanCoupon().map(
        plan => (
          <option key={plan.id} value={plan.id}>
            {`Á vista ` + Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(plan.label)}
          </option>
        )
      )
      :
      PlanObjectGrowth.map(
        plan => (
          <option key={plan.id} value={plan.id}>
            {formatPlanText(plan)}
          </option>
        )
      )

  }</>)

  const planImpact = (<>{PlanObjectImpact.map(plan => (
    <option key={plan.id} value={plan.id}>
      {formatPlanText(plan)}
    </option>
  ))}</>)

  const onCardNumberChange = (event) => {
    let { value, name } = event.target;
    let cardNumber = value;
    value = value.replace(/\D/g, '');
    if (/^3[47]\d{0,13}$/.test(value)) {
      cardNumber = value
        .replace(/(\d{4})/, '$1 ')
        .replace(/(\d{4}) (\d{6})/, '$1 $2 ');
    } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
      // diner's club, 14 digits
      cardNumber = value
        .replace(/(\d{4})/, '$1 ')
        .replace(/(\d{4}) (\d{6})/, '$1 $2 ');
    } else if (/^\d{0,16}$/.test(value)) {
      // regular cc number, 16 digits
      cardNumber = value
        .replace(/(\d{4})/, '$1 ')
        .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
        .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
    }

    setCardNumber(cardNumber.trimRight());
    onUpdateState(name, cardNumber);

    const carnumberStorage = cardNumber
    sessionStorage.setItem('cardNumber', carnumberStorage);
  };

  const onCvvFocus = (event) => {
    onUpdateState('isCardFlipped', true);
  };

  const onCvvBlur = (event) => {
    onUpdateState('isCardFlipped', false);
  };


  async function postPayment() {
    const consumer = localStorage.getItem('consumer_id');
    const cardHolderStorage = localStorage.getItem('cardHolder');
    const cardValidateStorage = localStorage.getItem('cardValidate');
    const companyCodeStorage = localStorage.getItem('companyCode');
    localStorage.setItem('paymentSubmited', null)

    const paymentProfile = {
      holder_name: cardHolderStorage,
      card_expiration: cardValidateStorage,
      card_number: cardNumber,
      card_cvv: cardCvv,
      payment_method_code: 'credit_card',
      payment_company_code: companyCodeStorage,
      customer_id: parseInt(consumer)
    }
    try {
      await api.post('vindi/payment/payment-profile', paymentProfile).then(response => {

        if (response.status === 200) {
          try {
            const sub = {
              plan_id: planIdState,
              customer_id: consumer,
              code: uuid(),
              payment_method_code: 'credit_card',
              metadata: uuid(),
              payment_profile: {
                id: response.data.body.payment_profile.id
              },
              invoice_split: false
            }
            api.post('vindi/payment/card', sub)
              .then(res => {
                toast.success('Pagamento realizado com sucesso!')
                localStorage.removeItem('cardHolder')
                localStorage.removeItem('cardValidate')
                localStorage.removeItem('cardCvv')
                localStorage.removeItem('companyCode')
                localStorage.removeItem('coupon_data')
                localStorage.setItem('paymentSubmited', true)
                localStorage.setItem('isLastStep', true);
                localStorage.clear()
              }
              )
          } catch (err) {
            toast.error('Houve um problema ao efeturar o pagamento. Verifique seus dados e tente novamente.')
          }
        } else {
          toast.error('Houve um problema ao efeturar o pagamento. Verifique seus dados e tente novamente.')
        }
      })
    } catch (err) {
      toast.error('Houve um problema ao efeturar o pagamento. Verifique seus dados e tente novamente.')
    }
  }

  return (
    <div className="card-form">
      <div className="card-list">{children}</div>
      <div className="card-form__inner">
        <div className="card-input">
          <label htmlFor="cardNumber" className="card-input__label">
            Número do Cartão
          </label>
          <input
            type="tel"
            name="cardNumber"
            className="card-input__input"
            autoComplete="off"
            onChange={onCardNumberChange}
            maxLength="19"
            ref={cardNumberRef}
            onFocus={e => onCardInputFocus(e, 'cardNumber')}
            onBlur={onCardInputBlur}
            value={cardNumber}
          />
        </div>

        <div className="card-input">
          <label htmlFor="cardName" className="card-input__label">
            Nome impresso no Cartão
          </label>
          <input
            type="text"
            className="card-input__input"
            autoComplete="off"
            name="cardHolder"
            onChange={handleFormChange}
            ref={cardHolderRef}
            onFocus={e => (e.target.value)}
            onBlur={onCardInputBlur}
          />
        </div>

        <div className="card-form__row">
          <div className="card-form__col">
            <div className="card-form__group">
              <label
                htmlFor="cardMonth"
                className="card-input__label"
              >
                Vencimento
              </label>
              <select
                className="card-input__input -select"
                value={cardMonth}
                name="cardMonth"
                onChange={handleFormChange}
                ref={cardDateRef}
                onFocus={(e) => onCardInputFocus(e, 'cardDate')}
                onBlur={onCardInputBlur}
              >
                <option value="" disabled>
                  Mês
                </option>

                {monthsArr.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
              <select
                name="cardYear"
                className="card-input__input -select"
                value={cardYear}
                onChange={handleFormChange}
                onFocus={(e) => onCardInputFocus(e, 'cardDate')}
                onBlur={onCardInputBlur}
              >
                <option value="" disabled>
                  Ano
                </option>

                {yearsArr.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="card-form__col -cvv">
            <div className="card-input">
              <label
                htmlFor="cardCvv"
                className="card-input__label"
              >
                CVV
              </label>
              <input
                type="tel"
                className="card-input__input"
                maxLength="4"
                autoComplete="off"
                name="cardCvv"
                onChange={handleFormChange}
                onFocus={onCvvFocus}
                onBlur={onCvvBlur}
                ref={cardCvv}
              />
            </div>
          </div>
        </div>

        <select
          name="installments"
          className="card-input__input -select"
          onChange={e => setplanIdState(e.target.value)}
        >
          <option value="" disabled>
            Selecione as parcelas
          </option>
          {pathName === '/growth' && hasCoupon ? planGrowth : ''}
          {pathName === '/renovacao' ? planGrowth : ''}
          {pathName === '/impact' ? planImpact : ''}
        </select>


        <hr />

        <Button color="primary" style={{ marginBottom: '1rem', marginTop: '1rem', width: '100%' }} onClick={postPayment}>
          Finalizar pagamento
        </Button>
      </div>
    </div>
  );
}
