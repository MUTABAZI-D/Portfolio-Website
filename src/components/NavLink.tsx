import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type Props = {
  title: string;
  href: string;
  setNavbarOpen: Dispatch<SetStateAction<boolean>>;
};

export const NavLink = ({ title, href, setNavbarOpen }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      onClick={() => setNavbarOpen(false)}
      href={href}
      className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0  ${
        pathname === href ? "text-purple-400 font-bold" : "hover:text-white"
      }`}
    >
      {title}
    </Link>
  );
};
