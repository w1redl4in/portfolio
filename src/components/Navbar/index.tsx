import { NavbarContainer, NavInfo, Date as Time } from './styles';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';
import { theme } from '../../styles';
import { useEffect, useState } from 'react';

export const Navbar: React.FC = () => {
  const [scrolledToTheBottom, setScrolledToTheBottom] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setScrolledToTheBottom(true);
      } else setScrolledToTheBottom(false);
    };
  }, []);

  return (
    <NavbarContainer scrolledToTheBottom={scrolledToTheBottom}>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/43390533?v=4"
          alt="felipe me"
        />
        <NavInfo>
          <a href="https://twitter.com/lainwired_" target="_blank">
            <AiFillTwitterCircle color={theme.colors.black900} />
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-austriaco-dev/"
            target="_blank"
          >
            <AiFillLinkedin color={theme.colors.black900} />
          </a>
          <a href="https://github.com/w1redl4in" target="_blank">
            <AiFillGithub color={theme.colors.black900} />
          </a>
          <a href="https://dev.to/w1redl4in" target="_blank">
            <img
              src="https://cdn.discordapp.com/attachments/756656687942729731/828409591200481320/dev-black.png"
              alt="dev to"
            />
          </a>
        </NavInfo>
        <Time>
          {new Date().getFullYear()}   
        </Time>
      </div>
    </NavbarContainer>
  );
};
