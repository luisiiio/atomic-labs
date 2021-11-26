import React from "react";
import Image from "next/image";
import FooterStyled from "./FooterStyled";
import twitter from "public/twitter.png";
import linkedin from "public/linkedin.png";

const Footer = () => {
  return (
    <FooterStyled>
      <p>© 2020 AtomicLabs. Todos los derechos reservados.</p>
      <p>
        <span>Aviso de privacidad</span>
        <a
          href="https://www.linkedin.com/company/atomic-mexico/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={linkedin}
            alt="Picture of the author"
            width={30}
            height={30}
          />
        </a>
        <a
          href="https://twitter.com/AtomicMexico"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={twitter}
            alt="Picture of the author"
            width={30}
            height={30}
          />
        </a>
      </p>
    </FooterStyled>
  );
};

export default Footer;
