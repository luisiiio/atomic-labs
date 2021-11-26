import React, { MouseEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Button from "ui/atoms/Button";
import { Phases } from "ui/molecules/Phases";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

import sec1img1 from "public/sec1img1.png";
import arrowdown from "public/arrowdown.png";
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
