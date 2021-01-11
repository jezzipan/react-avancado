import React from 'react'
import { LogoProps } from 'types/api'
import * as S from './styles'

const Logo = ({ alternativeText, url }: LogoProps) => (
  <S.LogoWrapper src={url} alt={string} />
)
export default Logo
