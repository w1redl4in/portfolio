import styled from 'styled-components';

export const Technologies = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  max-width: 800px;

  width: 100%;

  img {
    width: 3rem;
    height: 3rem;
    filter: drop-shadow(0 0 10px ${({ theme }) => theme.colors.grey500});
  }

  img + img {
    margin-left: 5rem;
  }
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;

  width: 5.4rem;
  height: 5.4rem;

  @media (max-width: 992px) {
    margin: 2rem;
  }

  &:hover {
    img {
      transition: all 0.2s;
      transform: scale(1.1);
      cursor: pointer;
    }

    span {
      transition: all 0.2s;
      font-weight: 500;
    }
  }

  > span {
    font-size: ${({ theme }) => theme.fontSize.normal};
    color: ${({ theme }) => theme.colors.black900};
    margin-top: 0.5rem;
  }
`;
