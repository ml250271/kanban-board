import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #041330;
  bottom: 0;
  color: #ffffff;
  height: 80px;
  left: 0;
  padding-top: 20px;
  text-align: center;
  top: 0;
  width: 100%;
`
const Header = () => {
  return (
    <Wrapper>
      <p>
        Kanban Board
      </p>
    </Wrapper>
  )
}
export default Header
