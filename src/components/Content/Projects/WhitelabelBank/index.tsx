import {
  WhitelabelBankContainer,
  Technologies,
  ImageContainer,
  Info,
  InfoLinks,
  Tech,
} from './styles';
import { Icons, Links } from './constants';

export const WhitelabelBank: React.FC = () => {
  return (
    <WhitelabelBankContainer>
      <ImageContainer>
        <img
          src="https://cdn.discordapp.com/attachments/263762535763673089/828290643805208626/screenshot-rocks.png"
          alt=""
        />
      </ImageContainer>
      <Info>
        <h1>Hub Fintech</h1>
        <h2>Internet Banking Whitelabel</h2>
        <p>
          This was the most difficult project, but also the most rewarding, we
          developed a digital bank from scratch with a tight deadline.
        </p>
        <InfoLinks>
          {Object.entries(Links).map(([key, value]) => (
            <a key={key} href={value.path} target="_blank">
              {key}
            </a>
          ))}
        </InfoLinks>
        <Technologies>
          {Object.entries(Icons).map(([key, value]) => (
            <Tech key={key}>
              <img src={value.path} alt={value.path} />
              <span>{key}</span>
            </Tech>
          ))}
        </Technologies>
      </Info>
    </WhitelabelBankContainer>
  );
};
