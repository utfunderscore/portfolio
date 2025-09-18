import React from "react";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  slug: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link 
      href={`/projects/${project.slug}`}
      className="block border-2 border-gray-200 dark:border-neutral-700 p-4 bg-white/50 dark:bg-neutral-800/50 hover:bg-white/70 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer"
    >
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, techIndex) => (
          <span key={techIndex} className="bg-gray-200 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 px-2 py-1 text-sm">
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
