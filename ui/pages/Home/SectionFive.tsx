import styled from "styled-components";

const SectionFive = styled.section`
  height: auto;
  padding: 5rem 0;
  position: relative;
  background-image: url("/bgblue.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  article {
    display: grid;
    grid-template-columns: 50% 25% 25%;
    grid-template-rows: auto;
    width: 80%;
    max-width: 90rem;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.secondary};
    padding: 2rem;
    border-radius: 1rem;

    .header {
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .atomic-column {
      font-size: 1.2rem;
    }

    p {
      padding: 0.5rem 0;
    }

    .bg {
      background-color: #e9f1f6;
    }

    .bt {
      border-top: 1px solid #e1e1e1;
    }
    .br {
      border-right: 1px solid #e1e1e1;
    }
    .bb {
      border-bottom: 1px solid #e1e1e1;
    }
    .bl {
      border-left: 1px solid #e1e1e1;
    }
    .center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text-align {
      display: flex;
      align-items: center;
    }
  }

  button {
    margin: 3rem 0;
  }

  @media (${({ theme }) => theme.device.sm}) {
  }
  @media (${({ theme }) => theme.device.md}) {
    article {
      font-size: 1.4rem;

      .atomic-column {
        font-size: 2rem;
      }
    }
  }
  @media (${({ theme }) => theme.device.lg}) {
    article {
      .atomic-column {
        font-size: 2.5rem;
      }
    }
  }
  @media (${({ theme }) => theme.device.xl}) {
  }
`;

export default SectionFive;
