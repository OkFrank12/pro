import { AiOutlineMail } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { AiOutlineKey } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerAPI } from "../../api/authAPI";
import Swal from "sweetalert2";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import LoadingScreen from "../../utils/LoaderScreen";

const Register = () => {
  const [parent] = useAutoAnimate();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const schema = yup.object({
    email: yup.string().email().trim().lowercase().required(),
    password: yup.string().required(),
    confirm: yup
      .string()
      .oneOf([yup.ref("password")])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    setLoading(true);
    registerAPI(data).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: "success",
          text: "A Verification Mail has been sent to you",
          timer: 3000,
          showCancelButton: false,
        }).then(() => {
          setLoading(false);
          navigate("/message");
        });
      } else {
        Swal.fire({
          icon: "warning",
          text: "A Problem occured",
          timer: 3000,
          showCancelButton: false,
        });
      }
    });
  });
  return (
    <>
      {loading && <LoadingScreen />}
      <div className="h-[100vh] items-center bg-[#001d23]  text-slate-400  w-full flex justify-center ">
        <form
          onSubmit={onHandleSubmit}
          className="min-h-[550px]   rounded-md w-[500px]   border my-5 flex flex-col  items-center bg-white p-10"
        >
          {/* title */}
          <div className="flex flex-col justify-center items-center ">
            <div className="font-bold text-[20px]">
              Register with{" "}
              <span className="text-[30px]">
                <span className="text-emerald-500">Eco</span>Funds
              </span>
            </div>
            <div className="text-[13px] text-center text-slate-400">
              Elevate your experience with us - registering not only provides
              you with personalized content and exclusive offers but also grants
              you a secure and convenient access to our community. Take the
              first step towards an enhanced journey with us by signing up
              today.
            </div>
            <p className="text-center text-rose-400">
              Please password should be between 6 and 20 characters{" "}
            </p>
          </div>
          <div className=" flex flex-col mt-5 w-full">
            <div className="h-[40px] w-full flex  justify-center items-center border-b-2 border-[#cecbcb] mt-4">
              <input
                placeholder="Email Address"
                {...register("email")}
                className="h-[100%] w-[100%] outline-none border-none flex 
        "
              />
              <div className="text-[25px] text-[#cecbcb]">
                <AiOutlineMail />
              </div>
            </div>
            <div ref={parent} className="text-rose-400 text-[12px] text-right">
              {errors.email?.message}
            </div>
          </div>
          <div className=" flex mt-5 flex-col w-full">
            <div className="h-[40px] w-full flex  justify-center items-center border-b-2 border-[#cecbcb] mt-4">
              <input
                placeholder="Password"
                {...register("password")}
                className="h-[100%] w-[100%] outline-none border-none flex 
        "
              />
              <div className="text-[25px] text-[#cecbcb]">
                <AiOutlineKey />
              </div>
            </div>
            <div className="text-rose-400 text-[12px]">
              {errors.password?.message}
            </div>
          </div>
          <div className=" flex mt-5 flex-col w-full">
            <div className="h-[40px] w-full flex  justify-center items-center border-b-2 border-[#cecbcb] mt-4">
              <input
                placeholder="Re-Enter Password"
                {...register("confirm")}
                className="h-[100%] w-[100%] outline-none border-none flex 
        "
              />
              <div className="text-[25px] text-[#cecbcb]">
                <AiOutlineKey />
              </div>
            </div>
            <div className="text-rose-400 text-[12px] text-right">
              {errors.confirm?.message}
            </div>
          </div>
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-[#001d23] transition-all duration-300 font-bold h-[50px] w-full mt-5 text-white text-[20px] rounded-md "
          >
            Register
          </button>

          {/* social */}

        <div className="mt-3 flex  justify-between items-center  w-full ">
          <hr className="w-[90px] small:w-[35px] text-black" />
          <div className=" text-[15px] small:text-[10px]">
            Or Register With Google
          </div>
          <div className="bg-rose-400  rounded-[50%] text-white flex justify-center small:h-[30px] h-[40px] w-[40px] items-center small:w-[30px] hover:cursor-pointer">
            <BsGoogle />
          </div>
          <hr className="w-[90px] small:w-[35px]" />
        </div>

          <div className="flex mt-5 small:text-[10px] text-[14px] justify-center items-center">
            <div className="mx-2 ">Already have an account?</div>
            <Link
              to="/login"
              className="hover:text-[#7FD096] hover:duration-500 hover:transition-all hover:underline font-bold"
            >
              Login here
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
