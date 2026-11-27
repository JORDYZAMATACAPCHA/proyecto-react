import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Lateral = styled.nav`
  background: ${(props) => props.theme.colors.card};
  width: 200px;
  min-height: 100vh;
  padding: ${(props) => props.theme.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.small};
`;

export const Enlace = styled(NavLink)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  padding: ${(props) => props.theme.spacing.small};

  &.active {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;