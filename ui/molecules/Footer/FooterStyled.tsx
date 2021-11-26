import styled from "styled-components";

const FooterStyled = styled.footer`
  padding: 0 2%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;

  span {
    text-decoration: underline;
    margin-right: 2rem;
  }

  span,
  a {
    margin-left: 2.5rem;
  }

  @media (min-width: 768px) {
    padding: 0 10%;
    font-size: 2rem;
  }
`;

export default FooterStyled;
