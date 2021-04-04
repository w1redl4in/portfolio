import ParticlesLib from 'react-particles-js';

export const Particles: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        zIndex: 1,
      }}
    >
      <ParticlesLib
        params={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          background: {
            color: {
              value: 'transparent',
            },
            image: '',
            position: '50% 50%',
            repeat: 'no-repeat',
            size: 'cover',
            opacity: 1,
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            color: {
              value: '#000000',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 1,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#000000',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: true,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            // detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};