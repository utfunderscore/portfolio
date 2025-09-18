// Import Next.js Image component for optimized image loading
import Image from "next/image";
// Import Jersey 10 font from Google Fonts for the main title
import { Jersey_10 } from "next/font/google";
// Import projects data from JSON file
import projects from "../data/projects.json";

// Constant for icon size - change this to resize all icons at once
const ICON_SIZE = 25;

// Configure Jersey 10 font with Latin subset and normal weight
const jersey10 = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

// Main page component
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 pt-8 bg-transparent">
      {/* Main box wrapping all content */}
      <div className="w-full max-w-3xl bg-white/80 dark:bg-neutral-900/80 shadow-lg border border-gray-100 dark:border-neutral-700 p-0 sm:p-0 flex flex-col">
        {/* Header section: top-aligned */}
  <div className="bg-transparent shadow-none px-4 sm:px-8 pt-4 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <div className="flex items-center gap-3 h-full">
      <Image
        src="https://avatars.githubusercontent.com/u/83981186"
        alt="utfunderscore GitHub avatar"
        width={48}
        height={48}
      />
      <h1
        className={`text-5xl font-bold ${jersey10.className} min-w-0 break-words truncate`}
        style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: 'clamp(1.5rem, 7vw, 3rem)' }}
      >
        utfunderscore
      </h1>
    </div>
    <div className="flex items-center space-x-3 mt-2 sm:mt-0">
      {/* GitHub link with custom SVG icon */}
      <a href="https://github.com/utfunderscore" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-500 transition-colors flex items-center justify-center" style={{ height: ICON_SIZE, width: ICON_SIZE }}>
        <Image src="/github.svg" alt="GitHub" width={ICON_SIZE} height={ICON_SIZE} />
      </a>
      {/* Discord link with custom SVG icon */}
      <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="hover:text-indigo-500 transition-colors flex items-center justify-center" style={{ height: ICON_SIZE, width: ICON_SIZE }}>
        <Image src="/discord.svg" alt="Discord" width={ICON_SIZE} height={ICON_SIZE} />
      </a>
      {/* Email link with inline SVG icon */}
      <a href="mailto:connor675756@gmail.com" aria-label="Email" className="hover:text-rose-500 transition-colors flex items-center justify-center" style={{ height: ICON_SIZE, width: ICON_SIZE }}>
        <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
      </a>
    </div>
  </div>
        {/* Description below header row */}
        <div className="px-4 sm:px-8 pb-4">
          <p className="text-gray-700 dark:text-gray-300 text-base w-4/5 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat ultricies risus, ac porta enim urna eu augue.
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
                <div key={index} className="border-2 border-gray-200 dark:border-neutral-700 p-4 bg-white/50 dark:bg-neutral-800/50">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
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
