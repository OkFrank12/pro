import { useSelector } from "react-redux";
import { useOneProjectPop } from "../../hooks/customHooks";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const user = useSelector((state: any) => state.user)
  const { data } = useOneProjectPop(user);
  console.log(data);
  return (
    <>
      <div className="w-full min-h-[100vh] pt-[100px] ">
        <div className="w-full flex flex-wrap">
          {data?.beg?.map((props: any) => (
            <ProjectCard key={props._id} data={props} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
