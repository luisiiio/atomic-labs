import React, { FC } from "react";
import Image from "next/image";

import PhasesStyled from "./PhasesStyled";

import arrow from "public/arrow.svg";

const Phases: FC<{
  data: Array<string>;
}> = ({ data }) => {
  return (
    <PhasesStyled>
      {data.map((text, index, phases) => (
        <p key={index}>
          {text}
          {index + 1 === phases.length ? null : (
            <span>
              <Image src={arrow} alt="arrow" />
            </span>
          )}
        </p>
      ))}
    </PhasesStyled>
  );
};

export default Phases;
