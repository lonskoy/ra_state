export const ProjectList = ({projectFilter}) => {
    return (
        <div className="projectList">
            {projectFilter.map((project, index) => (<div key={index} className="projectItem "><img src={project.img}></img></div>))}
        </div>
    );
}