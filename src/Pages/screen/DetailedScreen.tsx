import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import PersonProfile from "../../components/alternate/PersonProfile";
import { Link, useParams } from "react-router-dom";
import { useOneProject } from "../../hooks/customHooks";

const DetailedScreen = () => {
  const { id } = useParams();
  console.log(id);

  const { data } = useOneProject(id!);

  console.log("This is Data: ", data);

  // console.log(props?.catego)
  return (
    <>
      <div className="w-[90%] min-h-[100vh] bg-white relative flex justify-center items-center">
        <div
          key={data?._id}
          className="w-[85%] flex timeLine:flex-col justify-between"
        >
          <div className="timeLine:w-full w-[48%] h-full ">
            <div className="w-full tablet:h-[300px] timeLine:w-full h-[350px]">
              <img
                src={data?.image}
                alt=""
                className="w-full object-cover border h-full"
              />
            </div>
            <div className="  mt-[50px]">
              <div className="my-[10px] minMedium:text-[15px] text-[25px] font-bold">
                Motivation
              </div>
              <div className="text-[13px]">{data?.motivation}</div>
            </div>
            <div className="flex items-center my-5">
              <div className="mr-3">Share:</div>
              <div className="flex w-[100px] justify-between text-[20px]">
                <BsFacebook />
                <AiOutlineTwitter />
                <AiOutlineInstagram />
                <AiFillLinkedin />
              </div>
            </div>
          </div>
          <div className="w-[48%] timeLine:w-full h-full">
            <button className="px-6 py-2 tablet:text-[13px] bg-emerald-500 text-white capitalize font-semibold">
              {data?.category}
            </button>
            <div className="text-[30px] tablet:text-[20px] minMedium:text-[23px] font-bold my-[20px]">
              {data?.title}
            </div>
            <div className="flex items-center text-[13px]">
              <PersonProfile />
            </div>
            <div className="  my-[25px]">
              <div className="my-[10px] tablet:text-[18px] minMedium:text-[23px] text-[25px] font-bold">
                Description
              </div>
              <div className="minMedium:text-[13px] tablet:text-[12px]">
                {data?.description}
              </div>
            </div>
            <div className="flex w-full tablet:text-[12px] my-[30px] ">
              <div className="w-[140px] mr-5 h-[70px] px-[20px] tablet:w-[100px] tablet:h-[40px] border flex justify-center items-center flex-col">
                <div className="font-bold">₦{data?.amountNeeded}</div>
                <div>Goal</div>
              </div>
              <div className="w-[140px] h-[70px] px-[20px] tablet:w-[100px] tablet:h-[40px] border flex justify-center items-center flex-col">
                <div className="font-bold">₦{data?.amountRaised}</div>
                <div>Raised</div>
              </div>
            </div>
            <div className="w-[200px] h-[50px] bg-green-500 flex justify-center shadow-md items-center">
              <Link to={`/check-out-page/${data?._id}`}>CheckOut</Link>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedScreen;
