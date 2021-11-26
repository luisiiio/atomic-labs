import React from "react";
import Image from "next/image";
import styled from "styled-components";

import Button from "ui/atoms/Button";
import SectionOne from "./SectionOne";

import sec1img1 from "public/sec1img1.png";
import arrowdown from "public/arrowdown.png";

const Home = () => {
  return (
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
          <Button>¡Quiero ser parte!</Button>
        </div>
        <Image src={sec1img1} alt="space" layout="intrinsic" />
      </div>
      <div className="bottom">
        <Image src={arrowdown} alt="icon arrow down" height={50} width={50} />
        <p className="next-page">Quiero saber más</p>
      </div>
    </SectionOne>
  );
};

export default Home;
