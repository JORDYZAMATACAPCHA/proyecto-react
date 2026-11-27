import styled from '@emotion/styled';

export const Caja = styled.div`
  background: ${(props) => props.theme.colors.card};
  padding: ${(props) => props.theme.spacing.large};
  border-radius: ${(props) => props.theme.radius};
  max-width: 600px;
  margin: 60px auto;
  text-align: center;
`;

export const Titulo = styled.h1`
  color: ${(props) => props.theme.colors.gold};
  margin: 0;
`;

export const Boton = styled.button`
  padding: ${(props) => props.theme.spacing.small};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
`;