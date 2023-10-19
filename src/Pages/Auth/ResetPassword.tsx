import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordAPI } from "../../api/authAPI";
import Swal from "sweetalert2";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Resetpassword = () => {
  const navigate = useNavigate();
  const [parent] = useAutoAnimate();
  const schema = yup.object({
    email: yup.string().email().trim().lowercase().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    resetPasswordAPI(data).then((res: any) => {
      if (res) {
        console.log(res)
        Swal.fire({
          icon: "success",
          text: "Go to your gmail",
          showCancelButton: false,
          timer: 3000,
          timerProgressBar: true,
        }).then(() => {
          navigate("/message");
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "An error occured",
          showCancelButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    });
  });
  return (
    <div className="h-[100vh] items-center w-full bg-[#001d23] flex justify-center ">
      <form
        onSubmit={onHandleSubmit}
        className="h-[400px] rounded-md text-slate-400 w-[500px] border mt-10 flex flex-col  items-center bg-white p-10"
      >
        <div className="flex flex-col justify-center items-center ">
          <div className="font-bold text-[25px] capitalize">reset password</div>
          <div className="text-[13px] text-center">
            Forgot your password? No worries! Reset it quickly and easily by
            following the link below. Regain access to your account and continue
            enjoying our services hassle-free. Your security is our priority.
          </div>
        </div>
        <div className=" flex flex-col w-full">
          <div className="h-[40px] w-full flex  justify-center items-center border-b-2 border-[#cecbcb] mt-4">
            <input
              placeholder="Email Address"
              type="email"
              {...register("email")}
              className="h-[100%] w-[100%] outline-none border-none flex 
        "
            />
            <div className="text-[25px] text-[#cecbcb]">
              <AiOutlineMail />
            </div>
          </div>
          <div
            ref={parent}
            className="text-[13px] text-red-400 flex justify-end mt-1"
          >
            {errors.email?.message}
          </div>
        </div>

        {/* button */}

        <button
          type="submit"
          className="hover:bg-[#001d23] bg-emerald-500 transition-all duration-300 h-[50px] w-full mt-5 text-white text-[20px] rounded-md"
        >
          Reset Password
        </button>

        <div className="flex mt-5 small:text-[10px] text-[14px] justify-center items-center">
          <div className="mx-2 ">Remember password?</div>
          <Link
            to="/login"
            className="hover:text-[#7FD096] hover:duration-500 hover:transition-all hover:underline font-bold"
          >
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Resetpassword;
