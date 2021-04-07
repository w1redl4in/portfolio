import { Particles } from '../Particles';
import { Project } from './Projects/Project';
import { projects } from './Projects/Project/data';

export const Content = () => {
  return (
    <>
      {projects.map((project, id) => (
        <Project project={project} key={id} />
      ))}
      <Particles />
    </>
  );
};
