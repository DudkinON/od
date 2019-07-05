const conf = {
  particles: {
    about: {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        size: {
          value: 3,
          random: true
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 6,
          direction: "bottom",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          }
        }
      }
    },
    landing: {
      particles: {
        number: {
          value: 40,
          density: {
            enable: true,
            value_area: 800
          }
        },
        size: {
          value: 3,
          random: true
        },
        line_linked: {
          distance: 200
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          }
        }
      }
    }
  },
  typing: {
    list: [
      "Software Engineer",
      "Full Stack Engineer",
      "Frontend Engineer",
      "Backend Engineer"],
    delay: 2000,
    text: '',
    index: 0,
    speed: 150
  },
  modules: {
    header: {
      fullName: "Oleg Dudkin",
      links: [
        {
          url: "/about",
          name: "about"
        },
        {
          url: "/skills",
          name: "skills"
        },
        {
          url: "/works",
          name: "works"
        },
        {
          url: "/certificates",
          name: "certificates"
        },
        {
          url: "/contacts",
          name: "contacts"
        }
      ]
    },
    landing: {
      parts: {
        skills: {
          header: 'Skills',
          url: '/mock/skills.json'
        },
        certificates: {
          header: 'Certificates',
          url: '/mock/certificates.json',
          button: 'Read more'
        },
        works: {
          header: 'Works',
          url: '/mock/works.json'
        },
        contact: {
          header: 'Contact',
          url: '/mock/contact.json'
        }
      }
    },
    about: {
      header: "My statistics :-)",
      url: "/mock/benefits.json"
    },
    works: {
      url: '/works'
    }
  }
};

export default (state = conf) => state;