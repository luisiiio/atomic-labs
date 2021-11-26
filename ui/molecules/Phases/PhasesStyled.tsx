import styled from "styled-components";

const PhasesStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};

  p {
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    span {
      display: flex;
      align-items: center;
      margin: 2rem 0;
      transform: rotate(45deg);
    }
  }

  @media (${({ theme }) => theme.device.sm}) {
  }
  @media (${({ theme }) => theme.device.md}) {
    flex-direction: row;

    p {
      flex-direction: row;

      span {
        margin: 0 1rem;
        transform: rotate(0deg);
      }
    }
  }
  @media (${({ theme }) => theme.device.lg}) {
    p {
      font-size: 2rem;

      span {
        margin: 0 2rem;
      }
    }
  }
  @media (${({ theme }) => theme.device.xl}) {
  }
`;

export default PhasesStyled;
