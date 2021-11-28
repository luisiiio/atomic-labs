import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

import stepEnd from "public/stepEnd.png";

const PageStyled = styled.section`
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

  .text {
    h1 {
      font-size: 2.5rem;
      font-weight: bold;

      span {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    h2 {
      font-size: 1.8rem;
      margin: 2rem 0;
    }

    p {
      font-size: 1.4rem;
    }
  }

  .image {
    width: 20rem;
  }

  @media (${({ theme }) => theme.device.md}) {
    flex-direction: row;
    .text {
      h1 {
        font-size: 3.5rem;
      }

      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1.6rem;
      }
    }

    .image {
      width: 50rem;
    }
  }
`;

import Layout from "ui/molecules/Layout";

const EndApplication: NextPage = () => {
  return (
    <Layout title="Atomic Labs | End Application" description="Landing Page">
      <PageStyled>
        <article className="text">
          <h1>
            TUS DATOS <br />{" "}
            <span>
              HAN SIDO ENVIADOS <br />
              CON ÉXITO
            </span>
          </h1>
          <h2>
            En breve recibirás un correo de confirmación por parte del equipo de
            AtomicLabs.
          </h2>

          <p>
            Recuerda revisar tu bandeja de SPAM <br /> ¡Esperamos verte pronto!
          </p>
        </article>
        <article className="image">
          <Image src={stepEnd} alt="image" layout="responsive" />
        </article>
      </PageStyled>
    </Layout>
  );
};

export default EndApplication;
