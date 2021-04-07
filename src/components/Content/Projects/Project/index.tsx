import { Technologies, Tech } from '../../../Technologies';
import { Container, Info, InfoLinks } from './styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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

  useEffect(() => {
    Aos.init({
      duration: 300,
    });
  }, []);

  return (
    <Container reverse={reverse}>
      {reverse ? (
        <>
          <Info data-aos="zoom-in-up">
            <h1>{company}</h1>
            <h2>{project}</h2>
            <p>{description}</p>
            <time>{time}</time>
            <InfoLinks>
              {links &&
                Object.entries(links).map(([key, value]) => (
                  <a href={value.path} target="_blank" key={key}>
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
          <figure data-aos="zoom-in-down">
            <img src={projectImage} alt={project} />
          </figure>
        </>
      ) : (
        <>
          <figure data-aos="zoom-in-up">
            <img src={projectImage} alt={project} />
          </figure>
          <Info data-aos="zoom-in-down">
            <h1>{company}</h1>
            <h2>{project}</h2>
            <p>{description}</p>
            <time>{time}</time>
            <InfoLinks>
              {links &&
                Object.entries(links).map(([key, value]) => (
                  <a href={value.path} target="_blank" key={key}>
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
