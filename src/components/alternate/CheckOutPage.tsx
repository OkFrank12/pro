import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { useNavigate, useParams } from "react-router-dom";
import { accountPay } from "../../api/CampaignAPI";

const CheckOutPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const validateInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };

  const change = (numb: number) => {
    const w = numb.toString();
    const x = w.split(".");
    x[0] = x[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return x.join(".");
  };

  const [state, setState] = useState<number | any>(0);
  const [email, setEmail] = useState<string | any>("");

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: state * 100,
    publicKey: "pk_test_5a0581a5d3a5e4eff176456546f8e4b3f32d2d01",
  };

  const onSuccess: any = (reference: any) => {
    accountPay(id, state).then((res: any) => {
      console.log(res)
    });
    console.log(reference);
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <>
      <div className="w-full flex items-center justify-center h-[100vh] bg-[#001d23]">
        <div className="w-[500px] py-5 px-3 rounded-md min-h-[500px] bg-white">
          <p className="text-[20px] font-bold text-[#001d23]">Check-Out</p>
          <div className="w-full my-2">
            <p className="capitalize text-[13px]">donate funds</p>
            <div className="flex font-bold text-[30px] border-t-[1px] items-center border-b-[1px]">
              <span>₦</span>
              <input
                type="text"
                className="h-[100%] w-[85%] pl-[20px] outline-none text-[30px] text-right appearance-none focus:border-indigo-500"
                onInput={validateInput}
                onChange={(e: any) => {
                  setState(e.target.value);
                }}
                maxLength={7}
              />
              <div className="font-bold">
                <span className="mb-[10px]"> .</span>00
              </div>
            </div>
            <div className="w-full my-5">
              <p className="capitalize text-[13px]">email address</p>
              <input
                type="email"
                className="w-full h-[50px] outline-none pl-2 border"
                placeholder="@gmail.com"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="w-full my-5">
              <p className="capitalize mb-2 text-[13px]">
                you are paying with PayStack
              </p>
              <div className="w-full h-[50px] items-center flex justify-between border-b-[1px] border-t-[1px]">
                <div>
                  <input
                    type="radio"
                    className="outline-none mr-3 pl-2 border hover:cursor-pointer duration-500 transition-all"
                    placeholder="@gmail.com"
                  />
                  <span className="text-[#001d23] font-bold">PayStack</span>
                </div>
              </div>
              <div className="border-t-[1px] h-[50px] justify-between items-center capitalize text-[#001d23] font-bold flex my-4 w-full">
                <span>your donation</span>
                <div className="flex justify-end font-bold text-[20px] ">
                  ₦{change(state)}.00
                </div>
              </div>
              <button
                className="hover:bg-[#001d23] transition-all duration-300 bg-emerald-500 text-white font-bold w-full h-[50px]"
                onClick={() => {
                  initializePayment(onSuccess, onClose);
                  navigate("/");
                }}
              >
                Pay in with PayStack
              </button>
              <span className="text-slate-500 text-[13px] text-center flex justify-center mt-3">
                Your commitment to environmental conservation is truly
                commendable, and we are immensely thankful for your invaluable
                support. Together, we can make a significant impact on our
                world.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
