// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */
import boy from './Assets/boy.png';
import pass from './Assets/sponsorsLogos/1pass.png';
import ACF from './Assets/sponsorsLogos/ACF.png';
import cfc from './Assets/sponsorsLogos/cfc.png';
import echoAR from './Assets/sponsorsLogos/echoAR.png';
import egg from './Assets/sponsorsLogos/egg.png';
import glimpse from './Assets/sponsorsLogos/glimpse.png';
import interviewC from './Assets/sponsorsLogos/interview-cake.jpg';
import ll from './Assets/sponsorsLogos/ll.png';
import qoom from './Assets/sponsorsLogos/qoom.svg';
import Replit from './Assets/sponsorsLogos/replit.png';
import sublime from './Assets/sponsorsLogos/sublime.png';
import taskade from './Assets/sponsorsLogos/taskade.png';
import lyin from './Assets/teami/lyin.jpg';
/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */
// Importing all Team members images  from Assets
import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';

const TOP_SECTION = {
  TITLE: 'Join Killabytez Hacks',
  Typed_effect: [
    'Explore various fields for a three-week workshop program',
    '24 hours of creation',
    'Win awesome prizes'
  ],
  SHORT_DESCRIPTION:
    'Join us starting July 18, 2022 with over 300 students from across the nation for a 3-week workshop program followed by a 24-hour hackathon of creation, innovation, & fun.',
  IMG_SRC: boy,
  DISCORD_LINK: 'https://discord.gg/8vCXtABd',
  JUDGES_FORM_LINK: 'https://forms.gle/s1Ts8BCNjYZ4mAPv6',
  HACKERS_REGISTRATION_FORM_LINK: 'https://forms.gle/vUdSfPfp1DNh8D3p8'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/limbohacks/',
  discord: 'https://discord.gg/8vCXtABd',
  linkedin: 'https://www.linkedin.com/company/killabytez-robotics',
  devpost: 'https://killabytez-hacks.devpost.com/',
  email: 'mailto:hello@info@killabytez.club',
  mail: 'info@killabytez.club'
};

const MIDDLE_SECTION = {
  TITLE: 'What is Killabytez Hacks?',
  LONG_DESCRIPTION:
    'Following our four-week program of workshops, Killabytez Hacks will be held on August 6th & 7th for a 24 hour virtual hackathon. We calls for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers. Throughout the weekend hackers at Killabytez Hacks will have unique opportunities to learn from each other trying hands in new technologies. We are determined to have an all-inclusive and diverse group of students attending.',
  LOGO_EFFECT: true,
  LOGO: ''
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://forms.gle/AMzhMGwfjvQ5McWB7'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://forms.gle/AMzhMGwfjvQ5McWB7'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 7,
  year: 2022
};

const schedule = [
  {
    day: '18-7-2022',
    events: [
      {
        title: 'Intro to Computer Aided Design (CAD)',
        timings: '6 PM - 7 PM',
        link: 'https://zoom.us/j/3381689362?pwd=UmNFVW52bjN5amNzSUJtd0hnSGpRUT09'
      }
    ]
  },
  {
    day: '20-7-2022',
    events: [
      {
        title: 'Intro to Programming in Java',
        timings: '6 PM - 7 PM',
        link: 'https://zoom.us/j/3381689362?pwd=UmNFVW52bjN5amNzSUJtd0hnSGpRUT09'
      }
    ]
  },
  {
    day: '22-7-2022',
    events: [
      {
        title: 'Intro to Hardware',
        timings: '6 PM - 7 PM',
        link: 'https://zoom.us/j/3381689362?pwd=UmNFVW52bjN5amNzSUJtd0hnSGpRUT09'
      }
    ]
  },
  {
    day: '25-7-2022',
    events: [
      {
        title: 'Intro to Computer Aided Design (CAD)',
        timings: '6 PM - 7 PM',
        link: 'https://zoom.us/j/3381689362?pwd=UmNFVW52bjN5amNzSUJtd0hnSGpRUT09'
      }
    ]
  },
  {
    day: '27-7-2022',
    events: [
      {
        title: 'Intro to Programming in Java',
        timings: '6 PM - 7 PM',
        link: 'https://zoom.us/j/3381689362?pwd=UmNFVW52bjN5amNzSUJtd0hnSGpRUT09'
      }
    ]
  },
  {
    day: '29-7-2022',
    events: [
      {
        title: 'Intro to Hardware',
        timings: '6 PM - 7 PM',
        link: 'https://zoom.us/j/3381689362?pwd=UmNFVW52bjN5amNzSUJtd0hnSGpRUT09'
      }
    ]
  },
  {
    day: '1-8-2022',
    events: [
      {
        title: 'Intro to Computer Aided Design (CAD)',
        timings: '6 PM - 7 PM',
        link: 'https://zoom.us/j/3381689362?pwd=UmNFVW52bjN5amNzSUJtd0hnSGpRUT09'
      }
    ]
  },
  {
    day: '3-8-2022',
    events: [
      {
        title: 'Intro to Programming in Java',
        timings: '6 PM - 7 PM',
        link: 'https://zoom.us/j/3381689362?pwd=UmNFVW52bjN5amNzSUJtd0hnSGpRUT09'
      }
    ]
  },
  {
    day: '5-8-2022',
    events: [
      {
        title: 'Intro to Hardware',
        timings: '6 PM - 7 PM',
        link: 'https://zoom.us/j/3381689362?pwd=UmNFVW52bjN5amNzSUJtd0hnSGpRUT09'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Overall First',
      content:
        'First Overall prize will be given to a project that outstands all other submissions'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'Overall Second',
      content:
        'Second Overall prize will be given to the second best project of the hackathon'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'Overall Third',
      content:
        'Best third overall project of the hackathon will win some awesome prizes'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: 'Best Solo',
      content:
        'You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: ' Best Beginner',
      content:
        'Your project will qualify for this category if you are a beginner in this field.'
    },
    {
      icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
      type: 'Best UI/UX',
      content: 'Project with most creative designs will be UI/UX track'
    }
  ],
  [
    //Array 3
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: 'More prizes',
      content: 'More prizes will be revealed later\n'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Brian Cisto',
      role: 'Brian Cisto',
      github: 'https://github.com/bcbro',
      linkedin: '',
      img: me
    },
    {
      Name: 'Shashank Shriram',
      role: 'Shashank Shriram',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Shashank Karthik Rajan',
      role: 'Shashank Karthik Rajan',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Mohit Tamboli',
      role: 'Mohit Tamboli',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Arnav Arora',
      role: 'Arnav Arora',
      github: '',
      linkedin: '',
      img: zoha
    },
    {
      Name: 'Allen Cisto',
      role: 'Allen Cisto',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Brian Cisto',
      role: 'Brian Cisto',
      github: 'https://www.github.com/bcbro',
      linkedin: '',
      img: me
    },
    {
      Name: 'Mohit Tamboli',
      role: 'Mohit Tamboli',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Shashank Shriram',
      role: 'Shashank Shriram',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Shashank Karthik Rajan',
      role: 'Shashank Karthik Rajan',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Arnav Arora',
      role: 'Arnav Arora',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  // [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  // [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  // [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  // [{src: egg}, {src: ll}, {src: ACF}] //Array 4
  []
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is a 24 hour event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'
      },
      {
        label: 'Who can attend?',
        content:
          'Killabytez Hacks is open to all undergraduate, high school students and middle school students from all schools.'
      },
      {
        label: 'I am a first time hacker. What should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general.'
      },
      {
        label: 'How does team formation works?',
        content:
          "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: 'How do I register myself in the hackathon?',
        content:
          'All you need is to fill our form above and join the Discord. Feel free to reach out to any of the organizers. We will guide you through everything you need to do to get started.'
      },
      {
        label: 'Can I volunteer?',
        content:
          'Yes, we are actively looking for volunteers. Fill the form (in footer section) we will be glad to have you.'
      },
      {
        label: 'Will there be swag?',
        content:
          'Yes! All participants will receive Killabytez Hacks swag! Coming soon.'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly at brian@killabytez.club or info@killabytez.club. We would happy to help you.'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
