import { useDispatch, useSelector } from "react-redux";
import { onToggleState } from "../../global/globalState";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const PopOutScreen = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();
  const onChangeToggle = () => {
    dispatch(onToggleState(!toggle));
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "rgba( 0, 0, 0, 0.15 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 30px )",
      }}
      className="fixed w-full z-10 h-[100vh] top-0 left-0 flex flex-col"
    >
      <div className="w-[350px] min-h-[200px] overflow-hidden bg-white rounded-b-2xl">
        <div className="w-[50px] h-[50px] bg-emerald-500 text-[30px] flex justify-center items-center text-white cursor-pointer transition-all duration-500 hover:bg-[#001d23] rounded-r-full">
          <AiOutlineClose onClick={onChangeToggle} />
        </div>
        <div className="flex flex-col">
          <span className="cursor-pointer hover:bg-[#001d23] hover:text-white my-2 transition-all duration-500 py-2">
            <Link to={`/profile`}>Profile</Link>
          </span>
          <span className="cursor-pointer hover:bg-[#001d23] hover:text-white my-2 transition-all duration-500 py-2">
            <Link to={`/profile/settings`}>Settings</Link>
          </span>
          <span className="cursor-pointer hover:bg-[#001d23] hover:text-white my-2 transition-all duration-500 py-2">
            <Link to={`/profile/projects`}>Projects</Link>
          </span>
          <span className="cursor-pointer hover:bg-[#001d23] hover:text-white transition-all duration-500 py-2">
            <Link to={`/profile/launch`}>Campaign</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopOutScreen;
