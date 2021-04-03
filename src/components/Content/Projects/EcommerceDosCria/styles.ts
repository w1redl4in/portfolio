import styled from 'styled-components';

export const EcommerceDosCriaContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  padding-bottom: 10rem;
  padding-top: 1rem;

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
