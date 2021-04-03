import { ProjectsContainer } from './styles';
import { Particles } from '../../Particles';

export const Projects: React.FC = ({ children }) => {
  return (
    <ProjectsContainer>
      {children}
      <Particles />
    </ProjectsContainer>
  );
};
