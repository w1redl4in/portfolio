import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  z-index: 99999;
  position: absolute;
  bottom: -10rem;
  width: 100%;
`;

export const SocialMedias = styled.div`
  display: flex;
  max-width: 440px;
  width: 100%;

  margin-top: 0.5rem;

  align-items: center;
  justify-content: space-around;

  a {
    svg {
      width: 2rem;
      height: 2rem;
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
