import styled from 'styled-components';

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  width: 100%;
  padding: 2rem;

  > time {
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: bold;
  }

  > p > a {
    font-weight: bold;
    text-decoration: underline;
  }
`;

type ContainerProps = {
  reverse: boolean;
};

export const Container = styled.section<ContainerProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  text-align: center;

  padding: 4rem 2rem 10rem 2rem;

  height: 100vh;

  z-index: 2;

  position: relative;

  @media (max-width: 992px) {
    padding-top: 15rem;
    margin-bottom: 15rem;
  }

  @media screen and (max-width: 1280px) {
    flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
    height: auto;
    ${Info} {
      margin-top: 3rem;
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.normal};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.incredibleLarge};

    @media (max-width: 992px) {
      font-size: ${({ theme }) => theme.fontSize.larger};
    }
  }

  figure {
    padding: 1rem;

    img {
      width: 100%;
      max-width: 65rem;
      height: auto;
      filter: drop-shadow(0 0 10px ${({ theme }) => theme.colors.grey500});
      border-radius: 0.5rem;
    }
  }
`;

export const InfoLinks = styled.div`
  display: flex;
  justify-content: center;

  a {
    margin-top: 1rem;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.black900};
  }

  a + a {
    margin-left: 2rem;
  }
`;
