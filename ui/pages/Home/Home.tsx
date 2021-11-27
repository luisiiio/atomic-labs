import React, { MouseEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Button from "ui/atoms/Button";
import { Phases } from "ui/molecules/Phases";
import { Cards } from "ui/molecules/Cards";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";

import sec1img1 from "public/sec1img1.png";
import arrowdown from "public/arrowdown.png";
import check from "public/check.png";
import sec2img1 from "public/sec2img1.png";
import sec2img2 from "public/sec2img2.png";
import sec2img3 from "public/sec2img3.png";
import sec3img1 from "public/sec3img1.png";
import sec4img1 from "public/sec4img1.png";
import sec4img2 from "public/sec4img2.png";
import sec4img3 from "public/sec4img3.png";

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
      <SectionFour>
        <h1>
          ¿POR QUÉ <span> ATOMIC?</span>
        </h1>
        <div>
          <article>
            <div className="img">
              <Image src={sec4img1} alt="people" />
            </div>
            <ul>
              <li>
                <Image src={check} alt="icon check" width={30} height={30} />
                <p>Usamos las tecnologías más modernas.</p>
              </li>
              <li>
                <Image src={check} alt="icon check" width={30} height={30} />
                <p>Innovamos y creamos proyectos retadores.</p>
              </li>
            </ul>
          </article>
          <article>
            <div className="img">
              <Image src={sec4img2} alt="people" />
            </div>
            <ul>
              <li>
                <Image src={check} alt="icon check" width={30} height={30} />
                <p>¡Trabajamos en equipo rumnbo al éxito!</p>
              </li>
              <li>
                <Image src={check} alt="icon check" width={30} height={30} />
                <p>No tenemos código de vestimenta.</p>
              </li>
            </ul>
          </article>
          <article>
            <div className="img">
              <Image src={sec4img3} alt="people" />
            </div>
            <ul>
              <li>
                <Image src={check} alt="icon check" width={30} height={30} />
                <p>Realizamos actividades para tu bienestar.</p>
              </li>
              <li>
                <Image src={check} alt="icon check" width={30} height={30} />
                <p>¡Tenemos un parque al frente de la oficina!</p>
              </li>
            </ul>
          </article>
        </div>
      </SectionFour>
      <SectionFive>
        <article>
          <p className="header">
            <b>CARACTERÍSTICAS</b>
          </p>
          <p className="header bl">
            <b>OTROS</b>
          </p>
          <p className="header bl bg atomic-column">
            <b>ATOMIC</b>
          </p>
          <p className="bb br text-align">
            Equipo inclusivo, honesto y auténtico
          </p>
          <p className="center bb br">
            <Image src={check} alt="icon check" width={30} height={30} />
          </p>
          <p className="center bb bg">
            <Image src={check} alt="icon check" width={30} height={30} />
          </p>
          <p className="bb br text-align">
            Puntualidad es nuestro segundo nombre
          </p>
          <p className="center bb br">
            <Image src={check} alt="icon check" width={30} height={30} />
          </p>
          <p className="center bb bg">
            <Image src={check} alt="icon check" width={30} height={30} />
          </p>
          <p className="bb br text-align">
            Siempre innovamos en nuestros productos
          </p>
          <p className="center bb br">
            <Image src={check} alt="icon check" width={30} height={30} />
          </p>
          <p className="center bb bg">
            <Image src={check} alt="icon check" width={30} height={30} />
          </p>
          <p className="bb br text-align">
            Te ayudamos a crecer e implementar nuevos conocimientos
          </p>
          <p className="bb br"></p>
          <p className="center bb bg">
            <Image src={check} alt="icon check" width={30} height={30} />
          </p>
          <p className="bb br text-align">Nos preocupamos por tu bienestar</p>
          <p className="bb br"></p>
          <p className="center bb bg">
            <Image src={check} alt="icon check" width={30} height={30} />
          </p>
          <p className="br text-align">El respeto es una parte fundamental</p>
          <p className="br"></p>
          <p className="center bg">
            <Image src={check} alt="icon check" width={30} height={30} />
          </p>
        </article>

        <Button onClick={sendToApplication}>¡Quiero ser parte!</Button>
      </SectionFive>
    </>
  );
};

export default Home;
