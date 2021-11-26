import styled from "styled-components";

const CardsStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .left,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 15rem;
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.white};
  }

  .left,
  .center,
  .right {
    div {
      min-width: 60%;

      h2 {
        text-align: center;
        font-size: 1.8rem;
        font-weight: bold;
        font-family: ${({ theme }) => theme.fonts.primary};
      }
      ul {
        list-style: disc;
        padding-left: 1.5rem;
        li {
          font-size: 1.1rem;
          span {
            font-weight: bold;
          }
        }
      }
    }
  }

  .left {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .right {
    border-radius: 0 0 0.5rem 0.5rem;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    width: 25rem;
    height: 20rem;
    box-shadow: 0px 0px 10px 0px #000000;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (${({ theme }) => theme.device.sm}) {
  }
  @media (${({ theme }) => theme.device.md}) {
    flex-direction: row;

    .left,
    .right {
      flex-direction: column;
      width: 25rem;
      height: 30rem;
    }

    .left,
    .center,
    .right {
      padding: 1rem;

      div {
        h2 {
          font-size: 2.4rem;
        }
        ul {
          padding-left: 2.5rem;
          li {
            font-size: 1.4rem;
          }
        }
      }
    }

    .center {
      flex-direction: column;
      width: 25rem;
      height: 40rem;
    }

    .left {
      border-radius: 0.5rem 0 0 0.5rem;
    }

    .right {
      border-radius: 0 0.5rem 0.5rem 0;
    }
  }
  @media (${({ theme }) => theme.device.lg}) {
    .left,
    .right {
      width: 27rem;
      height: 32rem;
    }

    .left,
    .center,
    .right {
      div {
        ul li {
          font-size: 1.6rem;
        }
      }
    }

    .center {
      width: 30rem;
      height: 42rem;
    }
  }
  @media (${({ theme }) => theme.device.xl}) {
  }
`;

export default CardsStyled;
