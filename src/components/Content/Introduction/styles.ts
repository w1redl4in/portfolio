import styled from "styled-components";

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
      font-size: 17.5vw;
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

      @keyframes pulse {
        0% {
          filter: drop-shadow(0.2rem 0.2rem 1.5rem rgba(180, 160, 255, 1));
        }
        50% {
          filter: drop-shadow(0.2rem 0.2rem 1.5rem black);
        }
        100% {
          filter: drop-shadow(0.2rem 0.2rem 1.5rem rgba(180, 160, 255, 1));
        }
      }

      > span {
        animation: pulse 2s infinite ease-in-out;
      }
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSize.large};
      font-weight: 600;

      > span {
        font-weight: 300;
      }

      > strong {
        color: ${({ theme }) => theme.colors.mercadolivre};
        text-shadow: 0px 0px 10px #000000;
      }
    }
  }
`;
