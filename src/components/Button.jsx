import { render } from 'react-dom'
import styled, { css } from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${props =>
        props.$primary &&
        css`
          background: '#BF4F74';
          color: white;
        `};
`

const Container = styled.div`
  text-align: center;
`

render(
    <Container>
        <Button>Helli there!</Button>
        <Button $primary>Hello here!</Button>
    </Container>
)
