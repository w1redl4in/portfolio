import { Project } from './Projects/Project';
import { projects } from './Projects/Project/data';

export const Content = () => {
  return projects.map((project) => <Project project={project} />);
};
