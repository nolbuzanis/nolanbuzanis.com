import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ArticleCardProps {
  title: string;
  description: string;
  img: string;
  date: Date;
  timeToRead: number;
}

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
`;

const ArticleTitle = styled.h2`
  margin-bottom: 10px;
`;

const DateAndTimeText = styled.p`
  color: rgba(8, 8, 11, 0.15);
  font-weight: bold;
`;

const Description = styled.p`
  margin-bottom: 10px;
`;

const ArticleCard = ({
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
    <div>
      <ImgContainer
        alt={title}
        effect='blur'
        src={img} // use normal <img> attributes as props
      />
      {/* <Img src={img} alt={title} /> */}
      <ArticleTitle>{title}</ArticleTitle>
      <Description>{description}</Description>
      <DateAndTimeText>{`${readableDate} - ${timeToRead.toString()} min read`}</DateAndTimeText>
    </div>
  );
};

export default ArticleCard;
