import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useNavigate } from "react-router-dom";
import { updateProfileAPI } from "../../api/ProfileAPI";
import { useSelector } from "react-redux";

const Settings = () => {

  const navigate= useNavigate()

  const user= useSelector((state:any)=> state.user)



  const [parent] = useAutoAnimate();
  const schema = yup.object({
    phoneNumber: yup.string().required(),
    address: yup.string().required(),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit(async (data) => {
    
    updateProfileAPI(data, user).then((res)=>{
      
      navigate("/")
    })

  });

  const validateInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };



  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <form
          onSubmit={onHandleSubmit}
          className="w-[500px] flex flex-col mt-24 items-center py-5 px-5 shadow-2xl h-[340px] border"
        >
          <div className="text-[#001d23] font-bold text-[30px]">
            Update Your Data
          </div>
          <div className="w-full my-3 flex justify-between">
            <div className="w-full">
              <p className="capitalize">phone number</p>
              <input
                type="text"
                onInput={validateInput}
                placeholder="telephone"
                {...register("phoneNumber")}
                className="w-full pl-2 border h-[40px]"
              />
              <div
                ref={parent}
                className="text-rose-400 flex w-full justify-end text-[13px]"
              >
                {errors.phoneNumber?.message}
              </div>
            </div>
          </div>
          <div className="w-full my-2">
            <p className="capitalize">address</p>
            <input
              type="text"
              placeholder="enter your address"
              {...register("address")}
              className="w-full pl-2 border h-[40px]"
            />
            <div
              ref={parent}
              className="text-rose-400 flex w-full justify-end text-[13px]"
            >
              {errors.address?.message}
            </div>
          </div>
          <button
            type="submit"
            className="capitalize w-full py-3 bg-emerald-500 text-white font-bold hover:bg-[#001d23] transition-all duration-500"
          >
            update profile
          </button>
        </form>
      </div>
    </>
  );
};

export default Settings;
