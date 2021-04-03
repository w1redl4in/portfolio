import styled from 'styled-components';

export const IntroductionContainer = styled.section`
  max-width: 1100px;

  margin: auto;

  padding-bottom: 15rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  @media (max-width: 992px) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};
    margin-top: 6.6rem;
  }

  h1 {
    padding: 0 2rem;
    font-size: ${({ theme }) => theme.fontSize.huge};
    font-weight: 300;

    @media screen and (max-width: 992px) {
      font-size: 10vw;
    }

    @media screen and (max-width: 576px) {
      font-size: 20vw;
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
