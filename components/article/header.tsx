import styled from 'styled-components';

const Container = styled.header`
  position: relative;
  z-index: 10;
  margin: 100px auto 120px;
  padding-left: 68px;
  max-width: 749px;
`;

const Title = styled.h1`
  word-break: keep-all;
  font-size: 48px;
  font-family: Merriweather, Georgia, serif;
  margin-bottom: 25px;
  font-weight: bold;
  line-height: 1.32;
  color: ${(props) => props.theme.textColor};
`;

interface HeaderProps {
  title: string;
  // author?: string;
  // date?: string;
  // timeToRead?: string;
}

const Header = (props: HeaderProps): JSX.Element => {
  const { title } = props;
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
