import styled from "styled-components";

const SectionOne = styled.section`
  height: 100vh;
  position: relative;
  background-image: url("/bgspace.png");
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .top {
    padding-top: 80px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .message {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-size: 3rem;
      font-weight: bold;
      line-height: normal;
      text-align: center;
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.white};
      span {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;

    .next-page {
      font-size: 1.6rem;
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (${({ theme }) => theme.device.sm}) {
    .top {
      h1 {
        font-size: 3.5rem;
      }
    }
    .bottom {
      .next-page {
        font-size: 2rem;
      }
    }
  }
  @media (${({ theme }) => theme.device.md}) {
    padding: 0 10%;
    .top {
      flex-direction: row-reverse;

      .message {
        width: 80%;
        h1 {
          font-size: 4rem;
        }
      }
    }
  }
  @media (${({ theme }) => theme.device.lg}) {
    .top {
      .message {
        h1 {
          font-size: 5rem;
        }
      }
    }
  }
  @media (${({ theme }) => theme.device.xl}) {
    .top {
      .message {
        h1 {
          font-size: 7rem;
        }
      }
    }
  }
`;

export default SectionOne;
