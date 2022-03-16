import {
  FooterContainer,
  SocialMedias,
  Contact,
  ScrollToTopButton,
} from "./styles";
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { FaArrowCircleUp } from "react-icons/fa";
import { useNavbarItems } from "../../hooks/use-navbar-items";

export const Footer: React.FC = () => {
  const { navBarItems } = useNavbarItems();

  return (
    <FooterContainer>
      <h4>Made with 💖 by Felipe Austríaco</h4>
      <SocialMedias>
        {navBarItems.map((navBarItem) => {
          return navBarItem.component ? (
            <a href={navBarItem.href} target="_blank">
              {navBarItem.component}
            </a>
          ) : (
            <a href={navBarItem.href} target="_blank">
              <img src={navBarItem.imgSrc} alt={navBarItem.imgAlt} />
            </a>
          );
        })}
      </SocialMedias>
      <Contact>
        <p>
          <AiOutlineMail /> felipe1180@hotmail.com
        </p>
        <p>
          <AiOutlineWhatsApp /> (11) 97581-2099
        </p>
      </Contact>
      <ScrollToTopButton to="initial" smooth>
        Take a shortcut
        <FaArrowCircleUp />
      </ScrollToTopButton>
    </FooterContainer>
  );
};
