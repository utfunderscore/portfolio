// Import Next.js Image component for optimized image loading
import Image from "next/image";
// Import Jersey 10 font from Google Fonts for the main title
import { Jersey_10 } from "next/font/google";
// Import projects utility functions
import { getProjectsFromMarkdown } from "../utils/projects";
import ProjectCard from "./ProjectCard";

// Constant for icon size - change this to resize all icons at once
const ICON_SIZE = 25;

// Configure Jersey 10 font with Latin subset and normal weight
const jersey10 = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

// Main page component
export default function Home() {
  // Load projects from markdown files
  const projects = getProjectsFromMarkdown();

  return (
    <main className="flex min-h-screen flex-col items-center p-4 pt-8 bg-transparent">
      {/* Main box wrapping all content */}
      <div className="w-full max-w-3xl bg-white/80 dark:bg-neutral-900/80 shadow-lg border border-gray-100 dark:border-neutral-700 p-0 sm:p-0 flex flex-col">
        {/* Header section: top-aligned */}
        <div className="bg-transparent shadow-none px-4 sm:px-8 pt-8 pb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div className="flex items-start gap-3 h-full">
            <Image
              src="/best.webp"
              alt="utfunderscore avatar"
              width={64}
              height={64}
              priority
            />
            <div className="flex flex-col justify-between h-16">
              <h1
                className={`text-5xl font-bold ${jersey10.className} min-w-0 break-words truncate leading-none`}
                style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: 'clamp(1.5rem, 10vw, 3rem)' }}
              >
                utfunderscore
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-none">
                Connor Young
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 mt-2 sm:mt-0">
            {/* GitHub link with custom SVG icon */}
            <a href="https://github.com/utfunderscore/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-500 transition-colors flex items-center justify-center" style={{ height: ICON_SIZE, width: ICON_SIZE }}>
              <Image src="/github.svg" alt="GitHub" width={ICON_SIZE} height={ICON_SIZE} />
            </a>
            {/* Email link with inline SVG icon */}
            <a href="mailto:connor675756@gmail.com" aria-label="Email" className="hover:text-rose-500 transition-colors flex items-center justify-center" style={{ height: ICON_SIZE, width: ICON_SIZE }}>
              <Image src="/mail.svg" alt="GitHub" width={ICON_SIZE} height={ICON_SIZE} />
            </a>
          </div>
        </div>
        {/* Description below header row */}
        <div className="px-4 sm:px-8 pb-8">
          <p className="text-gray-700 dark:text-gray-300 text-base">
            Hey!
          </p>
        </div>
        {/* Divider: dashed line */}
        <hr className="border-t border-dashed border-gray-300 dark:border-neutral-700 w-full mb-0" />
        {/* Projects section: bottom-aligned */}
        <div className=" dark:border-neutral-800 bg-transparent shadow-none px-4 sm:px-8 pt-6 pb-8 flex flex-col items-center">
          <section className="w-full">
            <h2 className="text-xl font-bold mb-4 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
