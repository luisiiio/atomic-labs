import React, { useState, MouseEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import ApplicationStyled from "./ApplicationStyled";

import Button from "ui/atoms/Button";
import { Input } from "ui/atoms/Input";
import { StepsBar } from "ui/molecules/StepsBar";
import { Modal } from "ui/molecules/Modal";
import { Popup } from "ui/molecules/Popup";

import edit from "public/edit.png";
import checkmark from "public/checkmark.png";
import checkmarkq from "public/checkmarkq.png";
import resend from "public/resend.png";
import oneactive from "public/oneactive.png";
import twoactive from "public/twoactiveorange.png";
import threeactive from "public/threeactiveorange.png";
import fouractive from "public/fouractiveorange.png";
import stepOne from "public/stepOne.png";
import stepTwoThree from "public/stepTwoThree.png";
import stepFour from "public/stepFour.png";

const iconSteps = {
  1: oneactive,
  2: twoactive,
  3: threeactive,
  4: fouractive,
};

const stepImg = {
  1: stepOne,
  2: stepTwoThree,
  3: stepTwoThree,
  4: stepFour,
};

const defaultData = {
  name: "",
  lastName: "",
  phone: "",
  code: "",
};

const Application = () => {
  const [currentStep, seCurrentStep] = useState<number>(1);
  const [data, setData] = useState(defaultData);
  const [errors, setErrors] = useState(defaultData);
  const [sendCode, setSendCode] = useState(false);
  const [resendCode, setResendCode] = useState(false);
  const [validatedCode, setValidatedCode] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

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
    if (event.currentTarget.name === "phone") {
      if (event.currentTarget.value.length !== 10) {
        setErrors({
          ...errors,
          [event.currentTarget.name]: "Este campo deberá tener solo 10 dígitos",
        });
      } else {
        setErrors({
          ...errors,
          [event.currentTarget.name]: "",
        });
      }
    }
    if (event.currentTarget.name === "code") {
      if (event.currentTarget.value.length < 4) {
        setErrors({
          ...errors,
          [event.currentTarget.name]: "El código es de 4 o más dígitos",
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
    if (currentStep === 2) {
      setSendCode(true);
      setTimeout(() => {
        setSendCode(false);
      }, 2000);
      if (editPhone) {
        setEditPhone(false);
      }
    }
    if (currentStep === 3) {
      setValidatedCode(true);
      setTimeout(() => {
        setValidatedCode(false);
      }, 2000);
    }
    seCurrentStep(currentStep + 1);
  };
  const prevStep = (
    event: MouseEvent<HTMLButtonElement | HTMLParagraphElement>
  ) => {
    event.preventDefault();
    seCurrentStep(currentStep - 1);
  };

  const handleResendCode = () => {
    setResendCode(true);
    setTimeout(() => {
      setResendCode(false);
      setSendCode(true);
      setTimeout(() => {
        setSendCode(false);
      }, 2000);
    }, 2000);
  };

  const handleEditPhone = () => {
    seCurrentStep(currentStep - 1);
    setEditPhone(true);
  };

  const toggleShowPopup = () => {
    setShowPopup(true);
  };

  const sendToPage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("finished");
  };

  return (
    <ApplicationStyled>
      <section>
        <StepsBar currentStep={currentStep} steps={4} className="step-bar" />

        <p
          className={currentStep === 1 ? "hide" : "btn-back"}
          onClick={prevStep}
        >
          {"< Regresar"}
        </p>
        <div className="title">
          <span className="img">
            <Image
              src={
                iconSteps[
                  currentStep === 1
                    ? 1
                    : currentStep === 2
                    ? 2
                    : currentStep === 3
                    ? 3
                    : 4
                ]
              }
              alt="step number"
              height={50}
              width={50}
            />
          </span>{" "}
          <h1 className={currentStep === 1 ? "" : "hide"}>
            TE QUEREMOS <span>CONOCER</span>
          </h1>
          <h1 className={currentStep === 2 ? "" : "hide"}>
            {editPhone ? "EDITA" : "VALIDA"} TU <span>CELULAR</span>
          </h1>
          <h1 className={currentStep === 3 ? "" : "hide"}>
            CÓDIGO DE <span>VERIFICACIÓN</span>
          </h1>
          <h1 className={currentStep === 4 ? "" : "hide"}>
            TÉRMINOS Y <span>CONDICIONES</span>
          </h1>
        </div>
        <h2 className={currentStep === 1 ? "subtitle" : "hide"}>
          Queremos saber que eres tú, por favor ingresa los siguientes datos:
        </h2>
        <h2 className={currentStep === 2 ? "subtitle" : "hide"}>
          Necesitamos validar tu número para continuar <br />
          Ingresa tu número a 10 dígitos y te enviaremos un código SMS.
        </h2>
        <h2 className={currentStep === 3 ? "subtitle" : "hide"}>
          Te enviamos un SMS al número: <br />
        </h2>
        <h2 className={currentStep === 3 ? "subtitle" : "hide"}>
          +52 {data.phone}{" "}
          <article onClick={handleEditPhone}>
            <Image src={edit} alt="edit" height={30} width={30} />
          </article>
        </h2>
        <h2 className={currentStep === 3 ? "subtitle" : "hide"}>
          Ingresa el código de verificación
        </h2>
        <h2 className={currentStep === 4 ? "subtitle" : "hide"}>
          Por favor revisa nuestros términos y condiciones para este servicio:
        </h2>

        <form className={currentStep === 1 ? "form" : "hide"}>
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
        <form className={currentStep === 2 ? "form" : "hide"}>
          <div>
            <Input
              name="phone"
              label="Número de Celular"
              type="number"
              value={data.phone}
              onChangeInput={handleChangeInput}
              onBlurInput={handleBlurInput}
              errors={errors.phone}
            />
          </div>
          <Button
            primary
            disabled={data.phone.length !== 10}
            onClick={nextStep}
          >
            Continuar
          </Button>
        </form>
        <form className={currentStep === 3 ? "form" : "hide"}>
          <div>
            <Input
              name="code"
              label="Código de verificación"
              type="number"
              value={data.code}
              onChangeInput={handleChangeInput}
              onBlurInput={handleBlurInput}
              errors={errors.code}
            />
          </div>
          <br /> <br />
          <h2 className="subtitle">
            ¿No recibiste el código?{" "}
            <b
              onClick={() => {
                handleResendCode();
              }}
            >
              Reenviar código
            </b>
          </h2>
          <br /> <br />
          <Button primary disabled={data.code.length < 4} onClick={nextStep}>
            Validar código
          </Button>
        </form>
        <form className={currentStep === 4 ? "form" : "hide"}>
          <h3 onClick={toggleShowPopup}>Consulta Términos y condiciones</h3>
          <p className="step4">
            <span>
              <Image src={checkmarkq} alt="check" width="20" height="20" />
            </span>
            Acepto los Términos y Condiciones
          </p>
          <br /> <br />
          <Button primary onClick={sendToPage}>
            Enviar
          </Button>
        </form>
      </section>
      <article className="step-img">
        <Image
          src={
            stepImg[
              currentStep === 1
                ? 1
                : currentStep === 2
                ? 2
                : currentStep === 3
                ? 3
                : 4
            ]
          }
          alt="step image"
          layout="responsive"
        />
      </article>
      {sendCode && (
        <Modal
          icon={checkmark}
          message="Te hemos enviado el código al número que nos proporcionaste"
        />
      )}
      {resendCode && (
        <Modal icon={resend} message="Te estamos reenviando el código..." />
      )}
      {validatedCode && (
        <Modal icon={checkmark} message="Hemos validado el código" />
      )}
      {showPopup && (
        <Popup
          onClick={() => {
            setShowPopup(false);
          }}
        />
      )}
    </ApplicationStyled>
  );
};

export default Application;
