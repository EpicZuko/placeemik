import React from 'react'
import styled from 'styled-components'
import basketDeleteIcon from '../../../assets/img/basketdelete.svg'
import union from '../../../assets/img/union.svg'
import Button from '../button/Button'

const BasketProduct = ({ array }) => {
  return (
    <div>
      <H1STYLEDBASKET>Корзина</H1STYLEDBASKET>
      <CONTAINERSTYLEDDIV>
        {array.map((element) => {
          return (
            <DIVCONTAINERSTYLED key={element.price}>
              <div>
                <DIVCOLISTYLED>
                  <SPANPRODUCTSTYLED>Товар</SPANPRODUCTSTYLED>
                  <div>
                    <SPANCOLISTYLED>Количество</SPANCOLISTYLED>
                    <SPANCOLUSTYLEDPRICE>Цена</SPANCOLUSTYLEDPRICE>
                  </div>
                </DIVCOLISTYLED>

                <DIVSTYLED>
                  <IMGSTYLED src={element.img} alt='' />
                  <H1STYLED>{element.product}</H1STYLED>
                  <SPANSTYLED>{element.quantity}</SPANSTYLED>
                  <div>
                    {element.price && <H4STYLED>{element.price} c</H4STYLED>}
                    <H3STYLED price={element?.price}>
                      {element.totalPrice} c
                    </H3STYLED>
                  </div>
                  <div>
                    <IMGSTYLEDELETE src={basketDeleteIcon} alt='' />
                  </div>
                </DIVSTYLED>
              </div>
            </DIVCONTAINERSTYLED>
          )
        })}
        <DIVBASKPRICEITOGSTYLED>
          <H3TOTALSTYLED>Итого</H3TOTALSTYLED>
          <H1PRCESTYLED>100000 c</H1PRCESTYLED>
          <TEXTSTYLED>
            <img src={union} alt='' />У вас бесплатная доставка!
          </TEXTSTYLED>
          <Button variant='checkout'>Оформить заказ</Button>
          <DIVBUTTONNEXTSTYLED>
            <Button variant='backToShopping'>Назад к покупкам</Button>
          </DIVBUTTONNEXTSTYLED>
        </DIVBASKPRICEITOGSTYLED>
      </CONTAINERSTYLEDDIV>
    </div>
  )
}

export default BasketProduct

const H1STYLEDBASKET = styled.h1`
  font-family: Lighthaus;
  font-size: 50px;
  font-weight: 400;
  line-height: 52.95px;
  text-align: center;
  margin-right: 650px;
  margin-bottom: 80px;
  @media (max-width: 414px) {
    font-family: Lighthaus;
    font-size: 30px;
    font-weight: 400;
    line-height: 52.95px;
    text-align: center;
    margin-right: 650px;
    margin-bottom: 10px;
  }
`
const CONTAINERSTYLEDDIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`
const DIVCONTAINERSTYLED = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const DIVCOLISTYLED = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 690px;
  padding-bottom: 14px;
  @media (max-width: 414px) {
    width: 300px;
    height: 99.08px;
    gap: 0px;
    opacity: 0px;
    margin-left: 0px;
  }
`
const SPANPRODUCTSTYLED = styled.span`
  font-family: Mont;
  font-size: 16px;
  font-weight: 600;
  line-height: 21.18px;
  text-align: left;
  color: rgba(161, 161, 161, 1);
`
const SPANCOLISTYLED = styled.span`
  font-family: Mont;
  font-size: 16px;
  font-weight: 600;
  line-height: 21.18px;
  text-align: left;
  color: rgba(161, 161, 161, 1);
  margin-right: 70px;
`
const SPANCOLUSTYLEDPRICE = styled.span`
  font-family: Mont;
  font-size: 16px;
  font-weight: 600;
  line-height: 21.18px;
  text-align: left;
  color: rgba(161, 161, 161, 1);
`
const DIVSTYLED = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 813px;
  height: 99.08px;
  opacity: 0px;
  border-top: 1px solid rgba(230, 232, 231, 1);
  border-bottom: 1px solid rgba(230, 232, 231, 1);
  @media (max-width: 414px) {
    width: 414px;
    height: 99.08px;
    gap: 0px;
    opacity: 0px;
    margin-left: 0px;
  }
`
const IMGSTYLED = styled.img`
  width: 90px;
  height: 99.08px;
  gap: 0px;
  opacity: 0px;
  padding: 14px;
`
const H1STYLED = styled.h1`
  width: 268px;
  height: 48px;
  gap: 0px;
  opacity: 0px;
  font-family: Mont;
  font-size: 18px;
  font-weight: 800;
  line-height: 23.83px;
  text-align: left;
  @media (max-width: 414px) {
    width: 100px;
    height: 72px;
    gap: 0px;
    opacity: 0px;
    font-family: Mont;
    font-size: 10px;
    font-weight: 800;
    line-height: 23.83px;
    text-align: left;
  }
`
const SPANSTYLED = styled.span`
  font-family: Mont;
  font-size: 20px;
  font-weight: 600;
  line-height: 26.48px;
  text-align: left;
  width: 47px;
  height: 26px;
  gap: 0px;
  opacity: 0px;
  @media (max-width: 414px) {
    font-family: Mont;
    font-size: 10px;
    font-weight: 600;
    line-height: 26.48px;
    text-align: left;
  }
`
const H3STYLED = styled.h3`
  font-family: Mont;
  font-size: 20px;
  font-weight: 800;
  line-height: 26.48px;
  text-align: left;
  color: ${(props) =>
    props.price === undefined ? 'rgba(3, 20, 18, 1);' : 'rgba(255, 67, 67, 1)'};

  @media (max-width: 414px) {
    font-family: Mont;
    font-size: 10px;
    font-weight: 800;
    line-height: 26.48px;
    text-align: left;
  }
`
const H4STYLED = styled.h4`
  font-family: Mont;
  font-size: 14px;
  font-weight: 600;
  line-height: 13.5px;
  text-align: left;
  margin-bottom: 4px;
  position: relative;
  border: 1px solid transparent;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(161, 161, 161, 1);
    border-left: none;
    border-bottom: none;
    border-right: none;
    transform-origin: top left;
    transform: rotate(10.17deg);
  }
  @media (max-width: 414px) {
    font-family: Mont;
    font-size: 10px;
    font-weight: 600;
    line-height: 13.5px;
    text-align: left;
  }
`
const IMGSTYLEDELETE = styled.img`
  padding-bottom: 50px;
  cursor: pointer;
`
const DIVBASKPRICEITOGSTYLED = styled.div`
  width: 446px;
  height: 332px;
  gap: 0px;
  opacity: 0px;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 414px) {
    width: 300px;
  }
`
const H3TOTALSTYLED = styled.h3`
  font-family: Mont;
  font-size: 35px;
  font-weight: 400;
  line-height: 33.74px;
  text-align: left;
  color: rgba(161, 161, 161, 1);
  margin-right: 38px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 414px) {
    font-family: Mont;
    font-size: 20px;
    font-weight: 400;
    line-height: 33.74px;
    text-align: left;
    color: rgba(161, 161, 161, 1);
    margin-bottom: 0px;
  }
`
const H1PRCESTYLED = styled.h1`
  font-family: Mont;
  font-size: 40px;
  font-weight: 800;
  line-height: 38.56px;
  text-align: left;
  margin-bottom: 20px;
  @media (max-width: 414px) {
    font-family: Mont;
    font-size: 25px;
    font-weight: 800;
    line-height: 38.56px;
    text-align: left;
    margin-bottom: 10px;
  }
`
const TEXTSTYLED = styled.p`
  font-family: Mont;
  font-size: 16px;
  font-weight: 600;
  line-height: 18.62px;
  text-align: left;
  width: 294px;
  height: 38px;
  opacity: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`
const DIVBUTTONNEXTSTYLED = styled.div`
  margin-top: 40px;
  margin-right: 200px;
  @media (max-width: 414px) {
    margin-right: 10px;
  }
`
