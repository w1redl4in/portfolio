import styled from 'styled-components';

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  padding: 2rem;

  > time {
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: bold;
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

export const WhitelabelBankContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    ${Info} {
      margin-top: 3rem;
    }
  }

  padding: 0 2rem 10rem 2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};

  height: auto;

  z-index: 2;

  @media (max-width: 992px) {
    padding-top: 15rem;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.normal};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.incredibleLarge};
  }

  a {
    color: ${({ theme }) => theme.colors.blue};

    &:hover {
      text-decoration: underline;
    }
  }

  > span {
    color: ${({ theme }) => theme.colors.blue};
  }

  figure {
    padding: 1rem;
  }
`;

export const Technologies = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2rem;
  max-width: 800px;

  width: 100%;

  img {
    width: 3rem;
    height: 3rem;
    filter: drop-shadow(0 0 10px ${({ theme }) => theme.colors.grey500});

    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }

  img + img {
    margin-left: 5rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;

  > img {
    width: 100%;
    max-width: 80rem;
    height: auto;
    box-shadow: ${({ theme }) => theme.shadows.default};
    border-radius: 0.5rem;
  }
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;

  > span {
    font-size: ${({ theme }) => theme.fontSize.normal};
    color: ${({ theme }) => theme.colors.black900};
    margin-top: 0.5rem;
  }
`;
