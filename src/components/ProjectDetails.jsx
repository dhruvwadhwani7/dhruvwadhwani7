import { motion } from "motion/react";
import "../project_layout.css";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 backdrop-blur-sm project-details">
      <motion.div
        className="relative w-[90%] max-w-lg max-h-[80vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 project-modal-box"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-sm top-4 right-4 bg-midnight hover:bg-gray-500"
        >
          <img
            src="assets/close.svg"
            alt="Close"
            className="w-5 h-5"
          />
        </button>

        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-2xl project-main-image"
        />

        <div className="p-4">
          <h5 className="mb-2 text-xl font-bold text-white project-detail-title">
            {title}
          </h5>

          <p className="mb-3 text-sm font-normal text-neutral-400 project-description">
            {description}
          </p>

          {subDescription.map((subDesc, index) => (
            <p
              key={index}
              className="mb-2 text-sm font-normal text-neutral-400 project-subdescription"
            >
              {subDesc}
            </p>
          ))}

          <div className="flex items-center justify-between mt-4 project-detail-stack">
            <div className="flex gap-2">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-8 hover-animation"
                />
              ))}
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium cursor-pointer hover-animation"
            >
              View Project
              <img
                src="assets/arrow-up.svg"
                alt="Open Project"
                className="size-4 project-link"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;