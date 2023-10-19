import pic from "../../assets/EcoFunds.webp";
import { BsWalletFill } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { donateMoney, donateMoneyWallet } from "../Api/Paystack";
import Swal from "sweetalert2";

const CheckOut = () => {
  // const {id} = useParams()
  const model = yup.object({
    email: yup.string().required(),
    note: yup.string().required(),
    name: yup.string().required(),
    amount: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  //   const onSubmit = handleSubmit(async (data) => {
  //     donateMoneyWallet({
  //       email: data.email,
  //       note: data.note,
  //       name: data.name,
  //       amount: data.amount,

  //       // const {email, note, name} = data
  //     }).then(() => {
  //       if (data) {
  //         Swal.fire({
  //           icon: "success",
  //           title: "Payment",
  //           text: "payment successful",
  //           timerProgressBar: true,
  //           timer: 3000,
  //         });
  //       } else {
  //         Swal.fire({
  //           icon: "error",
  //           title: "Payment",
  //           text: "payment unsuccessful",
  //           timerProgressBar: true,
  //           timer: 3000,
  //         });
  //       }
  //     });
  //   });

  const change = (numb: number) => {
    const w = numb.toString();
    const x = w.split(".");
    x[0] = x[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return x.join(".");
  };
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const validateInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };

  const [state, setState] = useState<number | any>(0);
  const [changer, setChanger] = useState<any>();
  const [stateUrl, setStateUrl] = useState<string>("");
  const [showing, setShowing] = useState<boolean>(false);
  const [email, setEmail] = useState<string | any>("");
  const [note, setNote] = useState<string | any>("");
  const [name, setName] = useState<string | any>("");

  useEffect(() => {
    if (stateUrl === "") {
      return;
    } else {
      window.location.assign(stateUrl);
    }
  }, [stateUrl]);

  const amount = parseInt(state);

  return (
    <>
      <div className="w-full bg-[#FBF8F6] flex items-center justify-center small:bg-white">
        <div
          className="w-[600px] min-h-[400px] rounded-3xl bg-white p-3 mt-[50px] mb-[40px] small:w-[100%]
        small:rounded-none small:m-0"
          style={{
            boxShadow:
              "rgba(255, 255, 255, 1)2px 2px 0px -14px, rgba(0, 0, 0, 0.3) 2px 2px 0px -14px",
          }}
        >
          {/* image part */}
          <div className="flex">
            <img
              src=""
              alt=""
              className="w-[150px] h-[100px] rounded-md border object-cover small:hidden"
            />
            <div className="ml-[10px] flex  justify-center flex-col">
              <div className=" text-[17px]">
                You're supporting{" "}
                <span className="font-bold">Education Fund</span>
              </div>
              <div className="text-[15px] font-light">
                Your donation will benefit{" "}
                <span className="font-bold">Abeg.org</span>{" "}
              </div>
            </div>
          </div>
          {/* input part */}
          <div className="mt-[30px]">
            <div className="font-bold">Enter your donation</div>
            <div className="w-full h-[80px] pl-[10px]  pr-[10px] border rounded-md outline-none mt-[5px] flex items-center">
              <div className="flex flex-col">
                <div className="font-bold text-[20px] small:text-[17px]">₦</div>
                <div className="font-bold text-[18px] small:text-[16px]">
                  NAIRA
                </div>
              </div>
              <input
                type="text"
                onInput={validateInput}
                value={state}
                maxLength={7}
                className="h-[100%] w-[85%]  pl-[20px] outline-none text-[30px] font-bold text-right appearance-none focus:border-indigo-500
        "
                onChange={(e: any) => {
                  setState(e.target.value);
                }}
                // {...register("amount")}
              />
              <div className="font-bold text-[30px] small:text-[20px]">
                <span className="mb-[10px]"> .</span>00
              </div>
            </div>

            <div className="mt-[10px]">
              <div className="text-[18px] font-medium small:text-[15px]">
                Email
              </div>
              <input
                placeholder="put email"
                className="w-full h-[40px] border rounded-md outline-none pl-[10px]"
                // {...register("note")}
                value={email}
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
              />
              {errors.email?.message && (
                <div className="text-[12px] text-red-500">enter this field</div>
              )}
            </div>
          </div>

          <hr className="mt-[30px]" />
          {/* payment method */}
          <div className="mt-[20px]">
            <div className="font-semibold text-[18px]">Payment methods</div>
            <div className="w-full h-[180px] border rounded-md mt-[20px] ">
              <div className="flex items-center w-full h-[90px] border-b pl-[30px] hover:cursor-pointer duration-300 ">
                <input
                  type="radio"
                  name="payment"
                  value="Paystack"
                  className="hover:cursor-pointer"
                  onChange={(e: any) => {
                    setChanger(e.target.value);
                  }}
                  onClick={() => {
                    setToggle(false);
                  }}
                />
                <img src={pic} alt="" className="w-[30px] h-[30px] ml-[20px]" />
                <div className="text-[20px] font-normal ml-[20px]">
                  Paystack
                </div>
              </div>

              <div className="flex items-center w-full h-[90px] -b pl-[30px] hover:cursor-pointer duration-300 ">
                <input
                  type="radio"
                  value="Wallet"
                  name="payment"
                  className="hover:cursor-pointer"
                  onChange={(e: any) => {
                    setChanger(e.target.value);
                  }}
                  onClick={() => {
                    onToggle();
                  }}
                />
                <BsWalletFill className="text-[30px] ml-[20px]" />
                <div className="text-[20px] font-normal ml-[20px]">Wallet</div>
              </div>
            </div>
          </div>

          {/* form */}
          {toggle ? (
            <form
            // onSubmit={onSubmit}
            >
              <div>
                <div className="text-[18px] font-medium small:text-[15px]">
                  name
                </div>
                <input
                  placeholder="write how you feel about this"
                  className="w-full h-[40px] border rounded-md outline-none pl-[10px]"
                  // {...register("note")}
                  value={name}
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                />
                {errors.name?.message && (
                  <div className="text-[12px] text-red-500">
                    enter this field
                  </div>
                )}
              </div>
              <div className="mt-[10px]">
                <div className="text-[18px] font-medium small:text-[15px]">
                  note
                </div>
                <textarea
                  placeholder="write how you feel about this"
                  className="w-full h-[40px] border rounded-md outline-none pl-[10px]"
                  // {...register("note")}
                  value={note}
                  onChange={(e: any) => {
                    setNote(e.target.value);
                  }}
                />
                {errors.note?.message && (
                  <div className="text-[12px] text-red-500">
                    enter this field
                  </div>
                )}
              </div>
            </form>
          ) : null}
          <hr className="mt-[30px]" />

          <div className="font-bold text-[20px] mt-[20px]">Your donation</div>
          <div className="flex justify-between mt-[20px] items-center">
            <div className="font-medium text-[17px]">Your donation</div>
            <div className="flex justify-end font-bold text-[20px] ">
              {" "}
              ₦{change(state)}.00
            </div>
          </div>
          {/* button */}
          <div className="mt-[20px]">
            {changer === "Paystack" && (
              <button
                className="w-full h-[60px] rounded-md hover:cursor-pointer
        duration-300 bg-[dodgerblue] text-white text-[20px] flex justify-center items-center"
                // onClick={() => {
                //   setShowing(true);
                //   donateMoney({ amount, email })
                //     .then((res) => {
                //       setStateUrl(res.authorization_url);
                //     })
                //     .then(() => {
                //       setShowing(false);
                //     });
                // }}
              >
                Paystack
              </button>
            )}
            {changer === "Wallet" && (
              <button
                className="w-full h-[60px] rounded-md hover:cursor-pointer mt-1
          duration-300 bg-black text-white text-[20px] flex justify-center items-center"
                // onClick={() => {
                //   donateMoneyWallet({ amount, email, note, name }).then(
                //     (res: any) => {
                //       console.log(res)
                //       if (res) {
                //         Swal.fire({
                //           icon: "success",
                //           title: "Payment",
                //           text: "payment successful",
                //           timerProgressBar: true,
                //           timer: 3000,
                //         });
                //       } else {
                //         Swal.fire({
                //           icon: "error",
                //           title: "Payment",
                //           text: "payment unsuccessful",
                //           timerProgressBar: true,
                //           timer: 3000,
                //         });
                //       }
                //     }
                //   );
                // }}
                type="reset"
              >
                Wallet
              </button>
            )}
          </div>

          <div className="mt-[20px] font-light ">
            By continuing, you agree with{" "}
            <span className="font-medium underline cursor-pointer">
              Abeg terms
            </span>{" "}
            and{" "}
            <span className="font-medium underline cursor-pointer">
              privacy notice.
            </span>
            <br />
            Learn more about{" "}
            <span className="font-medium underline cursor-pointer">
              pricing and fees.
            </span>
          </div>

          <hr className="mt-[30px]" />

          <div className="flex justify-center mt-[20px] pb-2">
            <div>
              <AiOutlineSafety className="text-[30px]" />
            </div>
            <div className="ml-[10px]">
              <div className="mb-[5px] font-semibold text-[16px]">
                Abeg protects your donation
              </div>
              <div className="text-[13px] font-medium">
                We guarantee you a full refund for up to a year in the rare case
                that fraud occurs. See our{" "}
                <span className="font-medium underline cursor-pointer">
                  Abeg Giving Guarantee.
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
