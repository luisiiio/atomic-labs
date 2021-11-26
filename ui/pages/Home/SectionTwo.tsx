import styled from "styled-components";

const SectionTwo = styled.section`
  height: 100vh;
  position: relative;
  background-image: url("/bgblue.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  h1 {
    padding-top: 2rem;
    font-size: 2.5rem;
    font-weight: bold;
    line-height: normal;
    text-align: center;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.white};
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  @media (${({ theme }) => theme.device.sm}) {
    h1 {
      font-size: 3.5rem;
    }
  }
  @media (${({ theme }) => theme.device.md}) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (${({ theme }) => theme.device.lg}) {
    h1 {
      padding-top: 3rem;
      font-size: 5rem;
    }
  }
  @media (${({ theme }) => theme.device.xl}) {
    h1 {
      font-size: 7rem;
    }
  }
`;

export default SectionTwo;
