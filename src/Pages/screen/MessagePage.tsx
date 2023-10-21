import { HiLightBulb } from "react-icons/hi";

const MessagePage = () => {
  return (
    <div>
      <div className="w-full tablet:text-[13px] tinyTab:text-[11px] min-h-[100vh] items-center leading-10 flex-col text-white flex p-5 bg-[#001d23]">
        <span className="flex items-center text-white font-bold  w-full justify-center mt-[40px]">
          <HiLightBulb className="text-[80px] tablet:text-[50px]" />
          <span className="text-[60px] tablet:text-[40px]">
            eco<span className="text-emerald-500">Funds</span>
          </span>
        </span>
        <div className="w-[80%] smallTab:w-full flex-col items-center text-center flex justify-center">
          <a href="https://mail.google.com">
            <button className="px-10 smallTab:px-5 smallTab:py-2 py-4 rounded hover:rounded-full bg-emerald-500">
              Please Verify your account
            </button>
          </a>
          <p className="py-3 w-[100%]">
            We're thrilled to have you as a part of our community, dedicated to
            supporting a sustainable and eco-friendly future. To ensure you get
            the best out of your experience, we kindly request you to verify
            your account as soon as possible.
          </p>
          <p className="uppercase font-bold">
            Verifying your account unlocks a world of benefits
          </p>
          <p>
            Don't miss out on these incredible opportunities! Simply log in to
            your account, navigate to the verification section, and follow the
            easy steps to confirm your identity. Thank you for joining us on
            this journey toward a greener future. Your contribution makes a
            significant impact. Get verified today and let's make a sustainable
            world a reality together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
