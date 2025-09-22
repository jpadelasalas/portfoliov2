const ProjectCard = ({ path, ext, title, desc, role, icons, url }) => {
  return (
    <div className="project-card bg-card">
      <img src={`/${path}.${ext}`} alt={title} className="cursor-pointer" />
      <div className="mt-4 pl-1">
        <div className="flex flex-row gap-2">
          <h3>{title}</h3>
          {desc == "(On Prem)" ? (
            <label>{desc}</label>
          ) : (
            <a href={url}>
              <label className="cursor-pointer hover:text-white active:text-white">
                {desc}
              </label>
            </a>
          )}
        </div>
        {role && (
          <span>
            {" "}
            <span className="text-gray-100">Role: </span> {role}
          </span>
        )}
        <div className="content">
          {Object.entries(icons).map(([key, value]) => (
            <span
              key={key}
              title={key}
              className="cursor-pointer hover:scale-125 active:scale-125"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
