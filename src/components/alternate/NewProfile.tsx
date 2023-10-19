import { FaCamera } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import dummy from "../../assets/image1.jfif";
import { profileAPI } from "../../api/ProfileAPI";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import LoadingScreen from "../../utils/LoaderScreen";

const NewProfile = () => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);
  const [parent] = useAutoAnimate();
  const [image, setImage] = useState<string>("");
  const [avatar, setAvatar] = useState<any>(dummy);
  const [loading, setLoading] = useState<boolean>(false);

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    const saveImage = URL.createObjectURL(file);
    setImage(file);
    setAvatar(saveImage);
  };

  const model = yup.object({
    name: yup.string().required(),
    phoneNumber: yup.string().required(),
    address: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    const { name, phoneNumber, address } = data;
    const formData = new FormData();

    formData.append("name", name);
    formData.append("phoneNumber", phoneNumber);
    formData.append("address", address);
    formData.append("avatar", image);

    profileAPI(formData, user).then((res) => {
      setLoading(true);
      if (res) {
        Swal.fire({
          title: "Profile Succesfully Created😊",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        }).then(() => {
          setLoading(false);
          navigate("/profile/launch");
        });
      } else {
        navigate("/profile");
        Swal.fire({
          title: "Error Occured While Creating Profile 😢😢",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          icon: "error",
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
      }
    });
  });

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="w-full h-full flex pt-3 justify-center items-center ">
        <form
          className="w-[500px] flex flex-col items-center py-5 px-5 shadow-2xl h-[570px] border mt-[70px]"
          onSubmit={onHandleSubmit}
        >
          <div className="text-[#001d23] font-bold text-[30px]">
            Your Information
          </div>
          <div className="relative w-[250px]">
            <img
              className="h-[250px] w-[250px] rounded-full border-[#001d23] object-cover border-[2px]"
              src={avatar}
            />
            <input
              id="image"
              type="file"
              className="hidden"
              onChange={handleImage}
            />
            <label
              htmlFor="image"
              className="w-[50px] h-[50px] bg-emerald-500 right-5 bottom-5 cursor-pointer flex items-center justify-center text-white absolute rounded-full"
            >
              <FaCamera className="" />
            </label>
          </div>
          <div className="w-full my-3 flex justify-between">
            <div className="w-[48%] ">
              <p className="capitalize">Name</p>
              <input
                type="text"
                placeholder="enter your name"
                className="w-full pl-2 text-[12px] border h-[40px] outline-none"
                {...register("name")}
              />
              <div ref={parent} className="text-rose-400 text-[13px]">
                {errors?.name?.message}
              </div>
            </div>
            <div className="w-[48%]">
              <p className="capitalize">phone number</p>
              <input
                type="text"
                placeholder="telephone"
                className="w-full pl-2 border text-[12px] h-[40px] outline-none"
                {...register("phoneNumber")}
              />
              <div
                ref={parent}
                className="text-rose-400 flex w-full justify-end text-[13px]"
              >
                {errors?.phoneNumber?.message}
              </div>
            </div>
          </div>
          <div className="w-full my-2">
            <input
              type="text"
              placeholder="enter your address"
              className="w-full pl-2 border h-[40px] text-[12px] outline-none"
              {...register("address")}
            />
            <div
              ref={parent}
              className="text-rose-400 flex w-full justify-center text-[13px]"
            >
              {errors?.address?.message}
            </div>
          </div>
          <button
            className="capitalize w-full py-3 bg-emerald-500 text-white font-bold hover:bg-[#001d23] transition-all duration-500"
            type="submit"
          >
            create profile
          </button>
        </form>
      </div>
    </>
  );
};

export default NewProfile;
