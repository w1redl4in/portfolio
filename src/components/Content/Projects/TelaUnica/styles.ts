import styled from 'styled-components';

export const ProjectInfo = styled.div`
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

export const TelaUnicaContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  padding: 4rem 2rem 10rem 2rem;

  height: 100vh;

  z-index: 2;

  @media (max-width: 992px) {
    padding-top: 15rem;
  }

  @media screen and (max-width: 1280px) {
    flex-direction: column-reverse;
    ${ProjectInfo} {
      margin-top: 3rem;
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.normal};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.incredibleLarge};
  }

  figure {
    img {
      width: 100%;
      max-width: 80rem;
      height: auto;
      box-shadow: ${({ theme }) => theme.shadows.default};
      border-radius: 0.5rem;
    }
  }
`;
