import {
  WhitelabelBankContainer,
  WhitelabelExamples,
  Technologies,
} from './styles';
import { SiReact, SiNodeDotJs, SiTypescript } from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';

export const WhitelabelBank: React.FC = () => {
  return (
    <WhitelabelBankContainer>
      <h1>Hub Fintech</h1>
      <h2>Whitelabel Bank</h2>
      <a href="https://hubbank-internetbank.hubfintech.com.br/" target="_blank">
        Example
      </a>

      <figure>
        <img
          src="https://cdn.discordapp.com/attachments/263762535763673089/827386692922245170/unknown.png"
          alt="first experience"
        />
      </figure>
      <span>Other Examples</span>
      <WhitelabelExamples>
        <img
          src="https://cdn.discordapp.com/attachments/263762535763673089/827389247144198164/unknown.png"
          alt=""
        />
        <img
          src="https://cdn.discordapp.com/attachments/263762535763673089/827392301897744404/unknown.png"
          alt=""
        />
        <img
          src="https://cdn.discordapp.com/attachments/263762535763673089/827392542290214912/unknown.png"
          alt=""
        />
        <img
          src="https://cdn.discordapp.com/attachments/263762535763673089/827392731541405776/unknown.png"
          alt=""
        />
      </WhitelabelExamples>

      <Technologies>
        <SiReact color="#61dafb" />
        <SiNodeDotJs color="#689F63" />
        <SiTypescript color="#3178C6" />
        <AiOutlineAntDesign />
      </Technologies>
    </WhitelabelBankContainer>
  );
};
