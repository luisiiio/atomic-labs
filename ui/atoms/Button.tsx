import styled from "styled-components";

const Button = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  border-radius: 3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.action};
  font-family: ${({ theme }) => theme.fonts.primary};
  background: ${({ theme }) => theme.colors.white};

  @media (min-width: 768px) {
    font-size: 2.4rem;
    padding: 1rem 4rem;
  }
`;

export default Button;
