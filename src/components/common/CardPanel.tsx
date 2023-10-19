import { FC } from "react";

interface iProps {
  imgProps: string;
  title: string;
  describe: string;
}

const CardPanel: FC<iProps> = ({ imgProps, title, describe }) => {
  return (
    <>
      <div className="w-[48%] big:w-[30%] smallTab:h-[150px] minMedium:w-[40%] tablet:w-[100%] m-3 h-[130px] hover:border-r-emerald-500 border-r-[5px] border-b-[5px] border-transparent cursor-pointer hover:border-b-emerald-500 transition-all flex items-center duration-500 rounded-md shadow-2xl bg-white">
        <img src={imgProps} className="smallTab:w-[30%]"/>
        <div className="ml-3">
          <p className="text-[#001D23] smallTab:text-[12px] font-bold big:text-[16px] text-[20px]">
            {title}
          </p>
          <span className="text-slate-500 big:text-[13px] smallTab:text-[10px]">{describe}</span>
        </div>
      </div>
    </>
  );
};

export default CardPanel;
