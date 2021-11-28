import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 0 2%;
  position: absolute;
  z-index: 1;

  article {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding: 0 10%;
  }
`;

export default HeaderStyled;
