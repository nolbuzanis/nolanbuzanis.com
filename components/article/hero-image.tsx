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
`;

const StyledImage = styled(Image)`
  overflow: hidden;
  box-shadow: 0px 30px 60px -10px rgba(0, 0, 0, 0.2), 0px 18px 36px -18px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  object-position: center center;
`;

interface ImageProps {
  src: string;
  alt: string;
}

const HeroImage = ({ src, alt }: ImageProps): JSX.Element => (
  <ImageContainer>
    <StyledImage layout='fill' src={src} alt={alt} />
  </ImageContainer>
);

export default HeroImage;
