import React from "react";
import Image from "next/image";
import styled from "styled-components";

import icon from "public/icon.png";

const PopupStyled = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0000009e;
  z-index: 10;

  article {
    max-width: 60rem;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    border-radius: 1rem;
    line-height: 1.5;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2.5rem;
    }
    p {
      margin-bottom: 2rem;
    }
  }

  @media (${({ theme }) => theme.device.md}) {
    article {
      font-size: 1.6rem;
    }
  }
`;

const Popup: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <PopupStyled onClick={onClick}>
      <article>
        <span>
          <Image src={icon} alt="icon" width="50" height="50" />
        </span>
        <h2>Términos y Condiciones</h2>
        <p>
          Para llevar a cabo las finalidades descritas en el presente Aviso de
          Privacidad, utilizaremos datos personales de identificación, contacto
          y laborales.
        </p>
        <p>
          Los datos personales que AtomicLabs recaba de usted, serán utilizados
          para las siguientes finalidades que son necesarias para ofrecer
          nuestros servicios:
        </p>
        <p>
          • AtomicLabs requiere utilizar sus datos personales para incluirlo en
          la base de datos que utilizamos para prestar los servicios de
          reclutamiento, selección de personal, administración de nómina y
          prestación de servicios. AtomicLabs utilizará sus datos personales
          para evaluar si es posible colocarlo en las vacantes de empleo de la
          compañía o de los clientes de AtomicLabs y para conocer sus aptitudes,
          antecedentes y referencias laborales. En este sentido, AtomicLabs
          utilizará sus datos personales para ponerse en contacto con usted en
          relación a las vacantes para las cuales podría ser candidato.
        </p>
      </article>
    </PopupStyled>
  );
};

export default Popup;
