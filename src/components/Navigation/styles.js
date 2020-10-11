import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;
  top: 0;
  background: rgba(0,0,0,.96);
  transition: all .4s ease;
  z-index: 7;
  transform: translateZ(0);
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1.45rem;
  margin: -6px auto;
  max-width: 1500px;
`

export const MenuLink = styled(Link) `
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1rem;
    margin-right: 30px;
  }
`

export const CartCounter = styled.span`
  background-color: white;
  color: #663399;
  border-radius: 20px;
  padding: 0px 10px;
  font-size: 1.2rem;
  margin: -71px;
  margin-left: -27px;
  z-index: 20;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1rem;
    margin-left: 10px;
  }

`
