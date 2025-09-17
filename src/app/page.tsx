// Import Next.js Image component for optimized image loading
import Image from "next/image";
// Import Jersey 10 font from Google Fonts for the main title
import { Jersey_10 } from "next/font/google";
// Import projects data from JSON file
import projects from "../data/projects.json";

// Constant for icon size - change this to resize all icons at once
const ICON_SIZE = 16;

// Configure Jersey 10 font with Latin subset and normal weight
const jersey10 = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

// Main page component
export default function Home() {
  return (
    // Main container with full height, centered content, and monospace font
    <main className="flex min-h-screen flex-col items-center justify-center p-8 font-mono">
      {/* Outer container with responsive max width */}
      <div className="w-full max-w-5xl">
        {/* First section box: Introduction with name and social links */}
        <div className="border-3 border-gray-100 dark:border-neutral-800 bg-transparent shadow px-4 sm:px-8 py-8 flex flex-col items-center">
          {/* Main title using Jersey 10 font */}
          <h1 className={`text-5xl font-bold mb-2 ${jersey10.className}`} style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>utfunderscore</h1>
          {/* Social media icons container */}
          <div className="flex items-center w-full max-w-md justify-center mb-2">
            <div className="flex space-x-4 items-center">
              {/* GitHub link with custom SVG icon */}
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-500 transition-colors flex items-center justify-center" style={{ height: ICON_SIZE, width: ICON_SIZE }}>
                <Image src="/github.svg" alt="GitHub" width={ICON_SIZE} height={ICON_SIZE} />
              </a>
              {/* Discord link with custom SVG icon */}
              <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="hover:text-indigo-500 transition-colors flex items-center justify-center" style={{ height: ICON_SIZE, width: ICON_SIZE }}>
                <Image src="/discord.svg" alt="Discord" width={ICON_SIZE} height={ICON_SIZE} />
              </a>
              {/* Email link with inline SVG icon */}
              <a href="mailto:your@email.com" aria-label="Email" className="hover:text-rose-500 transition-colors flex items-center justify-center" style={{ height: ICON_SIZE, width: ICON_SIZE }}>
                <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
              </a>
            </div>
          </div>
        </div>
        {/* Second section box: Projects showcase */}
        <div className="border-b-3 border-l-3 border-r-3 border-gray-100 dark:border-neutral-800 bg-transparent shadow px-4 sm:px-8 py-8 flex flex-col items-center">
          {/* Projects section */}
          <section className="w-full">
            {/* Projects heading */}
            <h2 className="text-xl font-bold mb-4 text-center">Projects</h2>
            {/* Grid layout for projects: 1 column on mobile, 2 on medium+ screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Map through projects array and render each project card */}
              {projects.map((project, index) => (
                <div key={index} className="border-2 border-gray-200 dark:border-neutral-700 p-4 bg-white/50 dark:bg-neutral-800/50">
                  {/* Project title */}
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  {/* Project description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                  {/* Technologies used - displayed as tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-200 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 px-2 py-1 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
