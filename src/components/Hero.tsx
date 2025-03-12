function Hero() {
  return (
    <section className="mt-[40px] px-[16px] flex flex-col ">
      <div className="mx-auto flex flex-col min-[700px]:flex-row-reverse min-[700px]:gap-5 min-[700px]:justify-between min-[700px]:w-full min-[700px]:max-w-[1227px] min-[700px]:mt-[160px] min-[700px]:mb-[134px] min-[800px]:px-[50px]">
        <div className="w-[300px] min-w-[300px] h-[134px] min-[1300px]:scale-150 min-[1300px]:translate-y-1/4 relative">
          <div className="w-[176px] h-[104px] absolute left-0 top-0 border-[1px] rounded-[4px] border-layout-purple/70 border-dashed opacity-70">
            <div className="ml-[10px] mt-[6px] flex flex-col">
              <span className="uppercase text-layout-purple font-[500] text-[20px] leading-[28px] -tracking-[4%]">
                EtH/USDT
              </span>
              <span className="capitalize text-layout-purple font-[400] text-[13px] leading-[16px] tracking-normal">
                short
              </span>
              <span className="mt-[20px] uppercase text-layout-purple font-[500] text-[20px] leading-[28px] -tracking-[4%]">
                +141%
              </span>
            </div>
          </div>
          <div className="w-[176px] h-[104px] absolute right-0 bottom-0 rounded-[4px] bg-layout-purple">
            <div className="ml-[10px] mt-[6px] flex flex-col">
              <span className="uppercase text-white font-[500] text-[20px] leading-[28px] -tracking-[4%]">
                EtH/USDT
              </span>
              <span className="capitalize text-white/60 font-[400] text-[13px] leading-[16px] tracking-normal">
                short
              </span>
              <span className="mt-[20px] uppercase text-white font-[500] text-[20px] leading-[28px] -tracking-[4%]">
                +116%
              </span>
            </div>
          </div>

          <div className="h-[1px] bg-layout-purple/70 rotate-45 w-[29px] absolute top-[5px] left-[180px] translate-y-[9px] -translate-x-[4px]"></div>
          <div className="h-[1px] bg-layout-purple/70 rotate-45 w-[29px] absolute top-[108px] left-[99px] translate-y-[9px] -translate-x-[4px]"></div>
        </div>

        <div className="w-[350px] mb-[37px] min-[1100px]:mb-[134px] min-w-[350px] min-[1100px]:min-w-[630px] h-[310px] min-[1100px]:h-[384px] mt-[33px] min-[700px]:mt-0 ">
          <div>
            <span className="uppercase text-white font-[700] text-[35px] leading-[44px] -tracking-[4%] min-[1100px]:text-[60px] min-[1100px]:leading-[72px]">
              моментально Копируй сделки профи трейдеров
            </span>
          </div>
          <div className="opacity-80 mt-[12px]">
            <span className="text-[#E7F7F8] font-[400] text-[16px] leading-[20px] tracking-normal">
              Начни копировать сделки с успешной командой профессиональных
              трейдеров в автоматическом режиме.
            </span>
          </div>
          <div className="mt-[24px] text-white w-[343px] min-[1100px]:w-[500px]">
            <form className="h-[50px] min-[1100px]:h-[60px] bg-[#201A4F] relative rounded-[4px] flex items-center">
              <input
                placeholder="Ваш e–mail"
                className="w-full h-full placeholder:uppercase placeholder:font-[500] placeholder:text-[14px] placeholder:leading-[20px] placeholder:tracking-[-1%] placeholder:pl-[16px] px-3 text-gray-200 placeholder:text-white/[34%] focus:placeholder:opacity-0 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 w-[102px] min-[1100px]:w-[109px] h-[42px] min-[1100px]:h-[52px] rounded-[3px] border border-sky-blue bg-sky-blue mr-[4px] shadow-[0px_0px_4px_#57E1FF]">
                <span className="font-[500] text-[14px] leading-[20px] tracking-normal uppercase text-layout-dark">
                  начать
                </span>
              </button>
            </form>
            <div className="mt-[12px] opacity-30 h-[20px]">
              <span className="font-[400] text-[14px] leading-[20px] tracking-normal">
                5 дней бесплатного пользования
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
