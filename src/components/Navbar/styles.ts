import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);

  position: -webkit-sticky;
  position: sticky;
  top: 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 980px;
    margin: auto;
    padding: 1.3rem;

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      box-shadow: ${({ theme }) => theme.shadows.default};
      transition: transform ${({ theme }) => theme.transitionDelay.default};

      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
`;

export const NavInfo = styled.div`
  display: flex;

  a + a {
    margin-left: 2rem;
  }

  a {
    transition: all ${({ theme }) => theme.transitionDelay.default} ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.grey500};
`;
