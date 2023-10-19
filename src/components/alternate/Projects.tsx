import { useProjects } from "../../hooks/customHooks";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { data } = useProjects();
  console.log(data);
  return (
    <>
      <div className="w-full min-h-[100vh] pt-[100px] ">
        <div className="w-full flex flex-wrap">
          {data?.map((props: any) => (
            <ProjectCard key={props._id} props={props} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
