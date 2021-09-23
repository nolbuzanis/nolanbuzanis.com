import styled from 'styled-components';

const Section = styled.section`
  padding: 0 4rem 80px;
`;

const Line = styled.div`
  position: relative;
  margin: 140px auto 50px;
  border-bottom: 1px solid var(--color-horizontal-rule);
`;

const FooterContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
  font-size: 16px;
  color: var(--color-text);
  @media only screen and (max-width: 540px) {
    justify-content: center;
  }
`;

const Footer = (): JSX.Element => {
  const copyrightDate = new Date().getFullYear();

  return (
    <Section>
      <Line />
      <FooterContent>
        <span>
          &copy;
          {` ${copyrightDate} Nolan Buzanis`}
        </span>
      </FooterContent>
    </Section>
  );
};

export default Footer;
