import React from "react";

interface iCategory{
    icon?: any;
    title?: string;
    content?: string;
}

const CategoryCard:React.FC<iCategory> = ({icon, title, content}) => {
  return (
    <div
      className="w-[350px] h-[150px] medium:w-[300px] mt-2 p-4 flex justify-between  gap-3 hover:border-r-4 hover:border-[#02A95C] hover:border-b-4 duration-300 hover:transition-all  large:w-[300px] large:h-[130px] bg-white ml-5"
      style={{
        boxShadow: "0 6px 15px 0 rgba( 31, 38, 135, 0.37 )",
      }}
    >
      <div className=" flex text-[50px] text-[#02A95C]">
        {icon}
      </div>
      <div className="flex flex-col ">
        <div className="font-bold text-[20px]">{title}</div>
        <div className="text-[15px]">{content}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
