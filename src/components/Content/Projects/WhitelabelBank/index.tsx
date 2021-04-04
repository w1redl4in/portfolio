import {
  WhitelabelBankContainer,
  Technologies,
  Images,
  Info,
  InfoLinks,
  Tech,
} from './styles';

export const WhitelabelBank: React.FC = () => {
  return (
    <WhitelabelBankContainer>
      <Images>
        <img
          src="https://cdn.discordapp.com/attachments/263762535763673089/828290643805208626/screenshot-rocks.png"
          alt=""
        />
      </Images>

      <Info>
        <h1>Hub Fintech</h1>
        <h2>Internet Banking Whitelabel</h2>
        <p>
          This was the most difficult project, but also the most rewarding, we
          developed a digital bank from scratch with a tight deadline.
        </p>
        <InfoLinks>
          <a
            href="https://hubbank-internetbank.hubfintech.com.br/"
            target="_blank"
          >
            HubBank
          </a>
          <a
            href="https://fretebank-internetbank.hubfintech.com.br/"
            target="_blank"
          >
            FreteBank
          </a>
          <a
            href="https://edmond-internetbank.hubfintech.com.br/"
            target="_blank"
          >
            Edmond
          </a>
          <a
            href="https://lifesbank-internetbank.hubfintech.com.br/"
            target="_blank"
          >
            LifesBank
          </a>
        </InfoLinks>
        <Technologies>
          <Tech>
            <img src="/images/ant-design.svg" alt="" />
            <span>Ant Design</span>
          </Tech>
          <Tech>
            <img src="/images/nodejs-icon.svg" alt="" />
            <span>Node Js</span>
          </Tech>
          <Tech>
            <img src="/images/react.svg" alt="" />
            <span>React</span>
          </Tech>
          <Tech>
            <img src="/images/redux.svg" alt="" />
            <span>Redux</span>
          </Tech>
          <Tech>
            <img src="/images/redux-saga.svg" alt="" />
            <span>Redux Saga</span>
          </Tech>
          <Tech>
            <img src="/images/typescript.svg" alt="" />
            <span>Typescript</span>
          </Tech>
        </Technologies>
      </Info>
    </WhitelabelBankContainer>
  );
};
