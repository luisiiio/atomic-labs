import React from "react";
import Image from "next/image";
import FooterStyled from "./FooterStyled";
import twitter from "public/twitter.png";
import linkedin from "public/linkedin.png";

const Footer = () => {
  return (
    <FooterStyled>
      <p>© 2020 AtomicLabs. Todos los derechos reservados.</p>
      <section>
        <span>Aviso de privacidad</span>
        <div>
          <article>
            <a
              className="icon-rss"
              href="https://www.linkedin.com/company/atomic-mexico/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={linkedin} alt="linkedin" layout="responsive" />
            </a>
          </article>
          <article>
            <a
              className="icon-rss"
              href="https://twitter.com/AtomicMexico"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={twitter} alt="twitter" layout="responsive" />
            </a>
          </article>
        </div>
      </section>
    </FooterStyled>
  );
};

export default Footer;
