import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";

const Project = ({ project }) => {
  const { getTranslation } = useOutletContext();

  return (
    <div className="card bg-base-300 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={project.image}
          alt={`Project ${project.title}`}
          className="h-[200px] w-full rounded-md"
        />
      </figure>
      <div className="card-body gap-4">
        <h3 className="text-3xl font-bold tracking-tighter">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.badges.map((badge, index) => (
            <span
              key={index}
              className="badge badge-neutral badge-md cursor-pointer capitalize"
            >
              {badge}
            </span>
          ))}
        </div>
        <p className="mb-4 text-lg">{project.description}</p>
        <div className="card-actions">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {getTranslation("view_project")}
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            {getTranslation("view_repo")}
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
