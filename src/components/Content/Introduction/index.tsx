import { IntroductionContainer } from "./styles";

export const Introduction: React.FC = () => {
  return (
    <IntroductionContainer id="initial">
      <h1>
        Hi, I'm&nbsp;
        <u>Felipe Austríaco, a.k.a</u>
        <strong>
          {" "}
          w1redl4in. <span>🙅🏽‍♂️</span>
        </strong>
        <h2>
          <span>Web Developer at </span>
          <strong>Mercado Livre</strong>
        </h2>
      </h1>
    </IntroductionContainer>
  );
};
