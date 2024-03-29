/* eslint-disable react/jsx-props-no-spreading */
import Image from 'next/image';
import styled from 'styled-components';

const ImageContainer = styled.div`
  text-align: center;
  max-width: 944px;
  width: 100%;
  position: relative;
  height: 425px;
  margin: 0 auto;
  @media only screen and (max-width: 540px) {
    height: 220px;
    width: calc(100vw - 40px);
    box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2), 0 18px 36px -18px rgba(0, 0, 0, 0.22);
  }
`;

const StyledImage = styled(Image)<{ layout: string }>`
  overflow: hidden;
  box-shadow: 0px 30px 60px -10px rgba(0, 0, 0, 0.2), 0px 18px 36px -18px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  object-position: center center;
`;

interface ImageProps {
  src: string;
  alt: string;
  thumbnail: string;
}

const HeroImage = ({ src, alt, thumbnail }: ImageProps): JSX.Element => (
  <ImageContainer>
    <StyledImage layout='fill' src={src} alt={alt} blurDataURL={thumbnail} placeholder='blur' />
  </ImageContainer>
);

export default HeroImage;
