import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './UI/button/Button'
import InputForm from './UI/input/InputForm'

const Form = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('selfPickup')
  const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery')

  const handleRadioChangePayment = (event) => {
    setPaymentMethod(event.target.value)
  }

  const handleRadioChange = (event) => {
    setDeliveryMethod(event.target.value)
  }
  return (
    <PARENTCONTAINERSTYLED>
      <FORMSTYLED>
        <div>
          <Button variant='backToShopping'>Назад к покупкам</Button>
          <H1PERSONALDATASTYLED>
            <H3PERSONALDATASTYLED>1</H3PERSONALDATASTYLED>Личные данные
          </H1PERSONALDATASTYLED>
        </div>
        <DIVINPUTSTYLED>
          <InputForm type='text' placeholder='Имя' />
          <InputForm type='text' placeholder='Фамилия' />
        </DIVINPUTSTYLED>
        <DIVINPUTSTYLED>
          <InputForm type='text' placeholder='Телефон' />
          <InputForm type='email' placeholder='E-mail' />
        </DIVINPUTSTYLED>
        <DIVINPUTSTYLED>
          <InputForm type='text' placeholder='Адрес' />
        </DIVINPUTSTYLED>
        <div>
          <H1PERSONALDATASTYLED>
            <H3PERSONALDATASTYLED>2</H3PERSONALDATASTYLED>Доставка
          </H1PERSONALDATASTYLED>
        </div>
        <div>
          <INPUTRADIOSTYLED
            type='radio'
            id='selfPickup'
            name='deliveryMethod'
            value='selfPickup'
            checked={deliveryMethod === 'selfPickup'}
            onChange={handleRadioChange}
          />
          <LABLESTYLED
            htmlFor='selfPickup'
            checked={deliveryMethod === 'selfPickup'}
          >
            Самовывоз
          </LABLESTYLED>
          <TEXTSTYLED>
            Вы можете забрать из нашего официального магазина по адресу Бажана
            8-Б, Киев, 02132 Украина
          </TEXTSTYLED>
        </div>

        <div>
          <INPUTRADIOSTYLED
            type='radio'
            id='newPost'
            name='deliveryMethod'
            value='newPost'
            checked={deliveryMethod === 'newPost'}
            onChange={handleRadioChange}
          />
          <LABLESTYLED htmlFor='newPost' checked={deliveryMethod === 'newPost'}>
            Новая почта
          </LABLESTYLED>
          <TEXTSTYLED>
            Вы можете забрать из нашего официального магазина по адресу Бажана
            8-Б, Киев, 02132 Украина
          </TEXTSTYLED>
        </div>

        <div>
          <INPUTRADIOSTYLED
            type='radio'
            id='courierNewPost'
            name='deliveryMethod'
            value='courierNewPost'
            checked={deliveryMethod === 'courierNewPost'}
            onChange={handleRadioChange}
          />
          <LABLESTYLED
            htmlFor='courierNewPost'
            checked={deliveryMethod === 'courierNewPost'}
          >
            Курьер “Новая почта”
          </LABLESTYLED>
          <TEXTSTYLED>
            Вы можете забрать из нашего официального магазина по адресу Бажана
            8-Б, Киев, 02132 Украина
          </TEXTSTYLED>
        </div>
        <hr />
        <div>
          <H1PERSONALDATASTYLED>
            <H3PERSONALDATASTYLED>3</H3PERSONALDATASTYLED>Оплата
          </H1PERSONALDATASTYLED>
        </div>
        <DIVPAYMENTSTYLED>
          <INPUTRADIOSTYLED
            type='radio'
            id='cashOnDelivery'
            name='paymentMethod'
            value='cashOnDelivery'
            checked={paymentMethod === 'cashOnDelivery'}
            onChange={handleRadioChangePayment}
          />
          <LABLEPAYMENTSTYLED
            htmlFor='cashOnDelivery'
            checked={paymentMethod === 'cashOnDelivery'}
          >
            При получении
          </LABLEPAYMENTSTYLED>
        </DIVPAYMENTSTYLED>
        <DIVPAYMENTSTYLED>
          <INPUTRADIOSTYLED
            type='radio'
            id='onlinePayment'
            name='paymentMethod'
            value='onlinePayment'
            checked={paymentMethod === 'onlinePayment'}
            onChange={handleRadioChangePayment}
          />
          <LABLEPAYMENTSTYLED
            htmlFor='onlinePayment'
            checked={paymentMethod === 'onlinePayment'}
          >
            Онлайн-оплата картой
          </LABLEPAYMENTSTYLED>
        </DIVPAYMENTSTYLED>

        <DIVBUTTONSTYLED>
          <Button variant='addToCart'>Оформить заказ</Button>
        </DIVBUTTONSTYLED>
      </FORMSTYLED>
    </PARENTCONTAINERSTYLED>
  )
}

export default Form

const PARENTCONTAINERSTYLED = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 376px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const FORMSTYLED = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 68px;
`
const H1PERSONALDATASTYLED = styled.h1`
  font-family: Mont;
  font-size: 27px;
  font-weight: 300;
  line-height: 26.03px;
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 34px;
`
const H3PERSONALDATASTYLED = styled.h3`
  width: 36px;
  height: 36px;
  background: linear-gradient(96.78deg, #f64d4d -57.09%, #4d5ef6 101.17%);
  font-family: Mont;
  font-size: 30px;
  font-weight: 800;
  line-height: 28.92px;
  text-align: center;
  padding: 5px;
  color: rgba(255, 255, 255, 1);
  margin-right: 22px;
  border-radius: 10px;
`
const DIVINPUTSTYLED = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 30px;
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
`
const LABLESTYLED = styled.label`
  font-family: Mont;
  font-size: 20px;
  font-weight: 800;
  line-height: 19.28px;
  text-align: center;
  color: ${(props) =>
    props.checked ? 'rgba(90, 4, 200, 1)' : 'rgba(161, 161, 161, 1)'};
  margin-left: 17px;
  cursor: pointer;
`
const LABLEPAYMENTSTYLED = styled.label`
  font-family: Mont;
  font-size: 20px;
  font-weight: 800;
  line-height: 19.28px;
  text-align: center;
  color: ${(props) =>
    props.checked ? 'rgba(90, 4, 200, 1)' : 'rgba(161, 161, 161, 1)'};
  margin-left: 17px;
  cursor: pointer;
`
const TEXTSTYLED = styled.p`
  width: 398px;
  height: 38px;
  font-family: Mont;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.54px;
  text-align: left;
  color: rgba(3, 20, 18, 1);
  margin-top: 17px;
  margin-bottom: 33px;
  @media (max-width: 376px) {
    width: 289px;
    height: 57px;
  }
`
const DIVPAYMENTSTYLED = styled.div`
  margin-bottom: 20px;
`
const DIVBUTTONSTYLED = styled.div`
  margin-top: 30px;
  margin-bottom: 100px;
`
const INPUTRADIOSTYLED = styled.input`
  width: 17px;
  height: 17px;
  gap: 0px;
  border: 2px 0px 0px 0px;
  opacity: 0px;
`
