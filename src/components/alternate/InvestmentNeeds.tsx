import { useProjects } from "../../hooks/customHooks";
import LoadingScreen from "../../utils/LoaderScreen";
import ProjectCard from "./ProjectCard";

const InvestmentNeeds = () => {
  const { data, isLoading } = useProjects();
  return (
    <div className="w-full flex capitalize bg-[#001D23] p-5 flex-col items-center justify-center min-h-[100vh]">
      <p className="font-bold text-white text-[50px]">Explore Projects Ideas</p>
      <br />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="flex w-full flex-wrap justify-center ">
          {data?.map((props: any) => (
            <ProjectCard data={props} />
          ))}
        </div>
      )}
    </div>
  );
};

export default InvestmentNeeds;
