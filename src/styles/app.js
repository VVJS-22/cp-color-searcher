import styled from 'styled-components'

export const Wrapper = styled.section`
  header {
    margin: 0.5rem;
    font-size: 2rem;
    font-weight: bold;
  }
  input {
    height: 50px;
    width: 500px;
    max-width: 80%;
    margin: 2rem 0.5rem;
    border: 5px ridge rgb(10, 107, 34);
    font-size: 1.5rem;
    padding-left: 0.5rem;
    box-sizing: border-box;
  }
  main {
    display: flex;
    flex-flow: row wrap;
  }
`
export const Color = styled.div`
  margin: 0.5rem;
  background: ${({bg}) => bg};
  width: 100px;
  height: 100px;
`