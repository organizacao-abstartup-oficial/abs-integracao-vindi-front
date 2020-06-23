import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import axios from 'axios';
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
    const [ cardNumber, setCardNumber ] = useState('');

    const handleFormChange = (event) => {
        const { name, value } = event.target;

        onUpdateState(name, value);
    };
    const plainValue = 499
    const plainValueOneStallment = 399

    const installments = [  
        { id: 151756, value: 1, pricing: 399, label: plainValueOneStallment  },
        { id: 150698, value: 12, pricing: 499, label: plainValue /12 }]


    const [planIdState, setplanIdState] = useState(151756)

    // TODO: We can improve the regex check with a better approach like in the card component.
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

        sessionStorage.setItem('Chave', 'value')

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


    async function postPayment(){
        const consumer = localStorage.getItem('consumer_id');
        const cardNumberStorage = localStorage.getItem('cardNumber');
        const cardHolderStorage = localStorage.getItem('cardHolder');
        const cardValidateStorage = localStorage.getItem('cardValidate');
        const companyCodeStorage = localStorage.getItem('companyCode');

        const paymentProfile = {
            holder_name: cardHolderStorage,
            card_expiration: cardValidateStorage,
            card_number: cardNumberStorage,
            card_cvv: cardCvv,
            installments: 12,
            payment_method_code: 'credit_card',
            payment_company_code: companyCodeStorage,
            customer_id: parseInt(consumer)
        }
        try {
            await axios.post('https://apiv1-abstartups.herokuapp.com/creditcard', paymentProfile).then(response => {
                if(response.status === 200) {
                    try {
                        const sub = {
                            plan_id: planIdState,
                            customer_id: consumer,
                            code: uuid(),
                            payment_method_code: 'credit_card',
                            installments: 12,
                            metadata: uuid(),
                            payment_profile: {
                                id: response.data.payment_profile.id
                            },
                            invoice_split: false
                        }
                        axios.post('https://apiv1-abstartups.herokuapp.com/subscription/card', sub)
                        .then(res => {
                            toast.success('Pagamento realizado com sucesso!')
                            localStorage.removeItem('cardNumber')
                            localStorage.removeItem('cardHolder')
                            localStorage.removeItem('cardValidate')
                            localStorage.removeItem('cardCvv')
                            localStorage.removeItem('companyCode')
                            localStorage.setItem('paymentSubmited', true)
                            localStorage.setItem('isLastStep', true);
                            }
                        )
                    } catch(err) {
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
                        onFocus={ e => onCardInputFocus(e, 'cardNumber')}
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
                        onFocus={ e => (e.target.value)}
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
                        onChange={e => setplanIdState(e.target.value) || console.log(planIdState)}
                    >
                        <option value="" disabled>
                            Selecione as parcelas
                        </option>

                        {installments.map(installments => (
                            <option key={installments.id} value={installments.id}>
                                {installments.id === 2 ? `${installments.value} parcela de ` + Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(installments.label) : `${installments.value} parcelas de ` + Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(installments.label) }
                            </option>
                        ))}
                    </select>
                <Button color="primary" style={{ marginBottom: '1rem', marginTop:  '1rem', width: '100%' }} onClick={postPayment}>
                  Finalizar pagamento
                </Button>
            </div>
        </div>
    );
}
