import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Button = styled.button`
    border: 3px solid black;
    background-color: white;
    color: black;
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 1px;
    margin: 9px 0px;
    cursor: pointer;
`
export const Select = styled.select`
    border: 3px solid black;
    background-color: white;
    color: black;
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 1px;
    margin: 9px 0px;
    cursor: pointer;
    margin-right: 19px;
    -webkit-border-radius: 0px;

    -webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	 -o-appearance: none;
        appearance: none;
        
        &:after {
            font-family: FontAwesome;
            content: '\f107';
            font-size: 28px;
            position: absolute;
            top: 12px;
            right: 20px;
            color: #434B67;
            pointer-events: none;
        }
`