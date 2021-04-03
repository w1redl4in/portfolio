import { Me } from '../../me';
import { NavbarContainer, NavInfo, Date } from './styles';

export const Navbar: React.FC = () => {
  const { Github, LinkedIn, Twitter } = Me;
  return (
    <NavbarContainer>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/43390533?v=4"
          alt="felipe me"
        />
        <NavInfo>
          <a href={Twitter} target="_blank">
            Twitter
          </a>
          <a href={LinkedIn} target="_blank">
            LinkedIn
          </a>
          <a href={Github} target="_blank">
            Github
          </a>
        </NavInfo>
        <Date>2021</Date>
      </div>
    </NavbarContainer>
  );
};
