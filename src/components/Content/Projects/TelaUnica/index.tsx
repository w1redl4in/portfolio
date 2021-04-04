import { Technologies, Tech } from '../../../Technologies';
import { Icons } from './constants';
import { TelaUnicaContainer, ProjectInfo } from './styles';

export const TelaUnica: React.FC = () => {
  return (
    <TelaUnicaContainer>
      <ProjectInfo>
        <h1>Hub Fintech</h1>
        <h2>Tela Única</h2>
        <p>This project is my first connection to the javascript world</p>
        <time>Dez 2019 — Fev 2020</time>
        <Technologies>
          {Object.entries(Icons).map(([key, value]) => (
            <Tech key={key}>
              <img src={value.path} alt={value.path} />
              <span>{key}</span>
            </Tech>
          ))}
        </Technologies>
      </ProjectInfo>
      <figure>
        <img
          src="https://cdn.discordapp.com/attachments/756656687942729731/827395212916555776/unknown.png"
          alt=""
        />
      </figure>
    </TelaUnicaContainer>
  );
};
