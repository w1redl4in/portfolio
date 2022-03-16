import { NavbarContainer, NavInfo, Date as Time } from "./styles";
import { useEffect, useState } from "react";
import { useNavbarItems } from "../../hooks/use-navbar-items";

export const Navbar: React.FC = () => {
  const [scrolledToTheBottom, setScrolledToTheBottom] = useState(false);
  const { navBarItems } = useNavbarItems();

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
        </NavInfo>
        <Time>{new Date().getFullYear()}</Time>
      </div>
    </NavbarContainer>
  );
};
