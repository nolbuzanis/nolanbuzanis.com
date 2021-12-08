import styled from 'styled-components';
import Timeline from '../components/timeline';
import Header from '../components/article/heading-two';

const Spacing = styled.div`
  height: 50px;
`;
const TimelinePage = (): JSX.Element => (
  <section>
    <Spacing />
    <Header>Experience, Education, & Projects</Header>
    <Spacing />
    <Timeline />
  </section>
);

export default TimelinePage;
