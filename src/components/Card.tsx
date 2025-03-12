import { CardType } from "../data/cardsData";

function Card({ card }: { card: CardType }) {
  return (
    <article className="w-[299px] min-w-[299px] h-[208px] bg-layout-purple rounded-[4px] [clip-path:polygon(85%_0,100%_20%,100%_100%,0_100%,0_0)] relative pt-[16px] px-[16px] pb-[13px]">
      <svg
        className=" absolute top-[8px] left-[188px]"
        width="111"
        height="161"
        viewBox="0 0 111 161"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.15">
          <path
            d="M63.4329 116.829L4.96763e-05 7.32207L31.5081 32.6069L71.7832 102.365L63.4329 116.829Z"
            fill="#000001"
          />
          <path
            d="M122.979 50.5303L59.8598 160.218L66.0031 120.289L106.278 50.5303L122.979 50.5303Z"
            fill="#000001"
          />
          <path
            d="M74.0579 94.1007L97.9159 52.7775H50.2L74.0579 94.1007Z"
            fill="#000001"
          />
          <path
            d="M36.1579 32.8049L162.71 32.6237L125.058 47.2681L44.5082 47.2681L36.1579 32.8049Z"
            fill="#000001"
          />
        </g>
      </svg>

      <div className="flex flex-col">
        <span className="font-[500] text-[20px] leading-[28px] -tracking-[4%] text-white uppercase">
          {card.pairName}
        </span>
        <span className="font-[500] text-[14px] leading-[18px] -tracking-[2%] text-white/40 mt-[2px]">
          {card.description}
        </span>
      </div>

      <div className="mt-[48px] flex flex-col">
        <span className="font-[500] text-[14px] leading-[18px] -tracking-[2%] text-white/70 uppercase">
          Прибыль
        </span>
        <span className="mt-[2px] font-[500] text-[28px] leading-[36px] -tracking-[2%] uppercase slashed-zero text-[#35FF9E]">
          {card.revenue}&uarr;
        </span>
      </div>

      <div className="mt-[9px] flex justify-between">
        <span className="font-[500] text-[14px] leading-[18px] -tracking-[2%] text-white/70">
          {card.footerLeft}
        </span>
        <span className="font-[400] text-[14px] leading-[18px] -tracking-[2%] text-white/70">
          {card.footerRight}
        </span>
      </div>
    </article>
  );
}

export default Card;
