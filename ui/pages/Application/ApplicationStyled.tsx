import styled from "styled-components";

const ApplicationStyled = styled.section`
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/bgblue.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  line-height: normal;

  .step-bar {
    margin: 1rem 0;
  }

  .title {
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;

    .img {
      width: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.5rem;
    }

    h1 span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  .subtitle {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    margin: 0.5rem 0;

    article {
      margin-left: 1rem;
      cursor: pointer;
    }

    b {
      cursor: pointer;
      margin-left: 0.5rem;
    }
  }

  .form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    button {
      align-self: flex-end;
    }

    h3 {
      font-size: 1.4rem;
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
      margin: 2rem 0;
    }

    .step4 {
      font-size: 1.4rem;
      display: flex;
      align-content: center;

      span {
        margin-right: 1rem;
      }
    }
  }

  .step-img {
    width: 10rem;
    height: 10rem;
  }

  .hide {
    display: none;
  }

  .btn-back {
    font-size: 1.4rem;
    cursor: pointer;
  }

  @media (${({ theme }) => theme.device.md}) {
    flex-direction: row;

    .btn-back {
      font-size: 1.6rem;
      margin-top: 1.5rem;
    }

    .title {
      font-size: 3rem;
      margin: 3rem 0;

      .img {
        width: 4rem;
        margin-right: 2rem;
      }
    }

    .subtitle {
      font-size: 1.8rem;
      margin-top: 1rem;
    }

    .step-img {
      width: 40rem;
      height: 40rem;
      align-self: flex-start;
      margin-top: 12rem;
    }
  }
  @media (${({ theme }) => theme.device.lg}) {
    .step-img {
      width: 30rem;
      height: 30rem;
    }
  }
`;

export default ApplicationStyled;
