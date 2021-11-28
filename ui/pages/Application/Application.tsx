import React, { useState, MouseEvent } from "react";
import Image from "next/image";

import ApplicationStyled from "./ApplicationStyled";

import Button from "ui/atoms/Button";
import { StepsBar } from "ui/molecules/StepsBar";

import oneactive from "public/oneactive.png";
import stepOne from "public/stepOne.png";
import { Input } from "ui/atoms/Input";

const Application = () => {
  const [currentStep, seCurrentStep] = useState(1);
  const [data, setData] = useState({ name: "", lastName: "" });
  const [errors, setErrors] = useState({ name: "", lastName: "" });

  const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setData({ ...data, [event.currentTarget.name]: event.currentTarget.value });
  };

  const handleBlurInput = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (["name", "lastName"].includes(event.currentTarget.name)) {
      if (event.currentTarget.value.length < 5) {
        setErrors({
          ...errors,
          [event.currentTarget.name]:
            "Este campo deberá tener mínimo 5 caracteres",
        });
      } else {
        setErrors({
          ...errors,
          [event.currentTarget.name]: "",
        });
      }
    }
  };

  const nextStep = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    seCurrentStep(currentStep + 1);
  };
  const prevStep = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    seCurrentStep(currentStep - 1);
  };
  return (
    <ApplicationStyled>
      <section>
        <StepsBar currentStep={currentStep} steps={4} className="step-bar" />

        {/* <Button primary onClick={prevStep}>
        Regresar
      </Button> */}
        <div className="title">
          <span className="img">
            <Image
              src={oneactive}
              alt="icon arrow down"
              height={50}
              width={50}
            />
          </span>{" "}
          <h1>
            TE QUEREMOS <span>CONOCER</span>
          </h1>
        </div>
        <h2 className="subtitle">
          Queremos saber que eres tú, por favor ingresa los siguientes datos:
        </h2>

        <form className="form">
          <div>
            <Input
              name="name"
              label="Nombre(s)"
              type="text"
              value={data.name}
              onChangeInput={handleChangeInput}
              onBlurInput={handleBlurInput}
              errors={errors.name}
            />
            <Input
              name="lastName"
              label="Apellidos"
              type="text"
              value={data.lastName}
              onChangeInput={handleChangeInput}
              onBlurInput={handleBlurInput}
              errors={errors.lastName}
            />
          </div>
          <Button
            primary
            disabled={data.name.length <= 5 || data.lastName.length <= 5}
            onClick={nextStep}
          >
            Enviar
          </Button>
        </form>
      </section>
      <article className="step-img">
        <Image src={stepOne} alt="step one" layout="responsive" />
      </article>
    </ApplicationStyled>
  );
};

export default Application;
