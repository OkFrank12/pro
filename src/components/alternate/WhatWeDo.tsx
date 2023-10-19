import img6 from "../../assets/Screenshot 2023-10-18 204841.png";
import CardPanel from "../common/CardPanel";

const WhatWeDo = () => {
  return (
    <>
      <div className="w-full min-h-[550px] flex justify-center items-center">
        <div className="w-[85%] flex justify-center flex-col h-full">
          <div className="text-[#001D23]">
            <p className="text-[40px] font-bold ">What We Do</p>
            <span className="text-[16px]">
              with
              <span className="ml-2 font-bold text-[#001D23]">
                eco
                <span className="text-emerald-500">Funds</span>
              </span>
            </span>
          </div>

          <div className="flex mt-5 justify-center flex-wrap w-full h-[330px]">
            <CardPanel
              imgProps={img6}
              title="Solar Energy"
              describe="Solar Thermal Systems: Use sunlight to heat water or air for various applications"
            />
            <CardPanel
              imgProps={img6}
              title="Wind Energy"
              describe="Wind Turbines: Convert kinetic energy from the wind into electricity."
            />
            <CardPanel
              imgProps={img6}
              title="Hydroelectric Power"
              describe="Hydroelectric Dams: Generate electricity by harnessing the energy of flowing water."
            />
            <CardPanel
              imgProps={img6}
              title="Geothermal Energy"
              describe="Geothermal Power Plants: Utilize heat from the Earth's core to produce electricity and provide heating."
            />
            <CardPanel
              imgProps={img6}
              title="Biomass Energy"
              describe="Burn organic materials like wood, agricultural residues, and waste to produce energy."
            />
            <CardPanel
              imgProps={img6}
              title="Hydropower"
              describe="Small-Scale Hydropower: Micro-hydro and mini-hydro systems for local electricity generation."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
