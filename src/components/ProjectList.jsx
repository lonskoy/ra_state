export const ProjectList = (props) => {
    return (
        <>
            <div className="projects">
                {props.forEach(elem => {
                    return (
                        <div></div>
                    )
                })}
            </div>
        </>
    );
}