import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkIcon = () => (
  <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
    <path fill='none' d='M0 0h24v24H0z' />
    <path d='M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z' />
  </svg>
);

// const EducationIcon = () => (
//   <svg className='jss74' focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
//     <path fill='none' d='M0 0h24v24H0z' />
//     <path d='M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z' />
//   </svg>
// );

const events = [
  {
    role: 'Software Engineer',
    company: 'Connected',
    location: 'Toronto, ON (Remote)',
    color: '#0073CB',
    date: 'January 2022 - Present',
    icon: <WorkIcon />,
    description: 'End-to-end product development',
  },
];

const Timeline = (): JSX.Element => (
  <VerticalTimeline animate>
    {events.map(({ role, company, location, color, date, icon, description }) => (
      <VerticalTimelineElement
        key={role + company}
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'var(--color-tag-background)', color: 'var(--color-text)' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={date}
        iconStyle={{ background: 'var(--color-background)', color }}
        icon={icon}
      >
        <h3 className='vertical-timeline-element-title'>{`${role} @ ${company}`}</h3>
        <h4 className='vertical-timeline-element-subtitle'>{location}</h4>
        <p>{description}</p>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
);

export default Timeline;
