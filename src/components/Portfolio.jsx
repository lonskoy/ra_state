import { Toolbar } from "./Toolbar";
import { ProjectList } from "./ProjectList";
import { useState } from "react";
import { projects } from "../data";

export const Portfolio = () => {

  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const [selected, setSelected] = useState("All");
  const [filtersProject, setFiltersProject] = useState(projects);


  const onClickHandler = (filter) => {
    setSelected(filter);
    if(filter === 'All') {
      setFiltersProject(projects);
      return
    }
    const filtredArray = projects.filter(project => project.category === filter);
    setFiltersProject(filtredArray);
  }

  console.log(filtersProject);

  return (
    < div className="conteiner">
      <Toolbar
        filters={filters}
        selected={selected}
        onClick={onClickHandler} />

       <ProjectList projectFilter={filtersProject} />

    </div>
  );

}