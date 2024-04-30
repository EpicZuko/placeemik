import React, { forwardRef } from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  display: inline-block;
  max-width: 100%;
`

const StyledInput = styled.input`
  width: 327px;
  height: 50px;
  border: 2px 0px 0px 0px;
  opacity: 0px;
  border: 2px solid;
  border: 2px solid transparent;
  border-image-source: linear-gradient(
    96.78deg,
    #f64d4d -57.09%,
    #4d5ef6 101.17%
  );
  border-image-slice: 1;
  outline: none;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  text-align: left;
  color: rgba(0, 0, 0, 1);
  padding: 10px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`

const InputForm = forwardRef(function Input(props, ref) {
  return (
    <InputContainer>
      <StyledInput
        ref={ref}
        variant={props.variant}
        {...props}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
      />
    </InputContainer>
  )
})

export default InputForm
