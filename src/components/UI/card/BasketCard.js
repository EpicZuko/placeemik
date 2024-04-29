/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import styled from 'styled-components'
import likeYes from '../../../assets/img/like-heart (1).png'
import likeNot from '../../../assets/img/likebeli.svg'
import Button from '../button/Button'

const MyGallery = ({
  images,
  galleryTitle,
  availability,
  descriptionTitle,
  descriptionText,
  price,
  quantity,
}) => {
  const [likeState, setLikeState] = useState(false)

  const handlerLike = () => {
    setLikeState((prevState) => !prevState)
  }

  return (
    <DIVCONTAINERSTYLED>
      <DIVSTYLED>
        <div className='gallery-container'>
          <ImageGallery items={images} />
        </div>
      </DIVSTYLED>
      <DIVMEDIASTYLED>
        <H1STYLED>{galleryTitle}</H1STYLED>
        <SPANSTYLEDNAL>{availability}</SPANSTYLEDNAL>
        <H3OPICANIESTYLED>{descriptionTitle}</H3OPICANIESTYLED>
        <TEXTSTYLED>{descriptionText}</TEXTSTYLED>
        <DIVPRICESTYLED>
          <H2STYLED>Цена</H2STYLED>
          <PRICESTYLEDH3>{price}c</PRICESTYLEDH3>
        </DIVPRICESTYLED>
        <DIVBUTTONSTYLED>
          <DIVPLUSMINUSSTYLED>
            <Button variant='plusOrminus'>-</Button>
            <SPANCOUNTSTYLED>{quantity}</SPANCOUNTSTYLED>
            <Button variant='plusOrminus'>+</Button>
          </DIVPLUSMINUSSTYLED>
          <div>
            <Button variant='addToCart'>Купить</Button>
          </div>
          <IMGLIKESTYLED
            onClick={handlerLike}
            src={likeState === true ? likeNot : likeYes}
            alt=''
          />
        </DIVBUTTONSTYLED>
      </DIVMEDIASTYLED>
    </DIVCONTAINERSTYLED>
  )
}

export default MyGallery

const DIVCONTAINERSTYLED = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 0px auto;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 1);
    gap: 0px;
  }
  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 1);
    gap: 0px;
  }
`
const DIVSTYLED = styled.div`
  width: 565px;
  height: 622.01px;
  gap: 0px;
  opacity: 0px;
  @media (max-width: 1024px) {
    height: 400px;
  }
  @media (max-width: 414px) {
    width: 100%;
    height: 340px;
  }
`
const DIVMEDIASTYLED = styled.div`
  @media (max-width: 1024px) {
    margin-left: 100px;
  }
  @media (max-width: 414px) {
    margin-left: 300px;
  }
`
const DIVPLUSMINUSSTYLED = styled.div`
  display: flex;
`
const H1STYLED = styled.h1`
  width: 653px;
  height: 64px;
  gap: 0px;
  font-family: Roboto;
  font-size: 28px;
  font-weight: 400;
  line-height: 32.81px;
  text-align: left;
  @media (max-width: 414px) {
    font-family: Lighthaus;
    font-size: 20px;
    font-weight: 400;
    height: 44px;
    text-align: left;
  }
`
const SPANSTYLEDNAL = styled.span`
  font-family: Mont;
  font-size: 18px;
  font-weight: 600;
  line-height: 17.35px;
  text-align: left;
  @media (max-width: 414px) {
    font-family: Mont;
    font-size: 16px;
    font-weight: 800;
    line-height: 21.18px;
    text-align: left;
  }
`
const H3OPICANIESTYLED = styled.h3`
  font-family: Mont;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.18px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 7px;
  @media (max-width: 414px) {
    font-family: Mont;
    font-size: 16px;
    font-weight: 800;
    line-height: 21.18px;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`
const TEXTSTYLED = styled.p`
  width: 529px;
  height: 84px;
  gap: 0px;
  opacity: 0px;
  font-family: Mont;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.18px;
  text-align: left;
  color: rgba(3, 20, 18, 1);
  margin-bottom: 18px;
  @media (max-width: 414px) {
    font-family: Mont;
    font-size: 16px;
    font-weight: 300;
    line-height: 21.18px;
    text-align: left;
    width: 290px;
    height: 147px;
    gap: 0px;
    opacity: 0px;
  }
`
const DIVPRICESTYLED = styled.div`
  display: flex;
  gap: 230px;
  margin-bottom: 33px;
  @media (max-width: 414px) {
    gap: 100px;
  }
`

const H2STYLED = styled.h2`
  width: 94px;
  height: 34px;
  gap: 0px;
  opacity: 0px;
  font-family: Mont;
  font-size: 35px;
  font-weight: 600;
  line-height: 33.74px;
  text-align: left;
  @media (max-width: 414px) {
    font-family: Mont;
    font-size: 24px;
    font-weight: 600;
    line-height: 23.14px;
    text-align: left;
  }
`
const PRICESTYLEDH3 = styled.h3`
  width: 221px;
  height: 43px;
  gap: 0px;
  color: rgba(155, 0, 0, 1);
  opacity: 0px;
  font-family: Mont;
  font-size: 45px;
  font-weight: 800;
  line-height: 43.38px;
  text-align: left;
  @media (max-width: 414px) {
    font-family: Mont;
    font-size: 24px;
    font-weight: 800;
    line-height: 23.14px;
    text-align: left;
  }
`
const DIVBUTTONSTYLED = styled.div`
  display: flex;
  justify-content: space-between;
  width: 550px;
  @media (max-width: 414px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 150px;
    width: 250px;
  }
`
const SPANCOUNTSTYLED = styled.h3`
  width: 106px;
  height: 40px;
  gap: 0px;
  opacity: 0px;
  border: 1px solid rgba(230, 232, 231, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffff;
`
const IMGLIKESTYLED = styled.img`
  width: 30.01px;
  height: 26.37px;
  gap: 0px;
  opacity: 0px;
`
