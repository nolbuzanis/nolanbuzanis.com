import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';
import Link from './article/link';

const WorkIcon = () => (
  <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
    <path fill='none' d='M0 0h24v24H0z' />
    <path
      d='M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z'
      fill='white'
    />
  </svg>
);

const ConstructionIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    enableBackground='new 0 0 24 24'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    fill='#FFFFFF'
  >
    <g>
      <rect fill='none' height='24' width='24' />
    </g>
    <g>
      <g>
        <rect
          height='8.48'
          transform='matrix(0.7071 -0.7071 0.7071 0.7071 -6.8717 17.6255)'
          width='3'
          x='16.34'
          y='12.87'
        />
        <path d='M17.5,10c1.93,0,3.5-1.57,3.5-3.5c0-0.58-0.16-1.12-0.41-1.6l-2.7,2.7L16.4,6.11l2.7-2.7C18.62,3.16,18.08,3,17.5,3 C15.57,3,14,4.57,14,6.5c0,0.41,0.08,0.8,0.21,1.16l-1.85,1.85l-1.78-1.78l0.71-0.71L9.88,5.61L12,3.49 c-1.17-1.17-3.07-1.17-4.24,0L4.22,7.03l1.41,1.41H2.81L2.1,9.15l3.54,3.54l0.71-0.71V9.15l1.41,1.41l0.71-0.71l1.78,1.78 l-7.41,7.41l2.12,2.12L16.34,9.79C16.7,9.92,17.09,10,17.5,10z' />
      </g>
    </g>
  </svg>
);

const ProjectIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    fill='#fff'
  >
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z' />
  </svg>
);

const EducationIcon = () => (
  <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
    <path fill='none' d='M0 0h24v24H0z' />
    <path
      d='M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z'
      fill='#fff'
    />
  </svg>
);

const events = [
  {
    role: 'Software Engineer',
    company: 'Connected',
    location: 'Toronto, ON (Remote)',
    color: '#0073CB',
    date: 'January 2022 - Present',
    icon: <WorkIcon />,
    description: 'End-to-end product development',
    technologies: '',
    href: 'https://connected.io/',
  },
  {
    role: 'Camper Van Conversion',
    // company: 'Connected',
    location: 'Parry Sound, ON',
    color: 'rgba(42,170,138,1)',
    date: 'October 2021 - November 2022',
    icon: <ConstructionIcon />,
    description:
      'Converted a RAM Promaster commercial cargo van to a livable camper van. The completed van has a hot & cold water system, an off-grid electrical system, custom wooden kitchen and upper cabinets, a hidden bathroom, and a queen size bed.',
    technologies: 'CAD (3D) design, Electrical system design, Plumbing, Carpentry',
  },
  {
    role: 'Lead Software Engineer',
    company: 'Portl Media',
    location: 'Toronto, ON',
    color: '#0073CB',
    date: 'November 2019 - June 2021',
    icon: <WorkIcon />,
    // eslint-disable-next-line no-sparse-arrays
    description: [
      'Architected Portl’s expansion into Vancouver, and US cities',
      'Spearheaded the driver leaderboard project and built a proprietary tablet distance calculation script to increase driver engagement by “gamifying” the experience',
      'Integrated to 2x as many ad platforms previously to create ad demand redundancy',
      'Optimized ad loop, increasing ads played by 10% by prefetching content from advertising DSPs',
      'Automated the tablet shipping process by integrating with Canada Post API, decreasing time to ship by ~300%',
      'Developed PWAs and custom caching resulting in decreasing tablet data usage dramatically',
    ],
    technologies: 'React, Node, Typescript, Android (Java), MongoDB, Jest, Cypress, AWS',
    href: 'https://portlmedia.com/',
  },
  {
    role: 'Founder',
    company: 'Genie (Commercial Project)',
    location: 'Toronto, ON',
    color: 'rgba(42,170,138,1)',
    date: 'October 2019 - July 2020',
    icon: <ProjectIcon />,
    description: [
      'Founded, designed, and developed a platform to increase music artist exposure by providing pre-saving capabilities and smart linking of songs to multiple music platforms',
      'Created custom analytics based on Google’s GA model to track fans that visit an artist’s page',
    ],
    technologies:
      'Stripe API, Firebase hosting & storage, Google cloud functions, Node, React, MongoDB, AdobeXD, Spotify API, Deezer API, Nivo for DataViz',
    href: 'https://indepdent-8833f.web.app/',
  },
  {
    role: 'Developer',
    company: 'Impressions (Personal Project)',
    location: 'Toronto, ON',
    color: 'rgba(42,170,138,1)',
    date: 'October 2019',
    icon: <ProjectIcon />,
    description:
      "Created a web app to analyse users' Spotify songs and breakdown their personal taste in music",
    technologies:
      'React & Redux, Node (Express), MongoDB, Mongoose, Passport.js, Spotify SDK and API',
    href: 'https://github.com/nolbuzanis/Impressions',
  },
  {
    role: 'Electrical Engineering, B.A.S',
    company: "Queen's University",
    location: 'Kingston, ON',
    color: '#C60C30',
    date: '2015 – 2019',
    icon: <EducationIcon />,
    href: 'https://www.queensu.ca/',
  },
];

const ListItem = styled.li`
  color: #73737d;
  line-height: 18px;
  font-size: 12px;
`;

const Timeline = (): JSX.Element => (
  <VerticalTimeline animate>
    {events.map(
      ({ role, company, location, color, date, icon, description, technologies, href }) => (
        <VerticalTimelineElement
          key={role + company}
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'var(--color-tag-background)', color: 'var(--color-text)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date={date}
          iconStyle={{ background: color }}
          icon={icon}
          onTimelineElementClick={() => href && window.open(href)}
        >
          <h3 className='vertical-timeline-element-title'>
            {role}
            {company && ' @ '}
            {company && (href ? <Link href={href}>{company}</Link> : company)}
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>{location}</h4>
          {description && description.constructor === Array ? (
            <ul>
              {description.map((point) => (
                <ListItem>{point}</ListItem>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
          {technologies && <p>{technologies}</p>}
        </VerticalTimelineElement>
      ),
    )}
  </VerticalTimeline>
);

export default Timeline;
