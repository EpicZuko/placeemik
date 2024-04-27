/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import SelectMui from '@mui/material/Select'
import styled from 'styled-components'

function Select({
  value,
  variant,
  onChange,
  options,
  getOptionLabel,
  getOptionValue,
}) {
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <BoxStyled variant={variant}>
      <Form fullWidth>
        <SelectMui onChange={handleChange} value={value}>
          {options?.map((item) => {
            return (
              <MenuItem value={getOptionValue(item)} key={item.id}>
                {getOptionLabel(item)}
              </MenuItem>
            )
          })}
        </SelectMui>
      </Form>
    </BoxStyled>
  )
}
export default Select

const Form = styled(FormControl)`
  & > div {
    width: fit-content;
    height: 0px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 300;
    line-height: 14.06px;
    text-align: left;
  }
`

const BoxStyled = styled(Box)`
  border-radius: 2px;
  & fieldset {
    border: none !important;
  }
  @media (max-width: 375px) {
    width: 100px;
    padding: 0px;
    margin-left: -10px;
    height: 40px;
    border-radius: 2px;
  }
`
