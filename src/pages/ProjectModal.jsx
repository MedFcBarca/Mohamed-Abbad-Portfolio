import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!project || !project.images || project.images.length === 0) {
    return null;
  }

  const next = () => {
    setIndex((prev) => (prev + 1) % project.images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full p-6 relative animate-fadeIn">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={28} />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
        <p className="text-slate-500 mb-6">{project.description}</p>

        {/* Carousel */}
        <div className="relative w-full h-[600px] bg-black rounded-xl flex items-center justify-center overflow-hidden">
          <img
            src={project.images[index]}
            alt={project.name}
            className="max-w-full max-h-full object-contain transition-all duration-500"
          />

          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
