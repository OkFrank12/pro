import { AiOutlineMail } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { AiOutlineKey } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signInAPI, verifyAPI } from "../../api/authAPI";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { onUserState } from "../../global/globalState";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import LoadingScreen from "../../utils/LoaderScreen";

const Login = () => {
  const [parent] = useAutoAnimate();
  const navigate = useNavigate();
  const { token } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const schema = yup.object({
    email: yup.string().email().trim().lowercase().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    console.log(data);
    setLoading(true);
    signInAPI(data).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: "success",
          text: `Welcome 💡💡`,
          timer: 3000,
          showCancelButton: false,
        }).then(() => {
          setLoading(false);
          const decode: any = jwtDecode(res);
          dispatch(onUserState(decode.id));
          navigate("/profile");
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

  useEffect(() => {
    if (token) {
      verifyAPI(token);
    }
  }, []);
  return (
    <>
      {loading && <LoadingScreen />}

      <div className="h-[100vh] items-center bg-[#001d23] text-slate-400  w-full flex justify-center ">
        {/* main */}
        <form
          onSubmit={onHandleSubmit}
          className="h-[530px] rounded-md w-[500px]   border my-5 flex flex-col  items-center bg-white p-10"
        >
          {/* title */}
          <div className="flex flex-col justify-center items-center ">
            <div className="font-bold text-[20px]">
              Log in
              <span className="text-[30px]">
                <span className="text-emerald-500"> Eco</span>Funds
              </span>
            </div>
            <div className="text-[13px] text-center text-slate-400">
              Welcome back! Log in now to access your account and continue your
              personalized experience with us. Your journey awaits behind a
              simple login.
            </div>
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
                type="password"
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
          <span className="text-[12px] text-rose-400 capitalize flex mt-3 w-full">
            <Link to={`/reset-password`}>forgot password</Link>
          </span>
        <button
          type="submit"
          className="hover:bg-[#001d23] bg-emerald-500 transition-all duration-300 font-bold h-[50px] w-full mt-5 text-white text-[20px] rounded-md "

       
        >
          Login
        </button>

        {/* social */}

        <div className="mt-3 flex  justify-between items-center  w-full ">
          <hr className="w-[90px] small:w-[35px] text-black" />
          <div className=" text-[15px] small:text-[10px]">
            Or Login With Google
          </div>
          <div className="bg-rose-400  rounded-[50%] text-white flex justify-center small:h-[30px] h-[40px] w-[40px] items-center small:w-[30px] hover:cursor-pointer">
            <BsGoogle />
          </div>
          <hr className="w-[90px] small:w-[35px]" />
        </div>

          <div className="flex mt-5 small:text-[10px] text-[14px] justify-center items-center">
            <div className="mx-2 ">Already have an account?</div>
            <Link
              to="/register"
              className="hover:text-[#7FD096] hover:duration-500 hover:transition-all hover:underline font-bold"
            >
              Register here
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
