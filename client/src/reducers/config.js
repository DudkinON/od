const conf = {
  particles: {
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
        }
      }
    }
  }
};

export default (state = conf) => state;