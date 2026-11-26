import styled from '@emotion/styled';

export const Formulario = styled.form`
  background: ${(props) => props.theme.colors.card};
  padding: ${(props) => props.theme.spacing.large};
  border-radius: ${(props) => props.theme.radius};
  max-width: 350px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.medium};
`;

export const Titulo = styled.h1`
  color: ${(props) => props.theme.colors.gold};
  margin: 0;
`;

export const Campo = styled.input`
  padding: ${(props) => props.theme.spacing.small};
`;

export const Boton = styled.button`
  padding: ${(props) => props.theme.spacing.small};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
`;

export const TextoError = styled.p`
  color: ${(props) => props.theme.colors.error};
  margin: 0;
`;

export const TextoListo = styled.p`
  margin: 0;
`;