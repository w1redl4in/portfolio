import styled from 'styled-components';

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
