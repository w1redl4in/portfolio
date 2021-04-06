import { Technologies, Tech } from '../../../Technologies';
import { Icons } from './constants';
import { EcommerceDosCriaContainer, Info } from './styles';

export const EcommerceDosCria: React.FC = () => {
  return (
    <EcommerceDosCriaContainer>
      <figure>
        <img
          src="https://cdn.discordapp.com/attachments/756656687942729731/827397393184063488/unknown.png"
          alt=""
        />
      </figure>
      <Info>
        <h1>Hobby</h1>
        <h2>ECOM DOS CRIA</h2>
        <p>
          I had an idea to start a project with longtime friends to provide the
          experience of being a programmer. It was incredible, I learned a lot
          more than I taught. Everything is documented in our{' '}
          <a
            href="https://www.notion.so/w1redl4in/Ecommerce-dos-cria-61a7d6a3640648e081d01ceb9bbb22a6"
            target="_blank"
          >
            Notion.
          </a>
        </p>
        <time>Dez 2020 — Now</time>
        <Technologies>
          {Object.entries(Icons).map(([key, value]) => (
            <Tech key={key}>
              <img src={value.path} alt={value.path} />
              <span>{key}</span>
            </Tech>
          ))}
        </Technologies>
      </Info>
    </EcommerceDosCriaContainer>
  );
};
