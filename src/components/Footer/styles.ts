import styled from 'styled-components';
import { Link } from 'react-scroll';

export const FooterContainer = styled.footer`
  height: 11rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  z-index: 99999;
  position: absolute;
  /* bottom: -10rem; */
  width: 100%;
`;

export const SocialMedias = styled.div`
  display: flex;
  max-width: 300px;
  width: 100%;

  margin-top: 0.5rem;

  align-items: center;
  justify-content: space-around;

  a {
    svg {
      width: 2.5rem;
      height: 2.5rem;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }

    > img {
      width: 2.2rem;
      border-radius: 0;
      height: 2.2rem;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const Contact = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.small};

    svg {
      margin-right: 0.5rem;
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export const ScrollToTopButton = styled(Link)`
  margin: 1rem 0;
  padding: 0.5rem 1rem;

  font-weight: bold;

  display: flex;
  align-items: center;

  border-radius: 3rem;

  transition: all 0.3s ease-in-out;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.black900};
    color: ${({ theme }) => theme.colors.white} !important;
  }
`;
