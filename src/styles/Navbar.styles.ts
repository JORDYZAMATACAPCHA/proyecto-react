import styled from '@emotion/styled';

export const Barra = styled.header`
  background: ${(props) => props.theme.colors.card};
  padding: ${(props) => props.theme.spacing.medium};
`;

export const Logo = styled.span`
  color: ${(props) => props.theme.colors.gold};
  font-weight: bold;
`;