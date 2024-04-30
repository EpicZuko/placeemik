/* eslint-disable no-param-reassign */
import React, { useState } from 'react'
import styled from 'styled-components'
import downext from '../../../assets/img/down-chevron (5) 3 (1).png'
import downprev from '../../../assets/img/down-chevron (5) 3.png'
import likeYes from '../../../assets/img/like-heart (1).png'
import likeNot from '../../../assets/img/likebeli.svg'
import wishlist from '../../../assets/img/wishlist.svg'
import Button from '../button/Button'

const CardWishList = ({ dataArray }) => {
  const initialLikesState = dataArray.reduce((acc, item) => {
    acc[item.id] = false
    return acc
  }, {})

  const [likes, setLikes] = useState(initialLikesState)
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 12

  const startIndex = (currentPage - 1) * perPage
  const endIndex = startIndex + perPage

  const currentData = dataArray?.slice(startIndex, endIndex)

  const totalPages = Math.ceil(dataArray.length / perPage)

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleLikeClick = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }))
  }

  return (
    <div>
      <DIVCARDWISHSTYLED>
        {currentData?.map((element) => {
          return (
            <CARDWISHLISTCONTAINERSTYLED key={element.id}>
              <IMGSTYLED src={wishlist} alt='' />
              <TEXTSTYLED>{element.title}</TEXTSTYLED>
              <PRICESTYLED>{element.price} c</PRICESTYLED>
              <IMGLIKESTYLED
                onClick={() => handleLikeClick(element.id)}
                src={likes[element.id] ? likeYes : likeNot}
                alt=''
              />
            </CARDWISHLISTCONTAINERSTYLED>
          )
        })}
      </DIVCARDWISHSTYLED>

      <DIVPREVNEXTSTYLED>
        <Button variant='plusOrminus' onClick={handlePrevClick}>
          <img src={downprev} alt='' />
        </Button>
        <SPANPAGESTYLED>
          Страница {currentPage} из {totalPages}
        </SPANPAGESTYLED>
        <Button variant='plusOrminus' onClick={handleNextClick}>
          <img src={downext} alt='' />
        </Button>
      </DIVPREVNEXTSTYLED>
    </div>
  )
}

export default CardWishList

const CARDWISHLISTCONTAINERSTYLED = styled.div`
  width: 327px;
  height: auto;
  gap: 0px;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.12);
  opacity: 0px;
`

const IMGSTYLED = styled.img`
  width: 327px;
  height: 359.99px;
  gap: 0px;
  opacity: 0px;
  margin-bottom: 19px;
`

const TEXTSTYLED = styled.p`
  font-family: Mont;
  font-size: 20px;
  font-weight: 600;
  line-height: 19.28px;
  color: rgba(3, 20, 18, 1);
  text-align: left;
  margin-bottom: 10px;
  padding-left: 10px;
`

const PRICESTYLED = styled.span`
  font-family: Mont;
  font-size: 30px;
  font-weight: 800;
  line-height: 28.92px;
  text-align: left;
  color: rgba(3, 20, 18, 1);
  margin-left: 10px;
`

const IMGLIKESTYLED = styled.img`
  margin-left: 160px;
`

const DIVCARDWISHSTYLED = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 60%;
  margin: 0px auto;
  gap: 40px;
`
const DIVPREVNEXTSTYLED = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 54px;
  margin-bottom: 54px;
`
const SPANPAGESTYLED = styled.span`
  background: linear-gradient(96.78deg, #f64d4d -57.09%, #4d5ef6 101.17%);
  font-family: Mont;
  font-size: 25px;
  font-weight: 800;
  line-height: 24.1px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
`
