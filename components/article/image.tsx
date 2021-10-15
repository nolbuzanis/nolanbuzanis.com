import NextImage from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps): JSX.Element => (
  <NextImage src={src} alt={alt} width={500} height={400} layout='responsive' />
);

export default Image;
