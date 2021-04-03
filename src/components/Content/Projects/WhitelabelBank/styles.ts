import styled from 'styled-components';

export const WhitelabelBankContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  padding-bottom: 10rem;

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

  span {
    color: ${({ theme }) => theme.colors.blue};
  }

  figure {
    padding: 1rem;
  }
  img {
    width: 100%;
    max-width: 80rem;
    height: auto;
    box-shadow: ${({ theme }) => theme.shadows.default};
    border-radius: 0.5rem;
  }
`;

export const WhitelabelExamples = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  img {
    width: 100%;
    max-width: 20rem;
    height: auto;
    box-shadow: ${({ theme }) => theme.shadows.default};
    margin: 1rem;

    transition: all 0.2s;

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.darker};
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`;

export const Technologies = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  max-width: 800px;

  width: 100%;

  svg {
    width: 5rem;
    height: 5rem;
  }

  svg + svg {
    margin-left: 5rem;
  }
`;
