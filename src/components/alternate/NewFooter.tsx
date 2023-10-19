import { HiLightBulb } from "react-icons/hi";

const NewFooter = () => {
  return (
    <>
      <div className="w-full h-[400px] py-5 flex justify-center flex-col  bg-[#001d23] px-9 ">
        <div className="text-white items-center flex flex-col px-4 border-t-[1px] ">
          <span className="flex items-center text-white font-bold  w-full justify-center mt-[40px]">
            <HiLightBulb className="text-[80px] tablet:text-[50px]" />
            <span className="text-[60px] tablet:text-[40px]">
              eco<span className="text-emerald-500">Funds</span>
            </span>
          </span>
          <span className="w-[60%] minMedium:w-[100%] text-center">
            EcoFunds is your gateway to a sustainable future. As a green energy
            donation platform, we empower individuals and organizations to drive
            positive environmental change.
          </span>
        </div>
      </div>
    </>
  );
};

export default NewFooter;
