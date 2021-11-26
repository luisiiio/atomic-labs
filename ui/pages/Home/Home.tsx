import React, { MouseEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Button from "ui/atoms/Button";
import { Phases } from "ui/molecules/Phases";
import { Cards } from "ui/molecules/Cards";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

import sec1img1 from "public/sec1img1.png";
import arrowdown from "public/arrowdown.png";
import sec2img1 from "public/sec2img1.png";
import sec2img2 from "public/sec2img2.png";
import sec2img3 from "public/sec2img3.png";
import sec3img1 from "public/sec3img1.png";

const Home = () => {
  const router = useRouter();

  const phases = [
    "Contratación remota",
    "Entrevista con el área de RH",
    "Prueba práctica",
    "Entrevista técnica",
  ];

  const sendToApplication = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("application");
  };
  return (
    <>
      <SectionOne>
        <div className="top">
          <div className="message">
            <h1>
              Desarrolla todo
              <br />
              <span>tu POTENCIAL</span>
              <br />
              dentro del equipo <br />
              <span>ATOMIC</span> LABS
            </h1>
            <Button onClick={sendToApplication}>¡Quiero ser parte!</Button>
          </div>
          <Image src={sec1img1} alt="space" layout="intrinsic" />
        </div>
        <div className="bottom">
          <Image src={arrowdown} alt="icon arrow down" height={50} width={50} />
          <p className="next-page">Quiero saber más</p>
        </div>
      </SectionOne>
      <SectionTwo>
        <h1>
          SOMOS EL BRAZO DERECHO <br />
          <span>DE LA TECNOLOGÍA</span>
        </h1>
        <Cards>
          <article className="left">
            <Image src={sec2img1} alt="explore" />
            <div>
              <h2>EXPLORA</h2>
              <ul>
                <li>
                  Innovación y <span>creación tecnológica</span>
                </li>
                <li>
                  <span>UI/UX</span>
                </li>
                <li>
                  <span>Innovación</span>
                </li>
              </ul>
            </div>
          </article>
          <article className="center">
            <Image src={sec2img2} alt="explore" />
            <div>
              <h2>IMAGINA</h2>
              <ul>
                <li>
                  <span>Estrategia</span> Digital
                </li>
                <li>
                  Big Data & <span>Analysis</span>
                </li>
                <li>
                  <span>Consultoría </span> Tecnológica
                </li>
                <li>
                  <span>Reducción </span> de costos TI
                </li>
              </ul>
            </div>
          </article>
          <article className="right">
            <Image src={sec2img3} alt="conquista" />
            <div>
              <h2>CONQUISTA</h2>
              <ul>
                <li>
                  Desarrollo tecnológico <span>a la medida</span>
                </li>
                <li>
                  <span>Ciberseguridad</span>
                </li>
                <li>
                  <span>Servicios de la Nube</span>
                </li>
              </ul>
            </div>
          </article>
        </Cards>
      </SectionTwo>
      <SectionThree>
        <h1>
          ¡TE ENCANTARÁ <br />
          <span>TRABAJAR CON NOSOTROS!</span>
        </h1>
        <Image src={sec3img1} alt="people" />
        <Phases data={phases} />
        <Button onClick={sendToApplication}>¡Quiero ser parte!</Button>
      </SectionThree>
    </>
  );
};

export default Home;
