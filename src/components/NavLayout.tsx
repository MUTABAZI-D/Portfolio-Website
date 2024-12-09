import { NavLink } from "./NavLink";
import { Dispatch, SetStateAction } from "react";

type Props = {
  links: {
    title: string;
    path: string;
  }[];
  setNavbarOpen: Dispatch<SetStateAction<boolean>>;
};

export const NavLayout = ({ links, setNavbarOpen }: Props) => {
  return (
    <ul className="flex md:hidden flex-col py-4 items-center ">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            title={link.title}
            href={link.path}
            setNavbarOpen={setNavbarOpen}
          />
        </li>
      ))}
    </ul>
  );
};
