import { Technologies, Tech } from '../../../Technologies';
import { Container, Info, InfoLinks } from './styles';

interface ProjectProps {
  project: {
    projectImage: string;
    company: string;
    project: string;
    description: string;
    time: string;
    reverse: boolean;
    links?: {
      [key: string]: {
        path: string;
      };
    };
    icons: {
      [key: string]: {
        path: string;
      };
    };
  };
}

export const Project: React.FC<ProjectProps> = ({ project: Project }) => {
  const {
    company,
    description,
    icons,
    project,
    projectImage,
    time,
    reverse,
    links,
  } = Project;

  return (
    <Container reverse={reverse}>
      {reverse ? (
        <>
          <Info>
            <h1>{company}</h1>
            <h2>{project}</h2>
            <p>{description}</p>
            <time>{time}</time>
            <InfoLinks>
              {links &&
                Object.entries(links).map(([key, value]) => (
                  <a href={value.path} target="_blank">
                    {key}
                  </a>
                ))}
            </InfoLinks>
            <Technologies>
              {Object.entries(icons).map(([key, value]) => (
                <Tech key={key}>
                  <img src={value.path} alt={key} />
                  <span>{key}</span>
                </Tech>
              ))}
            </Technologies>
          </Info>
          <figure>
            <img src={projectImage} alt={project} />
          </figure>
        </>
      ) : (
        <>
          <figure>
            <img src={projectImage} alt={project} />
          </figure>
          <Info>
            <h1>{company}</h1>
            <h2>{project}</h2>
            <p>{description}</p>
            <time>{time}</time>
            <InfoLinks>
              {links &&
                Object.entries(links).map(([key, value]) => (
                  <a href={value.path} target="_blank">
                    {key}
                  </a>
                ))}
            </InfoLinks>
            <Technologies>
              {Object.entries(icons).map(([key, value]) => (
                <Tech key={key}>
                  <img src={value.path} alt={key} />
                  <span>{key}</span>
                </Tech>
              ))}
            </Technologies>
          </Info>
        </>
      )}
    </Container>
  );
};
