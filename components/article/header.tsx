import styled from 'styled-components';

const Container = styled.header`
  position: relative;
  z-index: 10;
  margin: 100px auto 120px;
  padding-left: 68px;
  max-width: 749px;
  @media only screen and (max-width: 540px) {
    padding: 0 40px;
  }
`;

const Title = styled.h1`
  word-break: keep-all;
  font-size: 48px;
  font-family: Merriweather, Georgia, serif;
  margin-bottom: 25px;
  font-weight: bold;
  line-height: 1.32;
  color: var(--color-text);
  @media only screen and (max-width: 540px) {
    font-size: 32px;
  }
`;

const Author = styled.p`
  font-weight: 500;
  margin-bottom: 5px;
  color: rgb(115, 115, 125);
  font-size: 14px;
  margin: 0;
  font-weight: 400;
`;

const DateAndTime = styled.p`
  color: rgb(115, 115, 125);
  font-size: 14px;
  margin: 0;
  font-weight: 400;
`;

interface HeaderProps {
  title: string;
  author: string;
  date: string;
  timeToRead: number;
}

const Header = (props: HeaderProps): JSX.Element => {
  const { title, author, date, timeToRead } = props;

  const readableDate = new Date(date).toLocaleDateString('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Container>
      <Title>{title}</Title>
      <div>
        <Author>{author}</Author>
        <DateAndTime>{`${readableDate} · ${timeToRead} mins read`}</DateAndTime>
      </div>
    </Container>
  );
};

export default Header;
