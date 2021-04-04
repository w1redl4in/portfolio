import { Tech, Technologies } from '../../../Technologies';
import { Icons } from './constants';
import { SpotifyContainer, ProjectInfo } from './styles';

export const Spotify: React.FC = () => {
  return (
    <SpotifyContainer>
      <ProjectInfo>
        <h1>Hobby</h1>
        <h2>Spotify UI Clone</h2>
        <p>
          This project was created in order to practice the Nextjs framework and
          display: grid. <br />
          Currently using next-auth with Spotify Provider and Spotify API.
        </p>
        <time>April 2021 - Now</time>

        <a href="https://spotify-next-three.vercel.app/" target="_blank">
          Demo on Vercel
        </a>
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
          src="https://cdn.discordapp.com/attachments/756656687942729731/827399198054940692/unknown.png"
          alt=""
        />
      </figure>
    </SpotifyContainer>
  );
};
