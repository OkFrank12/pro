import { useProjects } from "../../hooks/customHooks";
import ProjectCard from "./ProjectCard";

const InvestmentNeeds = () => {
  const { data } = useProjects();
  return (
    <div className="w-full flex capitalize bg-[#001D23] p-5 flex-col items-center justify-center min-h-[100vh]">
      <p className="font-bold text-white text-[50px]">Explore Projects Ideas</p>
      <br />
      <div className="flex w-full flex-wrap justify-center ">
        {data?.map((props: any) => (
          <ProjectCard props={props} />
        ))}
      </div>
    </div>
  );
};

export default InvestmentNeeds;
