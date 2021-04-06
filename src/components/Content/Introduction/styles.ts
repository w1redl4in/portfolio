import styled from 'styled-components';

export const IntroductionContainer = styled.section`
  max-width: 1100px;

  margin: auto;

  padding: 0 0 15rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  @media (max-width: 992px) {
    margin-top: 6.6rem;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.huge};
    font-weight: 300;

    @media screen and (max-width: 992px) {
      font-size: 10vw;
    }

    @media screen and (max-width: 576px) {
      font-size: 18.5vw;
    }

    > span {
      font-weight: 300;
    }

    u {
      font-weight: 600;
      text-decoration: line-through;
    }

    strong {
      font-weight: 600;
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSize.large};
      font-weight: 600;

      > span {
        font-weight: 300;
      }
    }
  }
`;
