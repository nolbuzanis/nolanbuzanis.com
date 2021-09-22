import styled from 'styled-components';
import Link from 'next/link';

const StyledA = styled.a`
  color: var(--color-title-hover);
  transition: color 0.25s ease 0s;
  :hover {
    text-decoration: underline;
  }
`;

interface StyledLinkProps {
  href: string;
  children: string;
}

const StyledLink = ({ href, children }: StyledLinkProps): JSX.Element => (
  <Link href={href} passHref>
    <StyledA target='_blank'>{children}</StyledA>
  </Link>
);

export default StyledLink;
