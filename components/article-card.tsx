import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  description: string;
  img: string;
  date: string;
  timeToRead: number;
  id: string;
}

const StyledAnchor = styled.a`
  &:hover {
    * > img {
      transform: translateY(-1px);
      box-shadow: 0 50px 80px -20px rgba(0, 0, 0, 0.27), 0 30px 50px -30px rgba(0, 0, 0, 0.3);
    }
    > h2 {
      color: #6166dc;
      transition: color 0.3s ease-in-out;
    }
  }
  @media only screen and (max-width: 540px) {
    border-radius: 5px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
    margin-bottom: 40px;
  }
`;

const ImgContainer = styled(LazyLoadImage)`
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: center center;
  margin-bottom: 30px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 735px) {
    height: 220px;
  }
  @media only screen and (max-width: 540px) {
    height: 200px;
  }
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease !important;
`;

const ArticleTitle = styled.h2`
  margin-bottom: 10px;
  @media only screen and (max-width: 540px) {
    font-size: 22px;
  }
`;

const DateAndTimeText = styled.p`
  color: rgba(8, 8, 11, 0.15);
  font-weight: bold;
`;

const Description = styled.p`
  margin-bottom: 10px;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 540px) {
    padding: 0 20px 30px;
  }
`;

const ArticleCard = ({
  id,
  title,
  description,
  img,
  date,
  timeToRead,
}: ArticleCardProps): JSX.Element => {
  const readableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Link href={`/posts/${id}`}>
      <StyledAnchor href='/'>
        <ImgContainer
          alt={title}
          effect='blur'
          src={img} // use normal <img> attributes as props
        />
        {/* <Img src={img} alt={title} /> */}
        <TextContainer>
          <ArticleTitle>{title}</ArticleTitle>
          <Description>{description}</Description>
          <DateAndTimeText>{`${readableDate} - ${timeToRead.toString()} min read`}</DateAndTimeText>
        </TextContainer>
      </StyledAnchor>
    </Link>
  );
};

export default ArticleCard;
