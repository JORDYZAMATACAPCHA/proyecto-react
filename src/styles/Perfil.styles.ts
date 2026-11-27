import styled from '@emotion/styled';

export const Caja = styled.div`
  background: ${(props) => props.theme.colors.card};
  padding: ${(props) => props.theme.spacing.large};
  border-radius: ${(props) => props.theme.radius};
  max-width: 400px;
`;

export const Avatar = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`;

export const Titulo = styled.h1`
  color: ${(props) => props.theme.colors.gold};
`;