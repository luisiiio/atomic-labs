import styled from "styled-components";

const FooterStyled = styled.footer`
  padding: 1.5rem 2%;
  min-height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: black;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    text-decoration: underline;
    margin: 2rem;
  }

  div {
    display: flex;
    align-items: center;
    article {
      margin-right: 2rem;
      width: 2rem;
    }
  }

  @media (${({ theme }) => theme.device.sm}) {
  }
  @media (${({ theme }) => theme.device.md}) {
    padding: 1.5rem 5%;
    font-size: 2rem;
  }
  @media (${({ theme }) => theme.device.lg}) {
    padding: 1.5rem 5%;
    flex-direction: row;
    justify-content: space-between;

    section {
      flex-direction: row;
    }
  }
  @media (${({ theme }) => theme.device.xl}) {
  }
`;

export default FooterStyled;
