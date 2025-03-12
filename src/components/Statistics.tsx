function Statistics() {
  return (
    <section
      id="stats"
      className="relative pt-[24px] mt-[61px] min-[700px]:mt-0 h-[392px] min-[1100px]:h-[220px]">
      <div className="w-[272px] sm:w-[400px] lg:w-[640px] h-[82px] bg-white rounded-[6px] skew-x-[30deg] rounded-br-none absolute top-0"></div>

      <div className="w-full absolute top-[24px] min-w-[375px] h-[368px] min-[1100px]:h-[220px] bg-white pt-[24px] px-[16px]">
        <div className="mx-auto min-[900px]:w-[550px] min-[1100px]:w-[1000px] min-[1400px]:w-[1227px]  min-[1100px]:flex min-[1100px]:justify-between max-w-[1440px]">
          <div className="flex flex-col mr-[30px]">
            <span className="uppercase text-black font-[700] text-[28px] min-[1100px]:text-[44px] leading-[36px] min-[1100px]:leading-[56px] -tracking-[4%]">
              Цифры
            </span>
            <span className="text-black/50 font-[400] text-[14px] leading-[20px] -tracking-[4%]">
              Cентябрь 2022
            </span>
          </div>

          <div className="mt-[40px] min-[1100px]:mt-0 min-[1100px]:w-[900px] flex flex-wrap gap-4 min-[1100px]:gap-0 min-[1100px]:flex-nowrap justify-between">
            <div className="flex flex-col w-[107px]">
              <span className="uppercase text-black/80 font-[400] text-[14px] leading-[20px] tracking-normal">
                Торговой прибыли
              </span>
              <span className="mt-[4px] text-layout-purple font-[500] text-[35px] min-[1100px]:text-[60px] leading-[110%] -tracking-[2%] uppercase slashed-zero">
                2756%
              </span>
            </div>

            <div className="flex flex-col w-[153px]">
              <span className="uppercase text-black/80 font-[400] text-[14px] leading-[20px] tracking-normal">
                фьючерсных и спотовых сделок
              </span>
              <span className="mt-[4px] text-layout-purple font-[500] text-[35px] min-[1100px]:text-[60px] leading-[110%] -tracking-[2%] uppercase slashed-zero">
                67
              </span>
            </div>

            <div className="flex flex-col w-[147px] mt-[32px] min-[900px]:mt-0">
              <span className="uppercase text-black/80 font-[400] text-[14px] leading-[20px] tracking-normal">
                прибыль подписчиков
              </span>
              <span className="mt-[4px] text-layout-purple font-[500] text-[35px] min-[1100px]:text-[60px] leading-[110%] -tracking-[2%] uppercase slashed-zero">
                375000
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
