import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Barra = styled.header`
  background: ${(props) => props.theme.colors.card};
  padding: ${(props) => props.theme.spacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  color: ${(props) => props.theme.colors.gold};
  font-weight: bold;
  text-decoration: none;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.medium};
`;

export const Avatar = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Boton = styled.button`
  padding: ${(props) => props.theme.spacing.small};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
`;
