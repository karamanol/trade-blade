import { cardsData } from "../data/cardsData";
import Card from "./Card";

function Trades() {
  return (
    <section
      id="trades"
      className="w-full h-[413px] pl-[16px] min-[900px]:pl-[80px]">
      <div className="mt-[48px] min-[900px]:mt-[96px]">
        <span className="font-[700] text-[28px] min-[900px]:text-[44px] leading-[36px] min-[900px]:leading-[56px] -tracking-[4%] text-white uppercase">
          Прошедшие сделки
        </span>
        <div className="flex items-center gap-[4px]">
          <div className="size-[7px] bg-[#35FF9E] rounded-full"></div>
          <span className="text-[#35FF9E] font-[400] text-[14px] leading-[20px] -tracking-[4%]">
            Онлайн
          </span>
        </div>
      </div>

      <div className="mt-[24px] flex gap-[8px] min-[900px]:gap-[20px] overflow-x-scroll pb-[16px] mb-[53px] min-[900px]:mb-[118px]">
        {cardsData.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </section>
  );
}

export default Trades;
