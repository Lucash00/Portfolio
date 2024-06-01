export interface Project {
    title: string;
    briefDescription: string;
    description: string;
    product: boolean;
    tags: string[];
    projectUrl: string;
    media: string[];
  }
  
  export const projects: Project[] = [
    {
      title: 'Bafre',
      briefDescription: 'Brief description of the first project.',
      description: 'Detailed description of the first project.',
      product: true,
      tags: ['JavaScript', 'Astro', 'TailwindCSS'],
      projectUrl: 'https://example.com/project-one',
      media: ['/path/to/image1.jpg', '/path/to/video1.mp4']
    },
    {
      title: 'Project Two',
      briefDescription: 'Brief description of the second project.',
      description: 'Detailed description of the second project.',
      product: false,
      tags: ['HTML', 'CSS', 'JavaScript'],
      projectUrl: 'https://example.com/project-one',
      media: ['/path/to/image2.jpg']
    },
    {
      title: 'Project Three',
      briefDescription: 'Brief description of the second project.',
      description: 'Detailed description of the second project.',
      product: true,
      tags: ['HTML', 'CSS', 'JavaScript'],
      projectUrl: 'https://example.com/project-one',
      media: ['/path/to/image2.jpg']
    },
    {
      title: 'Project Four',
      briefDescription: 'Brief description of the second project.',
      description: 'Detailed description of the second project.',
      product: false,
      tags: ['HTML', 'CSS', 'JavaScript'],
      projectUrl: 'https://example.com/project-one',
      media: ['/path/to/image2.jpg']
    }
  ];
  