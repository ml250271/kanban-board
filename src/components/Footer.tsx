import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #061a40;
  bottom: 0;
  color: #ffffff;
  height: 70px;
  left: 0;
  position: absolute;
  text-align: center;
  width: 100%;
`
const Footer = () => {
  return (
    <Wrapper>
      <p>&copy; Powered by MQ {new Date().getFullYear()}</p>
    </Wrapper>
  )
}
export default Footer
