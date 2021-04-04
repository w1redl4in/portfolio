import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 6rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grey50};

  display: flex;
  align-items: center;
  justify-content: center;
`;
