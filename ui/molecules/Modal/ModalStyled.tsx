import styled from "styled-components";

const ModalStyled = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/bgblue.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-size: 1.6rem;

  article {
    width: 7rem;
  }
  p {
    margin-top: 1rem;
    max-width: 30rem;
    text-align: center;
  }
`;

export default ModalStyled;
