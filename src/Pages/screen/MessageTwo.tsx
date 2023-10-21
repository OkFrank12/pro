import { HiLightBulb } from "react-icons/hi";

const MessageTwo = () => {
  return (
    <div>
      <div className="w-full tablet:text-[13px] tinyTab:text-[11px] min-h-[100vh] items-center leading-10 flex-col text-white flex p-5 bg-[#001d23]">
        <span className="flex items-center text-white font-bold  w-full justify-center mt-[40px]">
          <HiLightBulb className="text-[80px] tablet:text-[50px]" />
          <span className="text-[60px] tablet:text-[40px]">
            eco<span className="text-emerald-500">Funds</span>
          </span>
        </span>
        <div className="w-[80%] flex-col items-center text-center flex justify-center">
          <a href="https://mail.google.com">
            <button className="px-10 py-4 smallTab:px-5 smallTab:py-2 rounded hover:rounded-full bg-emerald-500">
              click here to reset
            </button>
          </a>
          <p className="py-3 w-[90%] smallTab:w-full">
            To reset your password, please click the button above to verify your
            identity
          </p>
          <p>
            By clicking the button, you'll be directed to the password change
            password process, ensuring your account's security. If you didn't
            request this, please disregard this message.
          </p>
          <p>
            Thank you for choosing us. <span className="text-[50px]">😉✌️✌️</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageTwo;
