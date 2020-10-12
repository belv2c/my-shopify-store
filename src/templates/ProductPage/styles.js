import styled from '@emotion/styled'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const ProductTitle = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 15px;
  word-wrap: break-word;
  font-family: 'Helvetica', 'Helvetica', sans-serif;
  font-weight: 400;
  margin: 153px 0 0.5rem;
  line-height: 1.4;
  width: 468px;

  @media (max-width: ${breakpoints.l}px) {
    font-size: 1rem;
    margin-bottom: 15px;
    word-wrap: break-word;
    font-family: 'Helvetica', 'Helvetica', sans-serif;
    font-weight: 400;
    margin: 32px 0px 0.5rem;
    line-height: 1.4;
    width: 219px;
    }
`

export const ProductDescription = styled.div`
  margin-top: 40px;
  font-family: 'Helvetica', 'Helvetica', sans-serif;
  font-weight: 300;
`
