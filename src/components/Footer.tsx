import Image from "next/image";
import Logo from "../../public/Logo.png";

export const Footer = () => {
  return (
    <footer className="footer border border-[#33353F] border-l-transparent border-r-transparent text-white border-b-transparent relative">
      <div className="absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-36 w-36 md:h-44 md:w-44 blur-lg z-0 bottom-0 left-0" />
      <div className="container px-12 py-6 flex justify-between">
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};
