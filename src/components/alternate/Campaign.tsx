import dummy from "../../assets/dummy-image.jpg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { createCampaign } from "../../api/CampaignAPI";
import { useSelector } from "react-redux";
import { FaCamera } from "react-icons/fa";
import LoadingScreen from "../../utils/LoaderScreen";

const Campaign = () => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);

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
    title: yup.string().required(),
    amountNeeded: yup.number().required(),
    motivation: yup.string().required(),
    description: yup.string().required(),
    category: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(model),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    const { title, amountNeeded, motivation, description, category } = data;
    
    setLoading(true);
    const formdata: any = new FormData();
    formdata.append("title", title);
    formdata.append("motivation", motivation);
    formdata.append("amountNeeded", amountNeeded);
    formdata.append("description", description);
    formdata.append("category", category);
    formdata.append("image", image);

    createCampaign(formdata, user).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: "success",
          text: "Launched Project",
          timer: 3000,
          showCancelButton: false,
          timerProgressBar: true,
        }).then(() => {
          setLoading(false);
          navigate("/profile/projects");
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
      <form
        onSubmit={onHandleSubmit}
        className="h-full w-full flex justify-between  p-5 smallTab:flex-col pt-[90px]"
      >
        <div className="w-[45%] h-[550px] smallTab:h-[320px] flex flex-col smallTab:w-full ">
          <div
            className="h-[400px] relative smallTab:h-[250px] w-full border overflow-hidden flex justify-center items-center"
            style={{
              boxShadow: "0px 0px 10px 0px rgba(237,230,230,0.75)",
              WebkitBoxShadow: "0px 0px 10px 0px rgba(237,230,230,0.75)",
            }}
          >
            <label
              htmlFor="image"
              className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:bg-[#001d23] hover:text-white transition-all duration-500 bg-emerald-500 text-[30px] absolute bottom-0 right-0"
            >
              <FaCamera />
            </label>
            <label htmlFor="image" className="h-full border overflow-hidden">
              <input
                type="file"
                id="image"
                className="hidden"
                onChange={handleImage}
              />
              <img src={avatar} className="object-cover w-full h-full" />
            </label>
          </div>

          <select
            {...register("category")}
            className="mt-5 border w-full h-[40px] outline-none rounded-md"
          >
            <option>Select Category</option>
            <option>Solar Energy</option>
            <option>Geothermal Energy</option>
            <option>Wind Energy</option>
            <option>Biomass Energy</option>
            <option>Hydroelectric Power</option>
            <option>Hydropower</option>
          </select>
        </div>
        <div
          className="h-[550px] w-[48%] border p-3 smallTab:flex smallTab:flex-col smallTab:items-center smallTab:w-full"
          style={{
            boxShadow: "0px 0px 10px 0px rgba(237,230,230,0.75)",
            WebkitBoxShadow: "0px 0px 10px 0px rgba(237,230,230,0.75)",
          }}
        >
          <div className="h-[60px] w-full flex justify-center items-center border rounded-md p-2 my-2">
            <textarea
              className="h-full w-full resize-none outline-none border-none"
              placeholder="Title"
              {...register("title")}
            />
          </div>
          <div className="h-[60px] w-full flex justify-center items-center border rounded-md p-2 my-2">
            <input
              className="h-full w-full resize-none outline-none border-none"
              placeholder="₦ 1000.00"
              {...register("amountNeeded")}
            />
          </div>
          <div className="h-[120px] w-full flex justify-center items-center border rounded-md p-2 my-2">
            <textarea
              className="h-full w-full resize-none outline-none border-none"
              placeholder="Motivation"
              {...register("motivation")}
            />
          </div>
          <div className="h-[200px] w-full flex justify-center items-center border rounded-md p-2 my-2">
            <textarea
              className="h-full w-full resize-none outline-none border-none"
              placeholder="Description"
              {...register("description")}
            />
          </div>
          <div className="w-fullborder flex justify-end pr-3 items-center pt-1">
            <button
              className="py-2 px-10 w-[200px] bg-emerald-500 hover:bg-[#001d23] transition-all duration-500 text-white"
              type="submit"
            >
              Launch
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Campaign;

// box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
// -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
// -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
