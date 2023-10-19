import img1 from "../../assets/hero-one-big.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="w-full tablet:mt-[550px] smallTab:mt-[670px] minMedium:mt-20 mt-20 medium:mt-0 big:mt-0 py-10 h-[100vh] flex justify-center items-center bg-gradient-to-b from-white via-green-100 to-green-200">
        <div className="w-[85%] tablet:flex-col-reverse flex justify-between h-[100%]">
          <img
            src={img1}
            className="w-[45%] minMedium:h-[80%] tablet:h-[60%] minMedium:rounded-2xl tablet:w-full  first-letter: object-cover h-[100%] border"
          />
          <div className="w-[600px] tablet:w-full ml-3 flex-col flex justify-center">
            <div className="text-[#001D23]">
              <p className="text-[40px] font-bold ">Why Choose</p>
              <span className="text-[16px]">
                <span className="font-bold text-[#001D23]">
                  eco
                  <span className="text-emerald-500">Funds</span>
                </span>
              </span>
            </div>
            <span className="my-5 w-[80%] smallTab:text-[13px] smallTab:leading-6 text-[#001D23] leading-8 minMedium:w-[100%]">
              Choosing our green energy donation platform is a powerful way to
              support the transition to clean and sustainable energy sources.We
              believe in transparency and accountability, ensuring that your
              donations are channeled into projects with proven environmental
              benefits.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
