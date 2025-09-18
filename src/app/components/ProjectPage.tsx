'use client';

import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useRouter } from 'next/navigation';

interface ProjectPageProps {
  title: string;
  tags: string[];
  content: string;
}

export default function ProjectPage({ title, tags, content }: ProjectPageProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  // Custom components for styling markdown
  const markdownComponents: Components = {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-6 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-gray-700 dark:text-gray-300">
        {children}
      </li>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900 dark:text-gray-100">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic">
        {children}
      </em>
    ),
    code: ({ children, className }) => {
      const isBlock = className?.includes('language-');
      if (isBlock) {
        return (
          <code className="block bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm">
            {children}
          </code>
        );
      }
      return (
        <code className="bg-gray-100 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-400 mb-4">
        {children}
      </blockquote>
    ),
    a: ({ children, href }) => (
      <a href={href} className="text-blue-600 dark:text-blue-400 hover:underline">
        {children}
      </a>
    ),
    hr: () => (
      <hr className="border-gray-300 dark:border-gray-600 my-8" />
    ),
  };

  return (
    <main className="min-h-screen bg-transparent p-4 pt-8">
      <div className="max-w-4xl mx-auto bg-white/80 dark:bg-neutral-900/80 shadow-lg border border-gray-100 dark:border-neutral-700 overflow-hidden">
        {/* Header with back button */}
        <div className="bg-white/90 dark:bg-neutral-800/90 border-b border-gray-200 dark:border-neutral-700 px-6 py-4">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors mb-4 cursor-pointer"
            aria-label="Go back"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back
          </button>
          
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {title}
          </h1>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Content */}
        <div className="px-6 py-8">
          <div className="max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </main>
  );
}