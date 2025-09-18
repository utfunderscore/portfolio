import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  slug: string;
}

export interface MarkdownProject {
  title: string;
  tags: string[];
  description: string;
  content: string;
  slug: string;
}

// Function to get all projects from markdown files
export function getProjectsFromMarkdown(): Project[] {
  try {
    const projectsDirectory = path.join(process.cwd(), 'src/data/projects');
    
    if (!fs.existsSync(projectsDirectory)) {
      return [];
    }
    
    const files = fs.readdirSync(projectsDirectory);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    
    return markdownFiles.map(file => {
      const filePath = path.join(projectsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      const slug = file.replace('.md', '');
      
      return {
        title: data.title || 'Untitled Project',
        description: data.description || '',
        technologies: data.tags || [],
        slug,
      };
    });
  } catch (error) {
    console.error('Error reading markdown projects:', error);
    return [];
  }
}

// Function to get a specific project's full content
export function getProjectBySlug(slug: string): MarkdownProject | null {
  try {
    const projectsDirectory = path.join(process.cwd(), 'src/data/projects');
    const filePath = path.join(projectsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    return {
      title: data.title || 'Untitled Project',
      tags: data.tags || [],
      description: data.description || '',
      content,
      slug,
    };
  } catch (error) {
    console.error('Error reading project file:', error);
    return null;
  }
}