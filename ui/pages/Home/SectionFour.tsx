import styled from "styled-components";

const SectionFour = styled.section`
  min-height: 100vh;
  position: relative;
  background-image: url("/bgblue.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

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

  div {
    article {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.white};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;

      .img {
        width: 13rem;
      }

      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0.5rem;
          line-height: normal;

          p {
            margin-left: 0.5rem;
          }
        }
      }
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
    div {
      display: flex;
      flex-direction: row;

      article {
        height: 36rem;
        justify-content: space-between;
        .img {
          width: 20rem;
        }
      }
    }
  }
  @media (${({ theme }) => theme.device.lg}) {
    h1 {
      padding-top: 3rem;
      font-size: 5rem;
    }
    div {
      display: flex;
      flex-direction: row;

      article {
        width: 25rem;
        height: 40rem;
        font-size: 1.8rem;
        margin: 1rem;
        justify-content: space-between;
        .img {
          width: 20rem;
        }
      }
    }
  }
  @media (${({ theme }) => theme.device.xl}) {
    h1 {
      font-size: 7rem;
    }
  }
`;

export default SectionFour;
