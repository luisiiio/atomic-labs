import styled from "styled-components";

const StepsBarStyled = styled.section<{ currentStep: number; steps: number }>`
  .container-icons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    font-weight: bold;

    .current,
    .completed {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.4rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.primary};
    }
    .current-b {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.4rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
    .pending {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.4rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid ${({ theme }) => theme.colors.shadow};
      color: ${({ theme }) => theme.colors.shadow};
    }
    .completed {
      transform: scaleX(-1) rotate(-35deg);
    }
  }
  .progress-bar {
    width: 100%;
    height: 1rem;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;

    div {
      height: 100%;
      width: ${(props) => (100 / props.steps) * props.currentStep}%;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default StepsBarStyled;
