import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ProjectPage from '../../../app/components/ProjectPage';

// Get the markdown file content for a specific slug
function getProjectContent(slug: string) {
  try {
    const projectsDirectory = path.join(process.cwd(), 'src/data/projects');
    const filePath = path.join(projectsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    return {
      frontmatter: data as {
        title: string;
        tags: string[];
        description: string;
      },
      content,
      slug,
    };
  } catch (error) {
    console.error('Error reading project file:', error);
    return null;
  }
}

// Generate static params for all project pages
export function generateStaticParams() {
  try {
    const projectsDirectory = path.join(process.cwd(), 'src/data/projects');
    
    if (!fs.existsSync(projectsDirectory)) {
      return [];
    }
    
    const files = fs.readdirSync(projectsDirectory);
    
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => ({
        slug: file.replace('.md', ''),
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generate metadata for SEO
export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectContent(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  
  return {
    title: `${project.frontmatter.title} | Portfolio`,
    description: project.frontmatter.description,
    keywords: project.frontmatter.tags.join(', '),
  };
}

// Main page component
export default function ProjectSlugPage({ params }: { params: { slug: string } }) {
  const project = getProjectContent(params.slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <ProjectPage 
      title={project.frontmatter.title}
      tags={project.frontmatter.tags}
      content={project.content}
    />
  );
}