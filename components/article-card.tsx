import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';

interface ArticleCardProps {
  title: string;
  description: string;
  img: string;
  date: string;
  timeToRead: number;
  id: string;
  listView: boolean;
  category: {
    name: string;
    slug: string;
  };
}

const StyledAnchor = styled.a<{ listView: boolean }>`
  // overflow: hidden;
  ${({ listView }) => {
    if (listView) {
      return `
    display: grid;
    position: relative;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 488px;
    column-gap: 96px;
    height: 220px;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin-bottom: 50px;

    @media only screen and (max-width: 66.875em) {
      column-gap: 24px;
      grid-template-columns: 1fr 380px;
    }
  `;
    }

    return `
  
    `;
  }}

  @media only screen and (max-width: 735px) {
    display: block;
    margin-bottom: 60px;
    height: inherit;
  }
  @media only screen and (max-width: 540px) {
    border-radius: 5px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
    margin-bottom: 40px;
  }

  &:hover {
    div.imgcontainer {
      transform: translateY(-1px);
      box-shadow: rgba(0, 0, 0, 0.27) 0px 50px 80px -20px, rgba(0, 0, 0, 0.3) 0px 30px 50px -30px;
    }
    * > h2 {
      color: var(--color-title-hover);
      transition: color 0.3s ease-in-out;
    }
  }
`;

const ImgContainer = styled.div<{ listView: boolean }>`
  width: 100%;
  height: ${({ listView }) => (listView ? '100%' : '280px')};
  position: relative;
  border-radius: 5px;
  * > img {
    object-fit: cover;
    object-position: center center;
  }

  ${({ listView }) => (listView ? '' : 'margin-bottom: 30px;')}
  // box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 60px -10px, rgba(0, 0, 0, 0.33) 0px 18px 36px -18px;
  @media only screen and (max-width: 735px) {
    height: 220px;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 540px) {
    height: 200px;
    box-shadow: none;
    border-radius: 5px 5px 0 0;
  }
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease !important;
`;

const ArticleTitle = styled.h2`
  color: var(--color-text);
  transition: color 0.25s ease;
  margin-bottom: 10px;
  @media only screen and (max-width: 540px) {
    font-size: 22px;
  }
`;

const DateAndTimeText = styled.p`
  display: inline-block;
  color: var(--color-reading-time);
  // ${(props) => props.theme.name === 'light' && 'opacity: 0.5;'}
  transition: color 0.25s ease;
  // font-weight: 500;
`;

const Description = styled.p`
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow-wrap: normal;
  white-space: normal;
  overflow: hidden;
  max-width: 515px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 540px) {
    padding: 0 20px 30px;
  }
`;

const TagBox = styled.button`
  display: inline-block;
  margin-left: 10px;
  padding: 2px 8px;
  background-color: var(--color-tag-background);
  border-radius: 10px;
  height: 24px;
  line-height: 24px;
  color: var(--color-reading-time);
  font-size: 14px;
  transition: all 0.25s ease;
  &:hover {
    filter: brightness(85%);
  }
`;

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.substring(1);

const ArticleCard = ({
  id,
  title,
  description,
  img,
  // date,
  timeToRead,
  listView,
  date,
  category,
}: ArticleCardProps): JSX.Element => {
  const readableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    // year: 'numeric',
  });

  // const router = useRouter();

  return (
    <Link href={`/posts/${id}`}>
      <StyledAnchor href='/' listView={listView}>
        <ImgContainer className='imgcontainer' listView={listView}>
          <Image alt={title} src={img} layout='fill' />
        </ImgContainer>
        <TextContainer>
          <ArticleTitle>{title}</ArticleTitle>
          <Description>{description}</Description>
          <div>
            <DateAndTimeText>{`${readableDate} · ${timeToRead.toString()} min read`}</DateAndTimeText>
            {category && (
              <TagBox
                aria-label={category.name}
                // onClick={() => router.push(`/category/${category.slug}`)}
              >
                {capitalize(category.name)}
              </TagBox>
            )}
          </div>
        </TextContainer>
      </StyledAnchor>
    </Link>
  );
};

export default ArticleCard;
