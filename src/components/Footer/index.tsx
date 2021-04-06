import { FooterContainer, SocialMedias } from './styles';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';
import { theme } from '../../styles';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <h4>Made with 💖 by Felipe Austríaco</h4>
      <SocialMedias>
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
      </SocialMedias>
    </FooterContainer>
  );
};
