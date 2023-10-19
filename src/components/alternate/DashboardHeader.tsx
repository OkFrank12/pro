import { Link } from "react-router-dom";
import img1 from "../../assets/hero-one-big.jpg";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { onToggleState } from "../../global/globalState";
import PopOutScreen from "./PopOutScreen";
import { useProfile } from "../../hooks/customHooks";

const DashboardHeader = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();
  const onChangeToggle = () => {
    dispatch(onToggleState(!toggle));
  };

  const user = useSelector((state: any) => state.user);
  const { data } = useProfile(user);
  return (
    <>
      <div className="flex text-white bg-[#001d23] z-10 w-full fixed h-[70px]">
        <div className="absolute justify-between z-40 bg-opacity-10 shadow-md p-3 flex items-center w-full h-full">
          <p className="text-[35px] flex tablet:text-[30px] items-center smallTab:text-[15px]">
            <img src={data?.avatar} className="border mr-2 w-[50px] h-[50px] rounded-full"/>
            {data?.name} Dashboard
          </p>
          <div className="flex tablet:hidden items-center ml-5">
            <span className="cursor-pointer hover:scale-[1.09] mx-5">
              <Link to={`/profile`}>Profile</Link>
            </span>
            <span className="cursor-pointer hover:scale-[1.09] mx-5">
              <Link to={`/profile/settings`}>Settings</Link>
            </span>
            <span className="cursor-pointer hover:scale-[1.09] mx-5">
              <Link to={`/profile/projects`}>Projects</Link>
            </span>
            <span className="cursor-pointer hover:scale-[1.09] mx-5">
              <Link to={`/profile/launch`}>Campaign</Link>
            </span>
          </div>
          <button className="px-10 tablet:hidden tablet:p-3 py-3 border-white border-[1px] rounded hover:scale-[1.09] transition-all duration-300">
            <span className="">logOut</span>
          </button>
          <button
            onClick={onChangeToggle}
            className="px-10 hidden tablet:flex tablet:p-3 py-3 border-white border-[1px] rounded hover:scale-[1.09] transition-all duration-300"
          >
            <AiOutlineLogout className="" />
          </button>
        </div>
      </div>
      {toggle && <PopOutScreen />}
    </>
  );
};

export default DashboardHeader;
