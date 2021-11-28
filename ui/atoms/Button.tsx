import styled from "styled-components";

const Button = styled.button<{ primary?: boolean; disabled?: boolean }>`
  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  border-radius: 3rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${(props) =>
    props.primary ? props.theme.colors.white : props.theme.colors.action};
  background: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.white};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};

  @media (${({ theme }) => theme.device.md}) {
    font-size: 2.4rem;
    padding: 1rem 4rem;
  }
`;

export default Button;
