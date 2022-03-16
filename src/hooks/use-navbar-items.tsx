import { useMemo } from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

export function useNavbarItems() {
  const navBarItems = useMemo(() => {
    return [
      {
        href: "https://twitter.com/lainwired_",
        component: <AiFillTwitterCircle />,
      },
      {
        href: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        component: <AiFillLinkedin />,
      },
      {
        href: "https://github.com/w1redl4in",
        component: <AiFillGithub />,
      },
      {
        href: "https://dev.to/w1redl4in",
        imgSrc:
          "https://cdn.discordapp.com/attachments/756656687942729731/828409591200481320/dev-black.png",
        imgAlt: "logo com fundo preto escrito DEV em branco",
      },
      {
        href: "https://www.tiktok.com/@felipe.austriaco",
        imgSrc: "/images/tiktok.svg",
        imgAlt: "logo com fundo preto escrito DEV em branco",
      },
    ];
  }, []);

  return { navBarItems };
}
