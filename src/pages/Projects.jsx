import { useState } from "react";
import { CTA } from "../components";
import ProjectModal from "./ProjectModal";
import { projects } from "../constants";

const Projects = () => {
const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="max-container relative">
      {/* Title */}
      <h1 className="head-text">
        Quelques{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projets
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Au fil des années, j’ai travaillé sur de nombreux projets.
Ceux présentés ici sont ceux qui me tiennent le plus à cœur : ils regroupent des projets d’études, des initiatives personnelles et mes premières expériences professionnelles.
      </p>

      {/* Projects Grid */}
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div
            key={project.name}
            onClick={() => setSelectedProject(project)}
            className="lg:w-[400px] w-full cursor-pointer group"
          >
            {/* Icon */}
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold group-hover:text-blue-600 transition-colors">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>

              <span className="mt-4 text-blue-600 font-semibold">
                Voir le projet  →
              </span>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
