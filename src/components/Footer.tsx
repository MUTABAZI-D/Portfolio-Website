import Image from "next/image";
import Logo from "../../public/Logo.png";

export const Footer = () => {
  return (
    <footer className="footer bg-[#121212] border-t border-[#33353F] text-white relative">
      <div className="absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-32 w-36 md:h-36 md:w-44 blur-lg z-0 bottom-0 -left-6 md:-left-8" />
      <div className="container px-6 py-6 flex justify-between items-center">
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};
