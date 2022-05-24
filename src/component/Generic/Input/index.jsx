
import React from 'react'
import { Container,Wrapper,Icon } from './style';

export const Input = ({
  children,
  onClick,
  height,
  width,type,
  mr,
  ml,
  mb,
  mt,
  pl,
  onChange,
  placeholder,
  name
}) => {
  return (
    <Wrapper mr={mr} ml={ml} mb={mb} mt={mt}>
    <Icon>{children}</Icon>
    <Container
    onChange={onChange}
    placeholder={placeholder}
    pl={pl}
    type={type}
      width={width}
      height={height}
      onClick={onClick}
      name={name}
    
    />
    </Wrapper>
  )
}

export default Input;