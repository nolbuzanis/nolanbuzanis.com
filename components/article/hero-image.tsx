/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

const ImageContainer = styled.div`
  text-align: center;
`;

const Image = styled(LazyLoadImage)`
  z-index: 1;
  width: 100%;
  height: 425px;
  max-width: 944px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0px 30px 60px -10px rgba(0, 0, 0, 0.2), 0px 18px 36px -18px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  object-position: center center;
`;

const HeroImage = (props): JSX.Element => (
  <ImageContainer>
    <Image {...props} />
  </ImageContainer>
);

export default HeroImage;
