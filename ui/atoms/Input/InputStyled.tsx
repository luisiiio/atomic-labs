import styled from "styled-components";

const InputStyled = styled.div<{ errors: boolean }>`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  max-width: 35rem;

  input {
    padding: 1.4rem 0.8rem;
    margin-top: 0.5rem;
    border-radius: 0.4rem;
    color: ${({ theme }) => theme.colors.black};
    border: 2px solid
      ${(props) =>
        props.errors ? props.theme.colors.warning : props.theme.colors.white};
  }

  .errors {
    height: 2rem;
    margin-top: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.warning};
  }
`;

export default InputStyled;
