import { useEffect, useState } from "react";
import logoFull from "../assets/logo-full.svg";
import { cn } from "../utils/cn";
import { navLinks } from "../data/navLinks";

const NavBar = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  useEffect(() => {
    if (isOpenDropdown) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenDropdown]);

  return (
    <div className="h-[52px] sm:h-[68px] relative sm:flex sm:justify-between max-w-[1440px] mx-auto min-[1330px]:px-[80px]">
      {/* logo */}
      <figure className="min-[730px]:w-[107px] sm:w-[132px] h-[52px] sm:h-[64px] flex items-center">
        <a href="#">
          <img
            className="min-[730px]:ml-[10px] h-[52px]"
            src={logoFull}
            alt="Trade blade logo"
          />
        </a>
      </figure>

      {/* links desktop */}
      <nav className="hidden sm:flex mr-[10px]">
        <ul className="grid py-3 grid-flow-col grid-rows-2 min-[960px]:flex justify-between items-center min-[730px]:px-[10px] h-[68px] min-[960px]:gap-[8px] min-[1000px]:w-[600px] min-[1110px]:w-[693px]">
          {navLinks.map((linkObj) => (
            <li className="mx-[10px] min-[960px]:mx-0" key={linkObj.text}>
              <a href={linkObj.href} onClick={() => setIsOpenDropdown(false)}>
                <span className="text-white/70 hover:text-white/90 uppercase font-[500] text-[14px] leading-[17px] text-nowrap tracking-normal">
                  {linkObj.text}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-[12px] items-center min-[730px]:ml-[10px] min-[1180px]:ml-[80px]">
          <a className="w-[45px] min-[730px]:w-[55px] min-[960px]:w-[86px] h-[42px] border-[1.5px] bg-sky-blue/20 border-sky-blue rounded-[3px] shadow-[0px_0px_4px_#57E1FF] flex items-center justify-center">
            <a
              href="#"
              className="text-sky-blue uppercase font-[500] text-[14px] leading-[20px] text-nowrap tracking-normal">
              Вход
            </a>
          </a>
          <a className="w-[100px] min-[730px]:w-[110px] min-[960px]:w-[146px] h-[42px] bg-sky-blue rounded-[3px] shadow-[0px_0px_4px_#57E1FF] flex items-center justify-center border-[1px] border-sky-blue">
            <a
              href="#"
              className="text-layout-dark uppercase font-[500] text-[14px] leading-[20px] text-nowrap tracking-normal">
              Регистрация
            </a>
          </a>
        </div>
      </nav>

      {/* mobile links dropdown */}
      <nav
        className={cn(
          "absolute z-10 w-full h-dvh inset-0 bg-layout-purple sm:hidden flex flex-col justify-between pb-[16px]",
          isOpenDropdown
            ? "translate-y-0 transition-all"
            : "-translate-y-full transition-all"
        )}>
        <ul className="text-white/70 justify-between flex flex-col ml-[16px] w-[205px] h-[400px] mt-[84px] mb-[113px]">
          {navLinks.map((linkObj) => (
            <li className="mx-1" key={linkObj.text}>
              <a href={linkObj.href} onClick={() => setIsOpenDropdown(false)}>
                <span className="uppercase font-[500] text-[24px] leading-[30px] text-nowrap tracking-normal">
                  {linkObj.text}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="w-[343px] h-[52px] flex gap-[16px] mx-auto">
          <a className="min-w-[163px] min-h-[52px] bg-sky-blue rounded-[3px] shadow-[0px_0px_4px_#57E1FF] flex items-center justify-center">
            <span className="text-layout-dark uppercase font-[500] text-[16px] leading-[20px] text-nowrap tracking-normal">
              Регистрация
            </span>
          </a>
          <a className="min-w-[163px] min-h-[52px] border-[2px] bg-sky-blue/20 border-sky-blue rounded-[3px] shadow-[0px_0px_4px_#57E1FF] flex items-center justify-center">
            <span className="text-sky-blue uppercase font-[500] text-[16px] leading-[20px] text-nowrap tracking-normal">
              Войти
            </span>
          </a>
        </div>
      </nav>

      {/* hamburger btn */}
      <div className="absolute right-0 h-[52px sm:hidden right-[9px] top-[9px] z-20 ">
        <div className="peer px-[5px] py-[15px] relative size-[32px] ">
          <input
            onChange={() => setIsOpenDropdown((bool) => !bool)}
            checked={isOpenDropdown}
            type="checkbox"
            id="hamburger"
            className="peer absolute opacity-0 inset-0 cursor-pointer"
          />
          <label
            htmlFor="hamburger"
            className=" block w-[23px] h-[2px] bg-white rounded before:content-[''] before:block before:w-[23px] before:h-[2px] before:bg-white before:translate-y-[-7px] before:rounded after:content-[''] after:block after:w-[23px] after:h-[2px] after:bg-white after:translate-y-[5px] after:rounded peer-checked:w-0 peer-checked:before:translate-y-0 peer-checked:before:rotate-45 peer-checked:after:-translate-y-[2px] peer-checked:after:-rotate-45 before:transition-transform after:transition-transform"></label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
